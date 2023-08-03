export const createUserMutation = `
	mutation CreateUser($input: UserCreateInput!) {
		userCreate(input: $input) {
			user {
				name
				email
				avatarUrl
				password
				isAdmin
				isModer
				subscription
				posts
				id
			}
		}
	}
`;

export const getUserQuery = `
  query GetUser($email: String!) {
    user(by: { email: $email }) {
    	id
		name
		email
		avatarUrl
		password
		isAdmin
		isModer
    }
  }
`;