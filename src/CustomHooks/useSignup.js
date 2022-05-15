import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useContext } from 'react';
import { AuthContext } from '../ContextAPI/AuthContext/AuthContext';
import { useNavigate } from 'react-router';
import useAddImg from './useAddImg';
const useSignup = () => {
	const [loading, setLoading] = useState(false);
	const { dispatch } = useContext(AuthContext);
	// const { addImg } = useAddImg();
	const navigate = useNavigate();
	const signup = async (email, password) => {
		try {
			console.log('RUNNING SIGNUP');
			setLoading(true);
			const user = await createUserWithEmailAndPassword(auth, email, password);
			dispatch({ type: 'SET_USER', payload: user.user });
			// console.log(user.user);
			setLoading(false);
			toast.success('user created successful', { autoClose: 2000 });
			// navigate('/');

			navigate('/');
			return user.user;
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
