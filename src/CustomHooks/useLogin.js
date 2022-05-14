import { auth } from '../firebase/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState, useContext } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../ContextAPI/AuthContext/AuthContext';
const useLogin = () => {
	const [loading, setLoading] = useState(false);
	// const [success, setSuccess] = useState(false);
	// const [state, setState] = useState({
	// 	loading: false,
	// 	success: false,
	// });

	const { dispatch } = useContext(AuthContext);
	const loginUser = async (email, password) => {
		try {
			setLoading(true);

			const currentUser = await signInWithEmailAndPassword(
				auth,
				email,
				password
			);
			dispatch({ type: 'SET_USER', payload: currentUser.user });
			setLoading(false);
			toast.success('Login Successful', { autoClose: 2000 });
		} catch (err) {
			setLoading(false);
			toast.error('Login Error', { autoClose: 2000 });
		}
	};
	return {
		loading,
		loginUser,
	};
};

export default useLogin;
