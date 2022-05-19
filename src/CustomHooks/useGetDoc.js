
import { db } from '../firebase/firebase';
import { doc, onSnapshot } from 'firebase/firestore';
import { useState } from 'react';
const useGetDoc = () => {
	const [data, setData] = useState(null);
    
	const getSingleDocument = async (colName, id) => {
		
		const unsub = onSnapshot(doc(db, colName, id), (doc) => {
			console.log('Current data: ', doc.data());
			setData({...doc.data() ,itemId:doc.id});
		});

		return {
			unsub,
		};
	};

	

	return {
		getSingleDocument,
		data,
	};
};

export default useGetDoc;
