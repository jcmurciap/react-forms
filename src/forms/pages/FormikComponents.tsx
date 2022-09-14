import '../styles/styles.css';
import {Formik, Field, Form, ErrorMessage} from "formik";
import * as Yup from "yup";

const FormikComponents = () => {

    return (
        <div>
            <h1>Formik Component</h1>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                }}
                onSubmit={(values) => {
                    console.log(values)
                }}
                validationSchema={Yup.object({
                    firstName: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
                    lastName: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
                    email: Yup.string().required().email('Invalid email')
                })}
            >
                {
                    (formik) => (
                        <Form noValidate>
                            <label htmlFor="firstName">First Name</label>
                            <Field name="firstName" type="text"/>
                            <ErrorMessage name="firstName" component="spam"/>

                            <label htmlFor="lastName">Last Name</label>
                            <Field name="lastName" type="text"/>
                            <ErrorMessage name="lastName" component="spam"/>

                            <label htmlFor="email">Email</label>
                            <Field name="email" type="text"/>
                            <ErrorMessage name="email" component="spam"/>

                            <button type="submit">Submit</button>
                        </Form>
                    )
                }
            </Formik>
        </div>
    )
}

export default FormikComponents;
