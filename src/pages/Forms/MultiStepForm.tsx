import "./multyStepForm.css";
import { useMultiStepForm } from '../../hooks/useMultiStepForm';
import { UserForm } from '../../Forms/MultiStepForm/UserForm';
import { AddressForm } from '../../Forms/MultiStepForm/AddressFrom';
import { AccountForm } from '../../Forms/MultiStepForm/AccountForm';
import { FormEvent, useState } from "react";

type FormData = {
    fistName: string
    lastName: string
    age: string
    street: string
    city: string
    state: string
    zip: string
    email: string
    password: string
}

const INITIAl_DATA: FormData = {
    fistName: "",
    lastName: "",
    age: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    email: "",
    password: ""
}

const MultiStepForm = () => {
    const [data, setData] = useState(INITIAl_DATA);

    function updateFields(fields: Partial<FormData>) {
        setData(prev => {
            return { ...prev, ...fields }
        })

    }

    const {
        steps,
        currectStepIndex,
        step,
        isFirstStep,
        isLastStep,
        back,
        next
    } = useMultiStepForm([
        <UserForm {...data} updateFields={updateFields} />,
        <AddressForm {...data} updateFields={updateFields} />,
        <AccountForm {...data} updateFields={updateFields} />
    ]);

    function onSubmit(e: FormEvent) {
        e.preventDefault();
        if(!isLastStep) return next();
        alert("Successful Account Creation")
        console.log(data)

    }

    return (
        <div className='form'>
            <form onSubmit={onSubmit}>
                <div className="steps-form">
                    {currectStepIndex + 1}/{steps.length}
                </div>
                {step}
                <div className="button">
                    {!isFirstStep && <button type="button" onClick={back}>Back</button>}
                    {<button type="submit">
                        {isLastStep ? "Finish" : "Next"}
                    </button>}
                </div>
            </form>
        </div>
    )
}

export default MultiStepForm