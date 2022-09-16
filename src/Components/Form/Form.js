import React, { createContext, useEffect, useState } from "react";

export const FormContext = createContext(null);

const Form = ({
    initialValues,
    onSubmit,
    children,
    validateForm,
    ...others
}) => {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});

    const updateValue = (key, value) => {
        setValues({
            ...values,
            [key]: value,
        });
    };

    const validate = () => {
        const newErrors = {};

        if (validateForm) {
            Object.keys(values).forEach((key) => {
                if (validateForm[key](values[key])) {
                    newErrors[key] = validateForm[key(values[key])];
                } else {
                    delete newErrors[key];
                }
            });
        }

        setErrors(newErrors);
    };

    useEffect(() => {
        validate();

        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [values]);

    const onFormSubmit = (e) => {
        e.preventDefault();
        if (Object.keys(errors).length > 0) return;
        onSubmit(values);
    };

    const formValue = {
        values,
        updateValue,
        setValues,
        errors,
        validate,
    };

    return (
        <FormContext.Provider value={formValue}>
            <form onSubmit={onFormSubmit} {...others}>
                {children}
            </form>
        </FormContext.Provider>
    );
};

export default Form;
