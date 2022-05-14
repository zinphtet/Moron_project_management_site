import { serverTimestamp } from 'firebase/firestore';
import { collection, addDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { db } from '../firebase/firebase';
const useAddDoc = () => {
	const addDocument = async (colName, docObj) => {
		try {
			const docRef = await addDoc(collection(db, colName), {
				...docObj,
				createdAt: serverTimestamp(),
			});
			console.log('Document written with ID: ', docRef);
		} catch (err) {
			toast.error('Error creating user document', { autoClose: 2000 });
		}
	};
	return {
		addDocument,
	};
};
export default useAddDoc;
