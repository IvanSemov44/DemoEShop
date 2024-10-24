interface Company {
    id: string;
    fullAddress: string;
    name: string;
}

interface UserData {
    username: string
    password: string
}

interface ReturnUserData {
    accessToken: string
    refreshToken: string
}

const url = "https://localhost:7117/api/companies";

export async function getData(): Promise<Company[]> {
    const response = await fetch(url);
    const data = await response.json();
    return data;
    //   console.log(json);
}

const userLogInUrl = "https://localhost:7117/api/authentication/login"

export async function logInUser(user: UserData): Promise<ReturnUserData> {
    const response = await fetch(userLogInUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user)
    });
    return response.json()

}
