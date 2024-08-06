import './Recommended.css';
import { useEffect, useState } from 'react';
import { valueConverter } from '../../index';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Recommended = ({ categoryId }) => {
	const [apiData, setApiData] = useState([]);
	const [isLoading, setIsLoding] = useState(true);
	const [error, setError] = useState(null);
	const API_KEY = import.meta.env.API_KEY;

	useEffect(() => {
		const fectData = async () => {
			try {
				const related_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&maxWidth=200&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`;
				const response = await fetch(related_url);
				if (!response.ok) throw new Error('Error fetch data');
				setIsLoding(false);
				const data = await response.json();
				setApiData(data.items);
			} catch (error) {
				console.error('Error fetching data', error);
				setError(error.message);
				setIsLoding(false);
			}
		};
		fectData();
	}, [categoryId]);

	if (isLoading) {
		return <h1>Loading</h1>;
	}

	if (error) return <h1>{error}</h1>;

	return (
		<aside className='recommended'>
			{apiData.map((item) => {
				return (
					<Link
						to={`/video/${item.snippet.categoryId}/${item.id}`}
						key={item.id}
						className='side-video-list'
					>
						<img
							src={item?.snippet?.thumbnails.medium?.url}
							alt={item.snippet.title}
							loading='lazy'
						/>
						<div className='vid-info'>
							<h4 className='title-recommende'>{item.snippet.title}</h4>
							<p>{item?.snippet?.channelTitle}</p>
							<p>{valueConverter(item?.statistics.viewCount)} Views</p>
						</div>
					</Link>
				);
			})}
		</aside>
	);
};

Recommended.propTypes = {
	categoryId: PropTypes.string,
};
export default Recommended;
