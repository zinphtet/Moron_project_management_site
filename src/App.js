import logo from './logo.svg';
import './App.scss';
import Button from './components/Button/Button';
import Navbar from './components/Navbar/Navbar';
import Main from './pages/Main/Main';
import Container from './pages/Container/Container';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
	return (
		<div className="App">
			<ToastContainer />
			<Container />
		</div>
	);
}

export default App;
