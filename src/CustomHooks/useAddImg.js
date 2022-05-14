import React from 'react';
import { storage } from '../firebase/firebase';
import {
	getStorage,
	ref,
	uploadBytesResumable,
	getDownloadURL,
} from 'firebase/storage';
import { toast } from 'react-toastify';
const useAddImg = () => {
	const addImg = async (image, id) => {
		// const storage = getStorage();
		const fileName = `${id}-${image.name}`;
		const storageRef = ref(storage, `images/${id}/` + fileName);

		const uploadTask = uploadBytesResumable(storageRef, image);

		// Register three observers:
		// 1. 'state_changed' observer, called any time the state changes
		// 2. Error observer, called on failure
		// 3. Completion observer, called on successful completion
		uploadTask.on(
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
				getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
					console.log('File available at', downloadURL);
				});
			}
		);
	};
	return {
		addImg,
	};
};

export default useAddImg;
