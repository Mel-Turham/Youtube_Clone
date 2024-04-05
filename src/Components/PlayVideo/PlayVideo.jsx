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
import { API_KEY, likesConverts, valueConverter } from '../../index';

const PlayVideo = ({ videoId }) => {
	const [apiData, setApiData] = useState(null);

	const [channelData, setChannelData] = useState(null);

	useEffect(() => {
		const videoData = async () => {
			try {
				const videoUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
				await fetch(videoUrl)
					.then((response) => response.json())
					.then((results) => setApiData(results.items[0]));
			} catch (error) {
				console.log(error);
			}
		};
		videoData();
	}, [videoId]);

	useEffect(() => {
		const fecthChannel = async () => {
			try {
				const apiChannelUrl = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData?.snippet?.channelId}&key=${API_KEY}`;
				await fetch(apiChannelUrl)
					.then((response) => response.json())
					.then((results) => setChannelData(results.items[0]));
			} catch (error) {
				console.log(error);
			}
		};
		fecthChannel();
	}, [apiData]);

	return (
		<div className='play-video'>
			{/* <video src={video1} autoPlay controls /> */}
			{!apiData && <h1 className='loading'>Chargement...</h1>}
			{apiData && (
				<>
					<iframe
						src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
						frameBorder='0'
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
						referrerPolicy='strict-origin-when-cross-origin'
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
								channelData ? channelData?.snippet?.thumbnails?.default.url : ''
							}
							alt={apiData?.snippet.channelTitle}
						/>
						<div>
							<p>{apiData?.snippet.channelTitle}</p>
							<span>{valueConverter(channelData?.statistics?.subscriberCount)}</span>
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
						<div className='comments'>
							<img src={user_profile} alt='' loading='lazy' />
							<div>
								<h3>John Doe</h3>
								<span>1 day ago</span>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. At
									numquam reprehenderit quidem, atque aliquam voluptas
									inventore, quibusdam, deserunt nemo architecto recusandae
									obcaecati enim quo commodi. Totam exercitationem animi dicta
									ipsum?
								</p>
								<div className='comment-action'>
									<img src={like} alt='' loading='lazy' />
									<span>244</span>
									<img src={dislike} alt='' loading='lazy' />
								</div>
							</div>
						</div>
						<div className='comments'>
							<img src={user_profile} alt='' loading='lazy' />
							<div>
								<h3>John Doe</h3>
								<span>1 day ago</span>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. At
									numquam reprehenderit quidem, atque aliquam voluptas
									inventore, quibusdam, deserunt nemo architecto recusandae
									obcaecati enim quo commodi. Totam exercitationem animi dicta
									ipsum?
								</p>
								<div className='comment-action'>
									<img src={like} alt='' loading='lazy' />
									<span>244</span>
									<img src={dislike} alt='' loading='lazy' />
								</div>
							</div>
						</div>
						<div className='comments'>
							<img src={user_profile} alt='' loading='lazy' />
							<div>
								<h3>John Doe</h3>
								<span>1 day ago</span>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. At
									numquam reprehenderit quidem, atque aliquam voluptas
									inventore, quibusdam, deserunt nemo architecto recusandae
									obcaecati enim quo commodi. Totam exercitationem animi dicta
									ipsum?
								</p>
								<div className='comment-action'>
									<img src={like} alt='' loading='lazy' />
									<span>244</span>
									<img src={dislike} alt='' loading='lazy' />
								</div>
							</div>
						</div>
						<div className='comments'>
							<img src={user_profile} alt='' loading='lazy' />
							<div>
								<h3>John Doe</h3>
								<span>1 day ago</span>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. At
									numquam reprehenderit quidem, atque aliquam voluptas
									inventore, quibusdam, deserunt nemo architecto recusandae
									obcaecati enim quo commodi. Totam exercitationem animi dicta
									ipsum?
								</p>
								<div className='comment-action'>
									<img src={like} alt='' loading='lazy' />
									<span>244</span>
									<img src={dislike} alt='' loading='lazy' />
								</div>
							</div>
						</div>
						<div className='comments'>
							<img src={user_profile} alt='' loading='lazy' />
							<div>
								<h3>John Doe</h3>
								<span>1 day ago</span>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. At
									numquam reprehenderit quidem, atque aliquam voluptas
									inventore, quibusdam, deserunt nemo architecto recusandae
									obcaecati enim quo commodi. Totam exercitationem animi dicta
									ipsum?
								</p>
								<div className='comment-action'>
									<img src={like} alt='' loading='lazy' />
									<span>244</span>
									<img src={dislike} alt='' loading='lazy' />
								</div>
							</div>
						</div>
						<div className='comments'>
							<img src={user_profile} alt='' loading='lazy' />
							<div>
								<h3>John Doe</h3>
								<span>1 day ago</span>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. At
									numquam reprehenderit quidem, atque aliquam voluptas
									inventore, quibusdam, deserunt nemo architecto recusandae
									obcaecati enim quo commodi. Totam exercitationem animi dicta
									ipsum?
								</p>
								<div className='comment-action'>
									<img src={like} alt='' loading='lazy' />
									<span>244</span>
									<img src={dislike} alt='' loading='lazy' />
								</div>
							</div>
						</div>
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
