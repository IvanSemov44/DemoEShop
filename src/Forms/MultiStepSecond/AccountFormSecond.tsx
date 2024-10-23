import { FormWrapperSecond } from "./FormWrapperSecond";

type AccountDataSecond = {
    email: string
    password: string
}
type AccountFormSecondProps = AccountDataSecond & {
    updateFields: (fields: Partial<AccountDataSecond>) => void
}

export function AccountFormSecond({
    email,
    password,
    updateFields
}: AccountFormSecondProps) {

    return (
        <FormWrapperSecond title="Account Creation">
            <label>Email</label>
            <input
                autoFocus
                required
                type="email"
                value={email}
                onChange={e => updateFields({ email: e.target.value })}
            />
            <label>Password</label>
            <input
                required
                type="password"
                value={password}
                onChange={e => updateFields({ password: e.target.value })}
            />
        </FormWrapperSecond>
    )
}