import { Route, redirect } from "react-router-dom";

export function PriveteRoute({props}:any) {
    const token = localStorage.getItem("Auth");
    return (
        <>
            {
                token
                    ? <Route {...props} />
                    : redirect("/login")
            }
        </>
    )
}