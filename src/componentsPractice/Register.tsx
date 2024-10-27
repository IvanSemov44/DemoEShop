import { useState } from "react"
import * as Yup from "yup";
import { register } from "../AuthenticationPractice/auth.service";
import { ErrorMessage, Field, Form, Formik } from "formik";

type User = {
    firstname: string;
    lastname: string;
    username: string;
    password: string;
    email: string;
    phonenumber: string;
}

const RegisterPractice: React.FC = () => {
    const [succesful, setSuccessful] = useState<boolean>(false);
    const [message, setMessage] = useState<string>("")

    const initialValues: User = {
        firstname: "",
        lastname: "",
        username: "",
        password: "",
        email: "",
        phonenumber: ""
    }

    const validationSchema = Yup.object().shape({
        firtname: Yup.string()
            .test(
                "len",
                "The firstname must be between 3 and 20 characters.",
                (val: any) =>
                    val &&
                    val.toString().length >= 3 &&
                    val.toString().length <= 20
            ).required("This field is required!"),
        lastname: Yup.string()
            .test(
                "len",
                "The lastname must be between 3 and 20 characters.",
                (val: any) =>
                    val &&
                    val.toString().length >= 3 &&
                    val.toString().length <= 20
            ).required("This field is required!"),
        username: Yup.string()
            .test(
                "len",
                "The username must be between 3 and 20 characters.",
                (val: any) =>
                    val &&
                    val.toString().length >= 3 &&
                    val.toString().length <= 20
            ).required("This field is required!"),
        email: Yup.string()
            .email("This is not valid email.")
            .required("This field is required!"),
        password: Yup.string()
            .test(
                "len",
                "The password must be between 6 and 40 characters.",
                (val: any) =>
                    val &&
                    val.toString().length >= 6 &&
                    val.toString().length <= 40
            ).required("This field is required!"),
        phonenumber: Yup.string()
            .test(
                "len",
                "The phone must be between 6 and 40 characters.",
                (val: any) =>
                    val &&
                    val.toString().length >= 6 &&
                    val.toString().length <= 40
            ).required("This field is required!")
    })

    const handleRegister = (formValues: User) => {
        const { firstname, lastname, username, password, email, phonenumber } = formValues;

        register(firstname, lastname, username, password, email, phonenumber)
            .then(
                (response) => {
                    setMessage(response.data.message)
                    setSuccessful(true)
                },

                (error) => {
                    const resMessage =
                        (error.response &&
                            error.response.data &&
                            error.response.data.message) ||
                        error.message ||
                        error.toString();

                    setMessage(resMessage);
                    setSuccessful(false);
                }
            )
    }

    return (
        <div className="col-md-12">
            <div className="card card-container">
                <img
                    src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
                    alt="profile-img"
                    className="profile-img-card"
                />
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleRegister}
                >
                    <Form>

                        {!succesful && (
                            <div>
                                <div className="form-group">
                                    <label htmlFor="firstname">First Name</label>
                                    <Field name="firstname" type="text" className="form-control" />
                                    <ErrorMessage
                                        name="firtname"
                                        component="div"
                                        className="alert alert-danger" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="lastname">Last Name</label>
                                    <Field name="lastname" type="text" className="form-control" />
                                    <ErrorMessage
                                        name="lastname"
                                        component="div"
                                        className="alert alert-danger" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phonenumber">Phone Number</label>
                                    <Field name="phonenumber" type="text" className="form-control" />
                                    <ErrorMessage
                                        name="phonenumber"
                                        component="div"
                                        className="aler alert-danger" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="username">Username</label>
                                    <Field name="username" type="text" className="form-control" />
                                    <ErrorMessage
                                        name="username"
                                        component="div"
                                        className="alert alert-danger" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <Field name="email" type="email" className="form-control" />
                                    <ErrorMessage
                                        name="email"
                                        component="div"
                                        className="alert alert-danger" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <Field name="password" type="password" className="form-control" />
                                    <ErrorMessage
                                        name="password"
                                        component="div"
                                        className="alert alert-danger" />
                                </div>

                                <div className="form-group">
                                    <button type="submit"
                                        className="btn btn-primary btn-blocк">Submit</button>
                                </div>
                            </div>
                        )}
                        {message && (
                            <div className="form-group">
                                <div
                                    className={succesful ? "alert alert-successful" : "alert alert-danger"}
                                    role="alert">
                                    {message}
                                </div>
                            </div>
                        )}
                    </Form>

                </Formik>
            </div>


        </div>
    )
}

export default RegisterPractice