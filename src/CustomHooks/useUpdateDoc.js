import { db } from '../firebase/firebase';
import { doc, updateDoc } from 'firebase/firestore';
const useUpdateDoc = () => {
	const updateDocument = async (colName, id, updateObj) => {
		try {
		
			console.log(colName,id,updateObj)
			const docRef = doc(db, colName, id);
			await updateDoc(docRef, {
				...updateObj,
			});
			
		} catch (err) {
			
		}
	};
	return {
		updateDocument,
	};
};

export default useUpdateDoc;
