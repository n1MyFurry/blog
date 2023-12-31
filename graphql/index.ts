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

export const getUserByIdQuery = `
  query GetUserById($id: ID!) {
    user(by: { id: $id }) {
    	id
		name
		email
		avatarUrl
		isAdmin
		isModer
		regDate
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

export const getUsersForAdminQuery = `
	query UserCollection {
		userCollection(orderBy: {createdAt: ASC}, first: 10) {
			edges {
				node {
				id
				name
				email
				password
				avatarUrl
				isAdmin
				isModer
				regDate
				}
			}
		}
	}
`;