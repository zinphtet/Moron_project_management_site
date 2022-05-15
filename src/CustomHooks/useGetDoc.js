import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase/firebase';
const useGetDoc = () => {
	const getSingleDocument = async (colName, id) => {
		const docRef = doc(db, colName, id);
		const docSnap = await getDoc(docRef);
		console.log(docSnap);
		console.log('GET USER ', docSnap.exists());
	};
	return {
		getSingleDocument,
	};
};

export default useGetDoc;
