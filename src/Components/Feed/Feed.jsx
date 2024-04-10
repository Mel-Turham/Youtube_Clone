import './Feed.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { valueConverter, API_KEY } from '../../index';
import Loading from '../Loading/Loading';
import Error from '../../Error/Error';

const Feed = ({ category }) => {
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);
	const [data, setData] = useState([]);
	useEffect(() => {
		const fetchData = async () => {
			try {
				const videoUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=200&maxWidth=200&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`;
				const response = await fetch(videoUrl);
				if (!response.ok) throw new Error('Network response was not ok');
				const data = await response.json();
				setData(data.items);
				setIsLoading(false);
			} catch (error) {
				console.error('Error fectching data', error);
				setError(error.message);
				setIsLoading(false);
			}
		};
		fetchData();
	}, [category]);

	if (isLoading) {
		return <Loading />;
	}
	if (error) {
		return <Error errorMessage={error} />;
	}

	return (
		<div className='feed'>
			{data && (
				<>
					{data.map((item) => {
						return (
							<Link
								key={item.id}
								to={`video/${item.snippet.categoryId}/${item.id}`}
								className='card'
							>
								<img
									src={item.snippet.thumbnails.medium.url}
									alt=''
									loading='lazy'
								/>
								<h2 className='title-video'>{item?.snippet?.title}</h2>
								<h3>{item?.snippet?.channelTitle}</h3>
								<p>
									{valueConverter(item?.statistics?.viewCount)} views &bull;{' '}
									{moment(item.snippet.publishedAt).fromNow()}
								</p>
							</Link>
						);
					})}
				</>
			)}
		</div>
	);
};

Feed.propTypes = {
	category: PropTypes.number,
};

export default Feed;
