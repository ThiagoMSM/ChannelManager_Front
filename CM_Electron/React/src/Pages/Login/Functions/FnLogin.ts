import { api } from "../../../config/api"
import { loginBody } from "../types"
import { loginResponse } from "../types"

export const FazerLogin = async ({ email, senha }: loginBody) => {
    const response: loginResponse = await api.post("/api/auth/login", { email, senha })
    return {
        user: response.data.user,
        token: response.data.token
    };
}