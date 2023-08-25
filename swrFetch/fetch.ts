import { fetchToken } from '@/lib/actions';

const getAllUsersUrl = "/api/getusers";
const getUserById = "/api/getuserbyid";

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

export const fetchUserById = async (id: string) => {
  const { token } = await fetchToken();
  const userdata = {
    token: token,
    id: id
  }
  const response = await fetch(getUserById, { method: 'POST', body: JSON.stringify(userdata)});
  const result = await response.json();

  return result.data;
}