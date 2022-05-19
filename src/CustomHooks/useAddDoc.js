import { serverTimestamp } from 'firebase/firestore';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/firebase';
import { useState } from 'react';
const useAddDoc = () => {
	
	const [loading, setLoading] = useState(false);
	const addDocument = async (colName, docObj) => {
		try {
			setLoading(true)
			const docRef = await addDoc(collection(db, colName), {
				...docObj,
				createdAt: serverTimestamp(),
			});
			
			setLoading(false);
			return docRef.id;
		} catch (err) {
			setLoading(false);
		
		}
	};
	return {
		addDocument,
		loading,
	};
};
export default useAddDoc;
