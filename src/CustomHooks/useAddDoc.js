import { serverTimestamp } from 'firebase/firestore';
import { collection, addDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { db } from '../firebase/firebase';
import { useContext } from 'react';
import { UserContext } from '../ContextAPI/UserContext';
import { useState } from 'react';
const useAddDoc = () => {
	// const { dispatchUser } = useContext(UserContext);
	const [loading, setLoading] = useState(false);
	const addDocument = async (colName, docObj) => {
		try {
			setLoading(true)
			const docRef = await addDoc(collection(db, colName), {
				...docObj,
				createdAt: serverTimestamp(),
			});
			// console.log('Document written with ID: ', docRef);
			toast.success('Document created successful');
			// dispatchUser({ type: 'USER_ID', payload: docRef.id });
			setLoading(false);
			return docRef.id;
		} catch (err) {
			setLoading(false);
			toast.error('Error creating user document', { autoClose: 2000 });
		}
	};
	return {
		addDocument,
		loading,
	};
};
export default useAddDoc;
