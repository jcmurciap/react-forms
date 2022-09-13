import {ChangeEvent, useState} from "react";

const useForm = <T>(initState:T) => {
    const [formData, setRegisterData] = useState(initState);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setRegisterData(prevState => ({
            ...prevState,
            [event.target.name]: event.target.value //Computed propertie
        }));
    }

    const handleReset = () => {
        setRegisterData({...initState})
    }

    const isEmail = (email: string) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    // ...formData => rest parameter
    return {...formData,formData, handleChange, handleReset, isEmail}
}

export default useForm;