import { FormEvent, useEffect, useState } from "react"
import { Button, Form } from "react-bootstrap"
import { logInUser } from "../../services/getData";

interface ReturnUserData {
    accessToken: string
    refreshToken: string
}

const LogInForm = () => {
    const [data, setData] = useState({ username: "", password: "" });
    const [returnUserData, setReturnUserData] = useState<ReturnUserData>();
    const [sentData,setSentData] = useState(false);

    function onSubmit(e: FormEvent) {
        e.preventDefault();
        setSentData(true);
        console.log(returnUserData?.accessToken);
    }
    useEffect(() => {
        logInUser(data).then((response)=>{
            setReturnUserData(response)
        })
    }, [sentData])

    return (
        <Form onSubmit={onSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email Addres</Form.Label>
                <Form.Control type="text"
                    placeholder="Enter Username"
                    value={data.username}
                    onChange={e => setData(prev => { return { ...prev, username: e.target.value } })}
                />
                <Form.Text className="text-muted">
                    We'll never shere your email with anyone esle.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>PassWord</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Enter passwrod"
                    value={data.password}
                    onChange={e => setData(prev => { return { ...prev, password: e.target.value } })} />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}

export default LogInForm