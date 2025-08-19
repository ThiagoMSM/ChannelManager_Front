import { api } from "React/src/config/api"


export const FazerLogin = async (email: string, password: string) => {

const response = await api.post("/api/auth/login", {email, password})
return response.data.user



}