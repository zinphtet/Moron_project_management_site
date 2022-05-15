import { serverTimestamp } from 'firebase/firestore';
import { collection, addDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { db } from '../firebase/firebase';
import { useContext } from 'react';
import { UserContext } from '../ContextAPI/UserContext';
const useAddDoc = () => {
	// const { dispatchUser } = useContext(UserContext);
	const addDocument = async (colName, docObj) => {
		try {
			const docRef = await addDoc(collection(db, colName), {
				...docObj,
				createdAt: serverTimestamp(),
			});
			// console.log('Document written with ID: ', docRef);
			toast.success('Document created successful');
			// dispatchUser({ type: 'USER_ID', payload: docRef.id });
			return docRef.id;
		} catch (err) {
			// toast.error('Error creating user document', { autoClose: 2000 });
		}
	};
	return {
		addDocument,
	};
};
export default useAddDoc;
