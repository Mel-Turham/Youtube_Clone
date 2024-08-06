import './PlayVideo.css';
// import video1 from '../../assets/video.mp4';
import like from '../../assets/like.png';
import dislike from '../../assets/dislike.png';
import share from '../../assets/share.png';
import save from '../../assets/save.png';
import user_profile from '../../assets/user_profile.jpg';
import moment from 'moment';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { likesConverts, valueConverter } from '../../index';
import Loading from '../Loading/Loading';
import Error from '../../Error/Error';

const PlayVideo = ({ videoId }) => {
	const [apiData, setApiData] = useState(null);
	const [channelData, setChannelData] = useState(null);
	const [comments, setComments] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);
	const API_KEY = import.meta.env.API_KEY;

	useEffect(() => {
		const videoData = async () => {
			try {
				const videoUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
				const response = await fetch(videoUrl);
				if (!response.ok) throw new Error('Somthing is wrong');
				const data = await response.json();
				setApiData(data.items[0]);
			} catch (error) {
				console.error(error.message);
			}
		};
		videoData();
	}, [videoId]);

	useEffect(() => {
		const fecthChannel = async () => {
			try {
				if (!apiData || !apiData.snippet || !apiData.snippet.channelId) {
					throw new Error('Channel ID not available');
				}

				const apiChannelUrl = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`;
				const response = await fetch(apiChannelUrl);

				if (!response.ok) {
					throw new Error('Network response was not ok');
				}

				const data = await response.json();
				setChannelData(data.items[0]);
				setIsLoading(false);
			} catch (error) {
				console.error('Error fetching channel data:', error);
				setError(error.message);
				setIsLoading(false);
			}
		};
		if (apiData) {
			fecthChannel();
		}
	}, [apiData]);

	useEffect(() => {
		const fecthComments = async () => {
			try {
				const commentUrl = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${videoId}&key=${API_KEY}`;
				const response = await fetch(commentUrl);
				if (!response.ok) throw new Error('Comments are not fetch');
				const results = await response.json();
				setComments(results.items);
			} catch (error) {
				console.error(error.message);
				setError(error.message);
			}
		};
		fecthComments();
	}, [videoId]);

	if (isLoading) return <Loading />;

	if (error) return <h1>{Error}</h1>;

	return (
		<div className='play-video'>
			{/* <video src={video1} autoPlay controls /> */}

			{apiData && (
				<>
					<iframe
						src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
						referrerPolicy='strict-origin-when-cross-origin'
						frameBorder={0}
						allowFullScreen
					/>
					<h3>{apiData ? apiData.snippet.title : 'Title not available'}</h3>
					<div className='play-video-info'>
						<p>
							{' '}
							{valueConverter(apiData?.statistics.viewCount)} views &bull;{' '}
							{moment(apiData?.snippet?.publishedAt).fromNow()}
						</p>
						<div>
							<span>
								<img src={like} alt='' />
								{likesConverts(apiData?.statistics.likeCount)}
							</span>
							<span>
								<img src={dislike} alt='' />
								155
							</span>
							<span>
								<img src={share} alt='' /> share 1344{' '}
							</span>
							<span>
								<img src={save} alt='' />
								save
							</span>
						</div>
					</div>
					<hr />
					<div className='publisher'>
						<img
							src={
								channelData
									? channelData?.snippet?.thumbnails?.default.url
									: { user_profile }
							}
							alt={apiData?.snippet.channelTitle}
						/>
						<div>
							<p>{apiData?.snippet.channelTitle}</p>
							<span>
								{valueConverter(channelData?.statistics?.subscriberCount)}{' '}
								Subscribers
							</span>
						</div>

						<button>Subcribe</button>
					</div>

					<div className='vid-description'>
						<p>
							{apiData
								? apiData?.snippet.description.slice(0, 255)
								: 'Description not fond'}
						</p>
						<hr />
						<h4>
							{apiData
								? valueConverter(apiData?.statistics.commentCount)
								: '244'}{' '}
							Comments
						</h4>
						{comments.map((comment) => {
							return (
								<div className='comments' key={comment.id}>
									<img
										src={
											comment.snippet.topLevelComment.snippet
												.authorProfileImageUrl
										}
										alt={
											comment.snippet.topLevelComment.snippet.authorDisplayName
										}
										loading='lazy'
									/>
									<div>
										<h3>
											{
												comment.snippet.topLevelComment.snippet
													.authorDisplayName
											}
											<span>1 day ago</span>
										</h3>
										<p>{comment.snippet.topLevelComment.snippet.textDisplay}</p>
										<div className='comment-action'>
											<img src={like} alt='' loading='lazy' />
											<span>
												{valueConverter(
													comment.snippet.topLevelComment.snippet.likeCount,
												)}
											</span>
											<img src={dislike} alt='' loading='lazy' />
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</>
			)}
		</div>
	);
};

PlayVideo.propTypes = {
	videoId: PropTypes.string,
};
export default PlayVideo;
