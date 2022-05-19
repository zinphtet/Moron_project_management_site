import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase/firebase';
import { useContext } from 'react';
import { CollectionContext } from '../ContextAPI/CollectionContext';
const useGetCollection = () => {
	const { dispatch } = useContext(CollectionContext);
	const getCollection = (colName, dispatchType) => {
		const unsubscribe = onSnapshot(collection(db, colName), (data) => {
		
			const dataArr = [];
			data.docs.forEach((data) => {
			
				dataArr.push({ ...data.data(), itemId: data.id });
			});
			dispatch({ type: dispatchType, payload: dataArr });
		});
		

		return unsubscribe;
	};
	return {
		getCollection,
	};
};

export default useGetCollection;
