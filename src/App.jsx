import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Video from './Pages/Video/Video';
import { useState } from 'react';

const App = () => {
	const [sidebar, setSidebar] = useState(true)
	return (
		<main>
			<Navbar  setSidebar={setSidebar}/>
			<Routes>
				<Route index element={<Home sidebar={sidebar}/>}/>
				<Route path='/' element={<Home sidebar={sidebar}/>} />
				<Route path='/video/:categoruId/:videoId' element={<Video />} />
			</Routes>
		</main>
	);
};
export default App;
