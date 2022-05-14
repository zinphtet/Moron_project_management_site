import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useContext } from 'react';
import { AuthContext } from '../ContextAPI/AuthContext/AuthContext';
const useSignup = () => {
	const [loading, setLoading] = useState(false);
	const { dispatch } = useContext(AuthContext);
	const signup = async (email, password) => {
		try {
			setLoading(true);
			const user = await createUserWithEmailAndPassword(auth, email, password);
			dispatch({ type: 'SET_USER', payload: user.user });
			console.log(user.user);
			setLoading(false);
			toast.success('user created successful', { autoClose: 2000 });
		} catch (err) {
			setLoading(false);
			toast.error('Error creating user', { autoClose: 2000 });
		}
	};
	return {
		signup,
		loading,
	};
};
export default useSignup;
