import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { AuthContextProvider } from './ContextAPI/AuthContext/AuthContext';
import { UserContextProvider } from './ContextAPI/UserContext';
import { CollectionContextProvider } from './ContextAPI/CollectionContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<CollectionContextProvider>
		<UserContextProvider>
			<AuthContextProvider>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</AuthContextProvider>
		</UserContextProvider>
	</CollectionContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
