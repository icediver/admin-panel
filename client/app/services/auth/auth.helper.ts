import {IAuthResponse} from "@/shared/interfaces/user.interface";
import Cookies from "js-cookie";

export const saveTokenToStorage = (accesToken: string) => {
	Cookies.set('accessToken', accesToken)
}

export const removeTokenFromStorage = () => {
	Cookies.remove('accessToken');
}

export const saveToStorage = (data: IAuthResponse) => {
	saveTokenToStorage(data.accessToken);
	localStorage.setItem('user', JSON.stringify(data.user))
}