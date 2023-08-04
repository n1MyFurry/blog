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

export const setAdminQuery = `
  mutation userUpdateAdmin($email: String!) {
	userUpdate(by: { email: $email }, input: { isAdmin: true }) {
		user {
			email
			name
			isAdmin
		}
	}
  }
`;