import { api } from "../../../config/api"


type loginBody = {
    email: string
    password: string
}

export const FazerLogin = async ({ email, password }: loginBody) => {
    const response = await api.post("/api/auth/login", { email: email, senha: password })
    return {user: response.data.user, token: response.data.token}

}