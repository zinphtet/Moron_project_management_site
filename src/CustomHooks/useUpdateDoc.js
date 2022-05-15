import { db } from '../firebase/firebase';
import { doc, updateDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';
const useUpdateDoc = () => {
	const updateDocument = async (colName, id, updateObj) => {
		try {
			console.log('updating');
			const docRef = doc(db, colName, id);
			await updateDoc(docRef, {
				...updateObj,
			});
			console.log('updated ...');
			toast.success('Updated successful', { autoClose: 2000 });
		} catch (err) {
			toast.error('Update Document Error', { autoClose: 2000 });
		}
	};
	return {
		updateDocument,
	};
};

export default useUpdateDoc;
