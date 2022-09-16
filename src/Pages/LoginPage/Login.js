import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Page from "../../Components/Page/Page";
import Form from "../../Components/Form/Form";
import FormInput from "../../Components/FormInput";
import Button from "../../Components/Button/Button";
import Google from "../../Assets/Img/jobssection/google.svg";
import dots from "../../Assets/Img/auth/dots.png";
import login1 from "../../Assets/Img/auth/login1.png";
import login2 from "../../Assets/Img/auth/login2.png";
import { AuthContext } from "../../Context/AuthContext";

const initialValues = {
    email: "",
    password: "",
};

const Login = () => {
    const { logIn, loading, signInWithGoogle } = useContext(AuthContext);

    return (
        <Page onlyLoggedOut>
            <section className="grid grid-cols-1 md:grid-cols-2">
                <div className="h-full hidden md:block relative">
                    <img
                        className="absolute top-[20%] left-0"
                        src={dots}
                        alt=""
                    />
                    <img
                        className="absolute top-[calc(20%+5rem)] left-20 h-[250px]"
                        src={login1}
                        alt=""
                    />
                    <img
                        className="absolute top-[calc(20%+10rem)] left-52 h-[300px]"
                        src={login2}
                        alt=""
                    />
                </div>
                <div className="h-screen justify-center flex flex-col gap-y-8 px-16">
                    <div className="flex flex-col gap-y-4">
                        <h1 className="text-3xl text-primary font-primaryExtraBold">
                            Welcome Back
                        </h1>
                        <Button
                            onClick={signInWithGoogle}
                            type="button"
                            text="Sign In with Google"
                            icon={<img src={Google} alt="" />}
                            color="default"
                            size="full"
                            padding="wide"
                        />
                    </div>
                    <span className="dividing__text text-center w-full font-bold text-gray-700">
                        or sign in with
                    </span>
                    <Form
                        className="flex flex-col gap-y-6 w-full"
                        initialValues={initialValues}
                        onSubmit={logIn}
                    >
                        <FormInput
                            type="text"
                            field="email"
                            placeholder="E-mail Address"
                        />
                        <FormInput
                            type="password"
                            field="password"
                            placeholder="Password"
                        />
                        <Button
                            color="primary"
                            text="Sign In"
                            type="submit"
                            onClick={logIn}
                            size="full"
                            disabled={loading}
                            loading={loading}
                            isformbutton={true}
                        />
                        <div>
                            Don't have an account yet?{" "}
                            <Link to="/app/register">
                                <span className="text-primary font-bold">
                                    Create an account
                                </span>
                            </Link>
                        </div>
                    </Form>
                </div>
            </section>
        </Page>
    );
};

export default Login;
