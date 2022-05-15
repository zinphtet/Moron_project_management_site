import { createContext } from 'react';
import { useReducer } from 'react';
const initialState = {
	user: null,
	userId: null,
};

const userReducer = (state, action) => {
	switch (action.type) {
		case 'USER':
			return {
				...state,
				user: action.payload,
			};
		case 'USER_ID':
			return {
				...state,
				userId: action.payload,
			};
		default:
			return state;
	}
};

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
	const [state, dispatchUser] = useReducer(userReducer, initialState);

	return (
		<UserContext.Provider
			value={{
				...state,
				dispatchUser,
			}}
		>
			{children}
		</UserContext.Provider>
	);
};
