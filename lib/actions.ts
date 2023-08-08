import { 
    createUserMutation, 
    getUserQuery, 
    setAdminQuery,
    getUsersForAdminQuery
} from "@/graphql";
import { GraphQLClient } from "graphql-request";

const isProduction = process.env.NODE_ENV === "production";
const apiUrl = isProduction ? process.env.NEXT_PUBLIC_GRAFBASE_API_URL || '' : "http://127.0.0.1:4000/graphql";
const apiKey = isProduction ? process.env.NEXT_PUBLIC_GRAFBASE_API_KEY || '' : 'lmin';
const serverUrl = isProduction ? process.env.NEXT_PUBLIC_SERVER_URL : "http://localhost:3000";

const client = new GraphQLClient(apiUrl);

const makeGraphQLRequest = async (query: string, variables = {}) => {
    try {
        return await client.request(query, variables);
    } catch (error) {
        console.log(error);
    }
}

export const createUser = (name: string, email: string, avatarUrl: string, password?: string) => {
    client.setHeader('x-api-key', apiKey);
    const variables = {
        input: {
            name, email, avatarUrl, password
        }
    }
    return makeGraphQLRequest(createUserMutation, variables);
}

export const getUser = (email: string) => {
    client.setHeader('x-api-key', apiKey);
    return makeGraphQLRequest(getUserQuery, { email });
}

export const setAdmin = (email: string) => {
    client.setHeader('x-api-key', apiKey);
    return makeGraphQLRequest(setAdminQuery, { email });
}

export const getUsersForAdmin = (token: string) => {
    client.setHeader('x-api-key', apiKey);
    client.setHeader('Authorization', `Bearer ${token}`);
    return makeGraphQLRequest(getUsersForAdminQuery);
}

export const fetchToken = async () => {
    try {
        const response = await fetch(`${serverUrl}/api/auth/token`);
        return response.json();
    } catch (error) {
        throw error;
    }
}
