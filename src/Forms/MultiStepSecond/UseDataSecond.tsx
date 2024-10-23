import { FormWrapperSecond } from "./FormWrapperSecond";

type UserDataSecond = {
    firstName: string
    lastName: string
    age: string
}

type UserFormSecondProps = UserDataSecond & {
    updateFields: (fields: Partial<UserDataSecond>) => void
}

export function UserDataSecond({
    firstName,
    lastName,
    age,
    updateFields
}: UserFormSecondProps) {

    return (
        <FormWrapperSecond title="User Data" >
            <label>First Name</label>
            <input
                autoFocus
                required
                type="text"
                value={firstName}
                onChange={e => updateFields({ firstName: e.target.value })}
            />
            <label>Last Name</label>
            <input
                required
                type="text"
                value={lastName}
                onChange={e => updateFields({ lastName: e.target.value })}
            />
            <label>Age</label>
            <input
                required
                type="number"
                value={age}
                onChange={e => updateFields({ age: e.target.value })}
            />
        </FormWrapperSecond >
    )
}