import React from 'react';
import { storage } from '../firebase/firebase';
// import { auth } from '../firebase/firebase';
import { getAuth, updateProfile } from 'firebase/auth';

import {
	getStorage,
	ref,
	uploadBytesResumable,
	getDownloadURL,
} from 'firebase/storage';
import { toast } from 'react-toastify';
import { useState } from 'react';
import useUpdateDoc from './useUpdateDoc';
import { useContext } from 'react';
import { AuthContext } from '../ContextAPI/AuthContext/AuthContext';
import useSignup from './useSignup';
import { UserContext } from '../ContextAPI/UserContext';
const useAddImg = () => {
	const auth = getAuth();
	const { updateDocument } = useUpdateDoc();
	const { dispatchUser, userId } = useContext(UserContext);
	// console.log(userId, 'DOC REF');
	const addImg = async (email, image, docId, displayName) => {
		// const storage = getStorage();
		// console.log('RUNNIG ADD IMG');
		const fileName = `${email}-${image.name}`;
		const storageRef = ref(storage, `images/${email}/` + fileName);
		// console.log(storageRef);
		const uploadTask = uploadBytesResumable(storageRef, image);

		// Register three observers:
		// 1. 'state_changed' observer, called any time the state changes
		// 2. Error observer, called on failure
		// 3. Completion observer, called on successful completion
		return uploadTask.on(
			'state_changed',
			(snapshot) => {
				// Observe state change events such as progress, pause, and resume
				// Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
				const progress =
					(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
				console.log('Upload is ' + progress + '% done');
				switch (snapshot.state) {
					case 'paused':
						console.log('Upload is paused');
						break;
					case 'running':
						console.log('Upload is running');
						break;
				}
			},
			(error) => {
				// Handle unsuccessful uploads
				toast.error('Image Upload Failed', { autoClose: 2000 });
			},
			() => {
				// Handle successful uploads on complete
				// For instance, get the download URL: https://firebasestorage.googleapis.com/...
				getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
					console.log('File available at', downloadURL);
					// setImg(downloadURL);
					// await signup(email, password);
					toast.success('Image uploaded successful', { autoClose: 2000 });
					console.log(displayName, downloadURL, 'GETDOWNLOAD URL');

					// await updateProfile(auth.currentUser, {
					// 	photoURL: downloadURL,
					// 	displayName: `${displayName}?${docId}`,
					// });
					// await updateProfile(auth.currentUser, {
					// 	docId,
					// });

					// console.log(auth.currentUser, 'UPDATED PROFILE');
					// console.log(docId, auth.currentUser.uid, 'to update ');
					await updateDocument(
						'users',
						docId,
						{
							imgUrl: downloadURL,
							uid: auth.currentUser.uid,
							online: true,
						},
						true
					);

					await updateProfile(auth.currentUser, {
						photoURL: downloadURL,
						displayName: `${displayName}++${docId}`,
					});
					dispatchUser({
						type: 'USER',
						payload: {
							photoURL: downloadURL,
							displayName: displayName,
						},
					});
				});
			}
		);
	};
	return {
		addImg,
	};
};

export default useAddImg;
