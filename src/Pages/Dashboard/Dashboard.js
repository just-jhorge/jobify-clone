import React, { useEffect, useState } from "react";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useUserJobsData } from "../../Utils/Hooks";
import { db } from "../../Utils/Firebase.config";
import DashboardCard from "../../Components/DashboardCard/DashboardCard";
import DeleteIcon from "../../Assets/Svg/DeleteIcon";
import Loadable from "../../Components/Loadable/Loadable";
import Button from "../../Components/Button/Button";
import Page from "../../Components/Page/Page";

const dashboardItems = [
    {
        title: "applied",
        caption: "Jobs you have applied to",
        card: true,
        tab: true,
    },
    {
        title: "matches",
        caption: "Jobs you have been matched to",
        card: true,
    },
    {
        title: "interviews",
        caption: "Jobs you have been interviewed for",
        card: true,
    },
    {
        title: "offers",
        caption: "Offers you have received",
        card: true,
    },
    {
        title: "saved",
        caption: "Jobs you have saved",
        card: false,
    },
    {
        title: "archived",
        caption: "Jobs you have been archived",
        card: false,
    },
];

const Dashboard = () => {
    const [tabState, setTabState] = useState({
        activeTab: 0,
        activeTabJobs: [],
        activeTabLoading: true,
    });
    const {
        userJobsData,
        loading: userJobsDataLoading,
        fetchUserJobsData,
    } = useUserJobsData();

    const switchTab = async (currTab) => {
        setTabState((prevTabState) => {
            return { ...prevTabState, activeTabLoading: true };
        });

        const title = dashboardItems[currTab].title;
        const jobsId = userJobsData[title];

        let activeTabJobs = [];

        for (let id of jobsId) {
            const job = await fetchJob(id);
            activeTabJobs.push(job);
        }

        setTimeout(
            () =>
                setTabState({
                    activeTab: currTab,
                    activeTabJobs,
                    activeTabLoading: false,
                }),
            500
        );
    };

    const fetchJob = async (id) => {
        try {
            const docRef = doc(db, "jobs", id);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                return { id: docSnap.id, ...docSnap.data() };
            } else {
                console.log("No such document!");
                return;
            }
        } catch (err) {
            console.log(err);
        }
    };

    const deleteJob = async (targetId) => {
        const { activeTab } = tabState;
        const title = dashboardItems[activeTab].title;
        const jobsId = userJobsData[title];
        const newJobsId = [...jobsId].filter((id) => targetId !== id);

        try {
            const docRef = doc(db, "userJobsData", userJobsData.id);
            await updateDoc(docRef, {
                [title]: newJobsId,
            });
            fetchUserJobsData();
            console.log(jobsId, newJobsId, targetId);
            return true;
        } catch (err) {
            console.log(err);
            return false;
        }
    };

    useEffect(() => {
        if (userJobsDataLoading) return;
        const { activeTab } = tabState;

        switchTab(activeTab);
    }, [userJobsDataLoading, userJobsData]);

    return (
        <Page className="space-y-12">
            <section className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4 lg:gap-8 min-h-[150px] relative">
                {[...dashboardItems]
                    .filter((item) => item.card)
                    .map((item, index) => {
                        const count =
                            !userJobsDataLoading && userJobsData[item.title]
                                ? userJobsData[item.title].length
                                : "X";
                        return (
                            <DashboardCard
                                key={index}
                                dashboardItem={item}
                                count={count}
                            />
                        );
                    })}
            </section>
        </Page>
    );
};

const Tab = ({ tabState, switchTab, deleteJob }) => {
    const { activeTab, activeTabJobs, activeTabLoading } = tabState;

    const TabJobListItem = ({ job }) => (
        <li className="w-full grid grid-cols-3 items-center text-center py-2 px-4 text-lg capitalize bg-secondary rounded-md">
            <span>{job.position}</span>
            <span>{job.company}</span>
            <span className="ml-auto">
                <Button
                    color="primary"
                    text="delete"
                    icon={<DeleteIcon />}
                    type="button"
                    onClick={() => deleteJob(job.id)}
                    size="fit"
                    padding="tight"
                />
            </span>
        </li>
    );
    return (
        <section className="space-y-4">
            <div className="overflow-x-auto py-2">
                <ul className="flex bg-gray-200 rounded-md w-fit divide-x-2 divide-gray-50">
                    {dashboardItems.map((item, index) => (
                        <li key={index}>
                            <button
                                className={`${
                                    activeTab === index ? "bg-background" : ""
                                } text-sm md:text-base font-bold text-gray-800 px-1.5 md:px-3 lg:px-6 py-1 md:py-1.5`}
                                onClick={() => switchTab(index)}
                            >
                                {item.title}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            <ul className="w-full h-fit min-h-[150px] bg-white flex flex-col items-center rounded-lg p-1.5 gap-1.5">
                <Loadable
                    fallback={
                        <div className="flex self-center justify-center">
                            loading
                        </div>
                    }
                    isLoading={activeTabLoading}
                >
                    {activeTabJobs.length > 0 ? (
                        activeTabJobs.map((job, index) => (
                            <TabJobListItem job={job} key={index} />
                        ))
                    ) : (
                        <div className="flex self-center justify-center">
                            nothing here
                        </div>
                    )}
                </Loadable>
            </ul>
        </section>
    );
};

export default Dashboard;
