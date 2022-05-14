import { createContext } from 'react';
import { useReducer } from 'react';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase/firebase';
const initialState = {
	currentUser: null,
	authReady: false,
};

const authReducer = (state, action) => {
	switch (action.type) {
		case 'SET_USER':
			return {
				...state,
				currentUser: action.payload,
				authReady: true,
			};
		case 'LOGOUT':
			return {
				...state,
				currentUser: null,
			};
		default:
			return state;
	}
};

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(authReducer, initialState);
	useEffect(() => {
		const unsub = onAuthStateChanged(auth, (user) => {
			dispatch({ type: 'SET_USER', payload: user });
			unsub();
		});
	}, []);
	return (
		<AuthContext.Provider value={{ ...state, dispatch }}>
			{children}
		</AuthContext.Provider>
	);
};
