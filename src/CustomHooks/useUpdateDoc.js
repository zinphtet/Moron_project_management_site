import { db } from '../firebase/firebase';
import { doc, updateDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { auth } from '../firebase/firebase';
import { updateProfile } from 'firebase/auth';
const useUpdateDoc = () => {
	const updateDocument = async (colName, id, updateObj, signup) => {
		try {
			// console.log('updating');
			const docRef = doc(db, colName, id);
			await updateDoc(docRef, {
				...updateObj,
			});
			// console.log(signup, 'UPDATE DOC');
			// if (signup) {
			// 	console.log(id, 'UPDATING DOC ID');
			// 	await updateProfile(auth.currentUser, {
			// 		displayName: `${auth.currentUser.displayName}?${id}`,
			// 	});
			// }

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
