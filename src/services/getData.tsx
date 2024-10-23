interface Company {
    id: string;
    fullAddress: string;
    name: string;
}

const url = "https://localhost:7117/api/companies";

async function getData(): Promise<Company[]> {
    const response = await fetch(url);
    const data = await response.json();
    return data;
    //   console.log(json);
}
export default getData;