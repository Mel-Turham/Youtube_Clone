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
import PropTypes from 'prop-types'

const Sidebar = ({sidebar}) => {
	return (
		<aside className={`sidebar ${sidebar ? '' : 'small-sidebar'}`}>
			<div className='sortcut-links'>
				<div className='side-link'>
					<img src={home} alt='home-icon' loading='lazy' />
					<p>Home</p>
				</div>
				<div className='side-link'>
					<img src={game_icon} alt='game_icon-icon' loading='lazy' />
					<p>Gaming</p>
				</div>
				<div className='side-link'>
					<img src={automobiles} alt='automobiles-icon' loading='lazy' />
					<p>Automobiles</p>
				</div>
				<div className='side-link'>
					<img src={sports} alt='sports-icon' loading='lazy' />
					<p>Sports</p>
				</div>
				<div className='side-link'>
					<img src={entertaiment} alt='entertaiment-icon' loading='lazy' />
					<p>Entertaiment</p>
				</div>
				<div className='side-link'>
					<img src={tech} alt='tech-icon' loading='lazy' />
					<p>Technology</p>
				</div>
				<div className='side-link'>
					<img src={music} alt='music-icon' loading='lazy' />
					<p>Musics</p>
				</div>
				<div className='side-link'>
					<img src={blogs} alt='blogs-icon' loading='lazy' />
					<p>Blogs</p>
				</div>
				<div className='side-link'>
					<img src={news} alt='news-icon' loading='lazy' />
					<p>News</p>
				</div>
        <hr />
			</div>
      <div className="subcribed-list">
        <h3>Subcribed</h3>
        <div className="side-link">
          <img src={jack} alt="jack image" />
          <p>PewDiePie</p>
        </div>
        <div className="side-link">
          <img src={simon} alt="simon image" />
          <p>MrBeast</p>
        </div>
        <div className="side-link">
          <img src={tom} alt="tom image" />
          <p>Justin Bieber</p>
        </div>
        <div className="side-link">
          <img src={megan} alt="megan image" />
          <p>5-minute Crafts</p>
        </div>
        <div className="side-link">
          <img src={cameron} alt="cameron image" />
          <p>5-minute Crafts</p>
        </div>
      </div>
		</aside>
	);
};

Sidebar.propTypes ={
  sidebar:PropTypes.bool
}
export default Sidebar;
