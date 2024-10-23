import { ReactNode } from "react"
import "./FormWrapperSecond.css"

type FormWrapperSecond = {
    title: string
    children: ReactNode
}

export function FormWrapperSecond({ title, children }: FormWrapperSecond) {

    return (
        <>
            <h2>{title}</h2>
            <div className="wrapper">{children}</div>
        </>
    )
}