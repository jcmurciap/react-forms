import '../styles/styles.css';
import {Formik, Field, Form, ErrorMessage} from "formik";
import * as Yup from "yup";

export const FormikComponents = () => {

    return (
        <div>
            <h1>Formik Component</h1>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    terms: false,
                    jobType: '',
                }}
                onSubmit={(values) => {
                    console.log(values)
                }}
                validationSchema={Yup.object({
                    firstName: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
                    lastName: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
                    email: Yup.string().required().email('Invalid email'),
                    terms: Yup.boolean().oneOf([true], 'This field is required'),
                    jobType: Yup.string().required().notOneOf(["Manager"], "This option isn´t valid")
                })}
            >
                {
                    (formik) => (
                        <Form noValidate>
                            <label htmlFor="firstName">First Name</label>
                            <Field name="firstName" type="text"/>
                            <ErrorMessage name="firstName" component="span"/>

                            <label htmlFor="lastName">Last Name</label>
                            <Field name="lastName" type="text"/>
                            <ErrorMessage name="lastName" component="span"/>

                            <label htmlFor="email">Email</label>
                            <Field name="email" type="text"/>
                            <ErrorMessage name="email" component="span"/>

                            <label htmlFor="jobType">Job title</label>
                            <Field name="jobType" as="select">
                                <option value="">Pick a rol</option>
                                <option value="Developer">Developer</option>
                                <option value="Designer">Designer</option>
                                <option value="Manager">Manager</option>
                                <option value="CTO">CTO</option>
                            </Field>
                            <ErrorMessage name="jobType" component="span"/>

                            <label>
                                <Field name="terms" type="checkbox"/>
                                Terms and Conditions
                            </label>
                            <ErrorMessage name="terms" component="span"/>

                            <button type="submit">Submit</button>
                        </Form>
                    )
                }
            </Formik>
        </div>
    )
}
