import { createContext, useReducer } from 'react';
const initialState = {
	users: null,
	posts: null,
	postFilterBy: 'all',
};

const usesReducer = (state, action) => {
	switch (action.type) {
		case 'SET_USERS':
			return {
				...state,
				users: action.payload,
			};
		case 'SET_POSTS':
			return {
				...state,
				posts: action.payload,
			};
		case 'SET_FILTER':
			return {
				...state,
				postFilterBy: action.payload,
			};
		default:
			return {
				...state,
			};
	}
};

export const CollectionContext = createContext();

export const CollectionContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(usesReducer, initialState);
	return (
		<CollectionContext.Provider value={{ ...state, dispatch }}>
			{children}
		</CollectionContext.Provider>
	);
};
