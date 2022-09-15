import '../styles/styles.css';
import {Formik, Form} from "formik";
import * as Yup from "yup";
import {MyTextInput, MySelect, MyCheckBox} from "../../components"

export const FormikAbstraction = () => {

    return (
        <div>
            <h1>Formik Abstraction</h1>
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
                            <MyTextInput
                                name="firstName"
                                label="First Name"
                                placeholder="First name"
                            />
                            <MyTextInput
                                name="lastName"
                                label="Last Name"
                                placeholder="Last name"
                            />
                            <MyTextInput
                                name="email"
                                label="Email"
                                placeholder="Email"
                                type="email"
                            />

                            <MySelect name="jobType" as="select" label="JobType">
                                <option value="">Pick a rol</option>
                                <option value="Developer">Developer</option>
                                <option value="Designer">Designer</option>
                                <option value="Manager">Manager</option>
                                <option value="CTO">CTO</option>
                            </MySelect>

                            <MyCheckBox name="terms" label="Terms and Conditions"/>
                            <button type="submit">Submit</button>
                        </Form>
                    )
                }
            </Formik>
        </div>
    )
}
