
import { userType } from '../../../types/index'
import { AxiosResponse } from "axios"

export type loginBody = { email: string, senha: string }
export interface loginResponse extends AxiosResponse {
    data: {
        user: userType,
        token: string
    }
}
