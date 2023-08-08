import { fetchToken } from '@/lib/actions';

const getAllUsersUrl = "/api/getusers";

export const fetchAllUsers = async () => {
    const { token } = await fetchToken();
    const userdata = {
      token: token
    }
    const response = await fetch(getAllUsersUrl, { method: 'POST', body: JSON.stringify(userdata)});
    const result = await response.json();
    console.log(result.data);
    return result.data;
}

