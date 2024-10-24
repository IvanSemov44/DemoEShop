import { useEffect, useState } from "react";
import { getData } from "../services/getData"

interface Company {
    id: string;
    fullAddress: string;
    name: string;
}

export function Home() {
    const [data, setData] = useState<Company[]>([]);

    useEffect(() => {
        getData().then((response) => setData(response))
    }, [])

    return (
        <ul>
            {data.map(item =>
                <li key={item.id}>
                    <h3>{item.id}</h3>
                    <h3>{item.name}</h3>
                    <h3>{item.fullAddress}</h3>
                </li>)}
        </ul>
    )
}