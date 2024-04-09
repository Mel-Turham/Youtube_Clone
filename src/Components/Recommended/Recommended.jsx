import './Recommended.css';
import thumbnail1 from '../../assets/thumbnail1.png';
import thumbnail2 from '../../assets/thumbnail2.png';
import thumbnail3 from '../../assets/thumbnail3.png';
import thumbnail4 from '../../assets/thumbnail4.png';
import thumbnail5 from '../../assets/thumbnail5.png';
import thumbnail6 from '../../assets/thumbnail6.png';
import thumbnail7 from '../../assets/thumbnail7.png';
import thumbnail8 from '../../assets/thumbnail8.png';
import { useEffect, useState } from 'react';
import { API_KEY } from '../../index';
import PropTypes  from 'prop-types';

const Recommended = ({ categoryId }) => {
  console.log(categoryId);
	const [apiData, setApiData] = useState([]);
	const [error, setError] = useState(null);

	const fectData = async () => {
		try {
			const related_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&maxWidth=200&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`;
			const response = await fetch(related_url);
			if (!response.ok) throw new Error('Error fetch data');
			const data = await response.json();
			setApiData(data.items)
      console.log(data.items);
		} catch (error) {
			console.error('Error fetching data', error);
			setError(error.message);
		}
	};
	useEffect(() => {
		fectData();
	}, []);
	if (error) return <h1>{error}</h1>;
	return (
		<aside className='recommended'>
			<div className='side-video-list'>
				<img src={thumbnail1} alt='' />
				<div className='vid-info'>
					<h4>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit.
						Accusantium, maxime?
					</h4>
					<p>Mel Turham dev</p>
					<p>199k views</p>
				</div>
			</div>
			<div className='side-video-list'>
				<img src={thumbnail2} alt='' />
				<div className='vid-info'>
					<h4>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit.
						Accusantium, maxime?
					</h4>
					<p>Mel Turham dev</p>
					<p>199k views</p>
				</div>
			</div>
			<div className='side-video-list'>
				<img src={thumbnail3} alt='' />
				<div className='vid-info'>
					<h4>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit.
						Accusantium, maxime?
					</h4>
					<p>Mel Turham dev</p>
					<p>199k views</p>
				</div>
			</div>
			<div className='side-video-list'>
				<img src={thumbnail4} alt='' />
				<div className='vid-info'>
					<h4>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit.
						Accusantium, maxime?
					</h4>
					<p>Mel Turham dev</p>
					<p>199k views</p>
				</div>
			</div>
			<div className='side-video-list'>
				<img src={thumbnail5} alt='' />
				<div className='vid-info'>
					<h4>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit.
						Accusantium, maxime?
					</h4>
					<p>Mel Turham dev</p>
					<p>199k views</p>
				</div>
			</div>
			<div className='side-video-list'>
				<img src={thumbnail6} alt='' />
				<div className='vid-info'>
					<h4>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit.
						Accusantium, maxime?
					</h4>
					<p>Mel Turham dev</p>
					<p>199k views</p>
				</div>
			</div>
			<div className='side-video-list'>
				<img src={thumbnail7} alt='' />
				<div className='vid-info'>
					<h4>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit.
						Accusantium, maxime?
					</h4>
					<p>Mel Turham dev</p>
					<p>199k views</p>
				</div>
			</div>
			<div className='side-video-list'>
				<img src={thumbnail8} alt='' />
				<div className='vid-info'>
					<h4>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit.
						Accusantium, maxime?
					</h4>
					<p>Mel Turham dev</p>
					<p>199k views</p>
				</div>
			</div>
		</aside>
	);
};

Recommended.propTypes={
  categoryId:PropTypes.string
}
export default Recommended;
