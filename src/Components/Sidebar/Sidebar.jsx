import './Sidebar.css';
import home from '../../assets/home.png';
import game_icon from '../../assets/game_icon.png';
import automobiles from '../../assets/automobiles.png';
import sports from '../../assets/sports.png';
import entertaiment from '../../assets/entertainment.png';
import tech from '../../assets/tech.png';
import music from '../../assets/music.png';
import blogs from '../../assets/blogs.png';
import news from '../../assets/news.png';
import jack from '../../assets/jack.png';
import simon from '../../assets/simon.png';
import tom from '../../assets/tom.png';
import megan from '../../assets/megan.png';
import cameron from '../../assets/cameron.png';
import PropTypes from 'prop-types';

const Sidebar = ({ sidebar, category, setCategory }) => {
	return (
		<aside className={`sidebar ${sidebar ? '' : 'small-sidebar'}`}>
			<div className='sortcut-links'>
				<div
					className={`side-link ${category === 0 ? 'active' : ''}`}
					onClick={() => setCategory(0)}
				>
					<img src={home} alt='home-icon' loading='lazy' />
					<p>Home</p>
				</div>
				<div
					className={`side-link ${category === 20 ? 'active' : ''}`}
					onClick={() => setCategory(20)}
				>
					<img src={game_icon} alt='game_icon-icon' loading='lazy' />
					<p>Gaming</p>
				</div>
				<div
					className={`side-link ${category === 2 ? 'active' : ''}`}
					onClick={() => setCategory(2)}
				>
					<img src={automobiles} alt='automobiles-icon' loading='lazy' />
					<p>Automobiles</p>
				</div>
				<div
					className={`side-link ${category === 17 ? 'active' : ''}`}
					onClick={() => setCategory(17)}
				>
					<img src={sports} alt='sports-icon' loading='lazy' />
					<p>Sports</p>
				</div>
				<div
					className={`side-link ${category === 24 ? 'active' : ''}`}
					onClick={() => setCategory(24)}
				>
					<img src={entertaiment} alt='entertaiment-icon' loading='lazy' />
					<p>Entertaiment</p>
				</div>
				<div
					className={`side-link ${category === 28 ? 'active' : ''}`}
					onClick={() => setCategory(28)}
				>
					<img src={tech} alt='tech-icon' loading='lazy' />
					<p>Technology</p>
				</div>
				<div
					className={`side-link ${category === 10 ? 'active' : ''}`}
					onClick={() => setCategory(10)}
				>
					<img src={music} alt='music-icon' loading='lazy' />
					<p>Musics</p>
				</div>
				<div
					className={`side-link ${category === 22 ? 'active' : ''}`}
					onClick={() => setCategory(22)}
				>
					<img src={blogs} alt='blogs-icon' loading='lazy' />
					<p>Blogs</p>
				</div>
				<div
					className={`side-link ${category === 25 ? 'active' : ''}`}
					onClick={() => setCategory(25)}
				>
					<img src={news} alt='news-icon' loading='lazy' />
					<p>News</p>
				</div>
				<hr />
			</div>
			<div className='subcribed-list'>
				<h3>Subcribed</h3>
				<div className='side-link'>
					<img src={jack} alt='jack image' />
					<p>Alberto</p>
				</div>
				<div className='side-link'>
					<img src={simon} alt='simon image' />
					<p>William</p>
				</div>
				<div className='side-link'>
					<img src={tom} alt='tom image' />
					<p>Adrien</p>
				</div>
				<div className='side-link'>
					<img src={megan} alt='megan image' />
					<p>Talia</p>
				</div>
				<div className='side-link'>
					<img src={cameron} alt='cameron image' />
					<p>Melvine</p>
				</div>
			</div>
		</aside>
	);
};

Sidebar.propTypes = {
	sidebar: PropTypes.bool,
	category: PropTypes.number,
	setCategory: PropTypes.func,
};
export default Sidebar;
