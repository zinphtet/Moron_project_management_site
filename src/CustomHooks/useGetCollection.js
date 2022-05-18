import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase/firebase';
import { useContext } from 'react';
import { CollectionContext } from '../ContextAPI/CollectionContext';
const useGetCollection = () => {
	const { dispatch } = useContext(CollectionContext);
	const getCollection = (colName, dispatchType) => {
		const unsubscribe = onSnapshot(collection(db, colName), (data) => {
			// console.log(typeof data.docs);
			// console.log( data.docs);
			const dataArr = [];
			data.docs.forEach((data) => {
				// console.log()
				dataArr.push({ ...data.data(), itemId: data.id });
			});
			// console.log(dataArr, 'DATA ARR');
			dispatch({ type: dispatchType, payload: dataArr });
		});
		// console.log('dataArr', typeof dataArr);

		return unsubscribe;
	};
	return {
		getCollection,
	};
};

export default useGetCollection;
