import './Navbar.css';
import menu_icon from '../../assets/menu.png';
import logo from '../../assets/logo.png';
import search_icon from '../../assets/search.png';
import upload_icon from '../../assets/upload.png';
import more_icon from '../../assets/more.png';
import notification_icon from '../../assets/notification.png';
import profile_icon from '../../assets/jack.png';
import PropTypes from 'prop-types';
// const apiKey = 'AIzaSyDVXBKOWzHEP1YGPPTpc66NibPvy26C4Vg';
const Navbar = ({ setSidebar }) => {
	const handleOnclik = () => {
		setSidebar((prevState) => !prevState);
	};
	return (
		<nav className='flex-div'>
			<div className='nav-left flex-div'>
				<img
					className='menu-icon'
					src={menu_icon}
					alt='menu_icon'
					loading='lazy'
					onClick={handleOnclik}
				/>
				<img className='logo' src={logo} alt='Logo' loading='lazy' />
			</div>
			<div className='nav-middle flex-div'>
				<div className='search-box flex-div'>
					<input type='text' placeholder='Search...' />
					<img src={search_icon} alt='' />
				</div>
			</div>

			<div className='nav-right flex-div'>
				<img src={upload_icon} alt='upload_icon' loading='lazy' />
				<img src={more_icon} alt='more_icon' loading='lazy' />
				<img src={notification_icon} alt='notification_icon' loading='lazy' />
				<img
					src={profile_icon}
					className='user-icon'
					alt='profile_icon'
					loading='lazy'
				/>
			</div>
		</nav>
	);
};
Navbar.propTypes = {
	setSidebar: PropTypes.func,
};
export default Navbar;
