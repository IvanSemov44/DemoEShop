import { FormWrapper } from "./FormWrapper";

type UserData = {
    fistName: string
    lastName: string
    age: string
}

type UserFormProps = UserData & {
    updateFields: (fields: Partial<UserData>) => void
}

export function UserForm({
    fistName,
    lastName,
    age,
    updateFields
}: UserFormProps) {
    return (
        <FormWrapper title="User Details">
            <label>First Name</label>
            <input
                autoFocus
                required
                type="text"
                value={fistName}
                onChange={e => updateFields({ fistName: e.target.value })} />
            <label>Last Name</label>
            <input
                autoFocus
                required
                type="text"
                value={lastName}
                onChange={e => updateFields({ lastName: e.target.value })} />
            <label>Age</label>
            <input
                required
                min={1}
                type="number"
                value={age}
                onChange={e => updateFields({ age: e.target.value })} />
        </FormWrapper>
    );
}