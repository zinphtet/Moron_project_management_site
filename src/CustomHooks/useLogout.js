import { auth } from '../firebase/firebase';
import { signOut } from 'firebase/auth';
import { toast } from 'react-toastify';
import { useState, useContext } from 'react';
import { AuthContext } from '../ContextAPI/AuthContext/AuthContext';
const useLogout = () => {
	const [loading, setLoading] = useState(false);
	const { dispatch } = useContext(AuthContext);
	const logout = async () => {
		try {
			setLoading(true);
			const data = await signOut(auth);
			dispatch({ type: 'LOGOUT' });
			setLoading(false);
			toast.success('Logout Successful',{autoClose:2000});
		} catch (err) {
			setLoading(false);
			toast.error('Cannot Logout',{autoClose:2000});
		}
	};

	return {
		loading,
		logout,
	};
};

export default useLogout;
