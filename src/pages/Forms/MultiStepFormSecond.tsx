import { FormEvent, useState } from "react";
import "./multyStepForm.css"
import { useMultiStepFormSecond } from "../../hooks/useMultyStepFormSecond";
import { UserDataSecond } from "../../Forms/MultiStepSecond/UseDataSecond";
import { AddressFormSecond } from "../../Forms/MultiStepSecond/AddressFormSecond";
import { AccountFormSecond } from "../../Forms/MultiStepSecond/AccountFormSecond";

type FormData = {
    firstName: string
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
    firstName: "",
    lastName: "",
    age: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    email: "",
    password: ""
}

export function MultiStepFormSecond() {
    const [data, setData] = useState(INITIAl_DATA);

    const {
        currectStep,
        steps,
        step,
        isFirstStep,
        isLastStep,
        back,
        next
    } = useMultiStepFormSecond([
        <UserDataSecond {...data} updateFields={updateFields} />,
        <AddressFormSecond {...data} updateFields={updateFields} />,
        <AccountFormSecond {...data} updateFields={updateFields} />
    ]);

    function updateFields(fields: Partial<FormData>) {
        setData(prev => {
            return { ...prev, ...fields }
        })
    }

    function onSubmit(e: FormEvent) {
        e.preventDefault();
        if (!isLastStep) return next();
        alert("Succesful Created Account")
        console.log(data);
    }

    return (
        <div className="form">
            <form onSubmit={onSubmit}>
                <div className="steps-form">
                    {currectStep + 1}/{steps.length}
                </div>
                {step}
                <div className="button">
                    {!isFirstStep && <button type="button" onClick={back}>Back</button>}
                    <button type="submit">
                        {isLastStep ? "Finish" : "Next"}
                    </button>
                </div>
            </form>
        </div>
    )
}