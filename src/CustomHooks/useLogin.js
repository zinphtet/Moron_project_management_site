import { auth } from '../firebase/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState, useContext } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../ContextAPI/AuthContext/AuthContext';
import { useNavigate } from 'react-router';
import useUpdateDoc from './useUpdateDoc';
const useLogin = () => {
	const [loading, setLoading] = useState(false);
	const { updateDocument } = useUpdateDoc();
	const navigate = useNavigate();
	const { dispatch } = useContext(AuthContext);
	const loginUser = async (email, password) => {
		try {
			setLoading(true);

			const currentUser = await signInWithEmailAndPassword(
				auth,
				email,
				password
			);
			await updateDocument(
				'users',
				auth.currentUser.displayName?.split('++')[1],
				{
					online: true,
				}
			);
			dispatch({ type: 'SET_USER', payload: currentUser.user });
			setLoading(false);
			toast.success('Login Successful', { autoClose: 2000 });
			navigate('/');
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
