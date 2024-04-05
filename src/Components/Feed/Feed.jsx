import './Feed.css';
import { Link } from 'react-router-dom';
import { API_KEY, valueConverter } from '../../index';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
const Feed = ({ category }) => {
	const [data, setData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const videoUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=200&maxWidth=200&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`;
			try {
				await fetch(videoUrl)
					.then((rep) => rep.json())
					.then((resutls) => setData(resutls.items));
			} catch (error) {
				console.log(error);
			}
		};
		fetchData();
	}, [category]);
	return (
		<div className='feed'>
			{!data && <h2 className='loading'>Chargemant....</h2>}
			{data && (
				<>
					{data.map((item) => {
						return (
							<Link
								key={item.id}
								to={`video/${item.snippet.categoryId}/${item.id}`}
								className='card'
							>
								<img src={item.snippet.thumbnails.medium.url} alt='' />
								<h2>{item?.snippet?.title}</h2>
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
