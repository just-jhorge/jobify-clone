import { useContext, useEffect, useReducer, useState } from "react";
import { serializeValue, deserializeValue } from "./data";
import { AlertContext } from "../Context/AlertContext";
import {
    arrayUnion,
    collection,
    doc,
    getDocs,
    query,
    updateDoc,
    where,
} from "firebase/firestore";
import { AuthContext } from "../Context/AuthContext";
import { db } from "./Firebase.config";
import { useLocation } from "react-router-dom";

export const useLocalState = (defaultValue, stateKey) => {
    const localValue = localStorage.getItem(stateKey);
    const parsedValue = localValue
        ? deserializeValue(localValue)
        : defaultValue;
    const [value, setValue] = useState(parsedValue);

    const setNewValue = (newValue) => {
        setValue((prev) => {
            let val =
                typeof newValue === "function" ? newValue(prev) : newValue;
            localStorage.setItem(stateKey, serializeValue(val));
            return val;
        });
    };

    return [value, setNewValue];
};

export const ACTIONS = {
    MAKE_REQUEST: "make-request",
    GET_DATA: "get-data",
    ERROR: "error",
};

export function readReducer(state, action) {
    switch (action.type) {
        case ACTIONS.MAKE_REQUEST:
            return { ...state, loading: true };

        case ACTIONS.GET_DATA:
            return { ...state, loading: false, ...action.payload };

        case ACTIONS.ERROR:
            return { ...state, loading: false, error: action.payload.error };

        default:
            return state;
    }
}

export function writeReducer(state, action) {
    switch (action.type) {
        case ACTIONS.MAKE_REQUEST:
            return { ...state, loading: true };

        case ACTIONS.GET_DATA:
            return { ...state, loading: false, ...action.payload };

        case ACTIONS.ERROR:
            return { ...state, loading: false, error: action.payload.error };

        default:
            return state;
    }
}

export const useGetJobs = () => {
    const [state, dispatch] = useReducer(readReducer, {
        jobList: [],
        loading: true,
    });
    const alertContext = useContext(AlertContext);
    const location = useLocation();

    const fetchJobs = async () => {
        try {
            dispatch({ type: ACTIONS.MAKE_REQUEST });
            const querySnapshot = await getDocs(collection(db, "jobs"));
            let jobList = [];

            querySnapshot.forEach((doc) => {
                jobList.push({ id: doc.id, data: doc.data() });
            });

            dispatch({ type: ACTIONS.GET_DATA, payload: { jobList } });
        } catch (err) {
            console.log(err);

            alertContext.addAlert({
                type: "error",
                label: "An error occured while fetching jobs data",
            });

            dispatch({ type: ACTIONS.ERROR, payload: { error: err } });
        }
    };

    useEffect(() => {
        fetchJobs();
    }, [location]);

    return state;
};

export const useUserJobsData = () => {
    const [state, dispatch] = useReducer(readReducer, {
        userJobsData: {},
        loading: true,
    });
    const { userData } = useContext(AuthContext);
    const alertContext = useContext(AlertContext);
    const location = useLocation();

    const USER_JOB_FIELDS = {
        APPLIED: "applied",
        ARCHIVED: "archived",
        OFFERS: "offers",
        SAVED: "saved",
    };

    const fetchUserJobsData = async () => {
        try {
            dispatch({ type: ACTIONS.MAKE_REQUEST });
            const docRef = collection(db, "userJobsData");
            const q = query(docRef, where("uid", "==", userData.uid));
            const doc = await getDocs(q);
            const userJobsData = { id: doc.docs[0].id, ...doc.docs[0].data() };

            dispatch({ type: ACTIONS.GET_DATA, payload: { userJobsData } });
        } catch (err) {
            console.log(err);

            alertContext.addAlert({
                type: "error",
                label: "An error occured while fetching jobs data",
            });

            dispatch({ type: ACTIONS.ERROR, payload: { error: err } });
        }
    };

    useEffect(() => {
        fetchUserJobsData();
    }, [location]);

    const updateUserJobData = async (jobId, type) => {
        console.log(type, jobId);
        try {
            let docRef = collection(db, "userJobData");
            let q = query(docRef, where("uid", "==", userData.id));
            const docs = await getDocs(q);
            const userJobsData = docs.docs[0].id;

            docRef = doc(db, "userJobsData", userJobsData);
            await updateDoc(docRef, {
                [type]: arrayUnion(jobId),
            });

            fetchUserJobsData();
            return true;
        } catch (err) {
            console.log(err);
            return false;
        }
    };

    return { ...state, updateUserJobData, fetchUserJobsData, USER_JOB_FIELDS };
};

export function useClickOutside(nodeRef, onClickOutside) {
    useEffect(() => {
        function handleClickOutside(event) {
            if (nodeRef.current && !nodeRef.current.contains(event.target)) {
                onClickOutside();
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [nodeRef, onClickOutside]);
}
