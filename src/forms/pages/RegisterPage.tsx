import '../styles/styles.css'
import {FormEvent} from "react";
import useForm from "../hooks/useForm";

export const RegisterPage = () => {

    const {formData, handleChange, handleReset, isEmail, name, email, password, password2} = useForm({
        name: '',
        email: '',
        password: '',
        password2: ''
    });

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(formData);
    }

    return (
        <div>
            <h1>Register Page</h1>
            <form noValidate onSubmit={onSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={handleChange}
                    name="name"
                    className={`${name.trim().length < 1 && 'has-error'}`}
                />
                {name.trim().length < 1 && <span>Este campo es requerido</span>}
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={handleChange}
                    name="email"
                    className={`${!isEmail(email) && 'has-error'}`}
                />
                {!isEmail(email) && <span>Email inválido</span>}
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={handleChange}
                    name="password"
                />
                {password.trim().length < 1 && <span>Este campo es requerido</span>}
                {
                    password.trim().length < 6
                    && password.trim().length > 0
                    && <span>La contraseña debe contener al menos seis carácteres</span>
                }
                <input
                    type="password"
                    placeholder="Confirm password"
                    value={password2}
                    onChange={handleChange}
                    name="password2"
                />
                {password2.trim().length < 1 && <span>Este campo es requerido</span>}
                {
                    password.trim().length > 0
                    && password !== password2
                    && <span>La contraseña debe contener al menos seis carácteres</span>
                }
                <button type="submit">Create account</button>
                <button onClick={handleReset}>Reset</button>
            </form>
        </div>
    )
}
