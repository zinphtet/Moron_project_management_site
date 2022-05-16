import { auth, db } from '../firebase/firebase';
import { signOut } from 'firebase/auth';
import { toast } from 'react-toastify';
import { useState, useContext } from 'react';
import { AuthContext } from '../ContextAPI/AuthContext/AuthContext';
import { useNavigate } from 'react-router';
import { doc, updateProfile } from 'firebase/auth';
import useUpdateDoc from './useUpdateDoc';
const useLogout = () => {
	const [loading, setLoading] = useState(false);
	const { dispatch } = useContext(AuthContext);
	const navigate = useNavigate();
	const { updateDocument } = useUpdateDoc();
	const logout = async () => {
		try {
			setLoading(true);
			// const docRef = doc(db,'users',auth.currentUser.documentId)
			//  await updateProfile(docRef)
			// console.log(auth.currentUser.phoneNumber);
			await updateDocument(
				'users',
				auth.currentUser.displayName?.split('++')[1],
				{
					online: false,
				}
			);
			await signOut(auth);
			dispatch({ type: 'LOGOUT' });
			setLoading(false);
			toast.success('Logout Successful', { autoClose: 2000 });
			navigate('/');
		} catch (err) {
			setLoading(false);
			toast.error('Cannot Logout', { autoClose: 2000 });
		}
	};

	return {
		loading,
		logout,
	};
};

export default useLogout;
