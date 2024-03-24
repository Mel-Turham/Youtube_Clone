import './PlayVideo.css';
import video1 from '../../assets/video.mp4';
import like from '../../assets/like.png';
import dislike from '../../assets/dislike.png';
import share from '../../assets/share.png';
import save from '../../assets/save.png';
import jack from '../../assets/jack.png';
import user_profile from '../../assets/user_profile.jpg';

const PlayVideo = () => {
	return (
		<div className='play-video'>
			<video src={video1} autoPlay controls />
			<h3>Best Youtube channel to lean web development</h3>
			<div className='play-video-info'>
				<p>145views &bull; 2 days ago</p>
				<div>
					<span>
						<img src={like} alt='' />
						125
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
				<img src={jack} alt='' />
				<div>
					<p>Mel Turham dev</p>
					<span>1M subscribers</span>
				</div>

				<button>Subcribe</button>
			</div>

			<div className='vid-description'>
				<p>
					Channel that makes learnig easy
					<p>
						Subscribe Mel Turham dev to watch more Tutorials on web development{' '}
					</p>
					<hr />
					<h4>130 Comments</h4>
					<div className='comments'>
						<img src={user_profile} alt='' loading='lazy' />
						<div>
							<h3>John Doe</h3>
							<span>1 day ago</span>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. At
								numquam reprehenderit quidem, atque aliquam voluptas inventore,
								quibusdam, deserunt nemo architecto recusandae obcaecati enim
								quo commodi. Totam exercitationem animi dicta ipsum?
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
								numquam reprehenderit quidem, atque aliquam voluptas inventore,
								quibusdam, deserunt nemo architecto recusandae obcaecati enim
								quo commodi. Totam exercitationem animi dicta ipsum?
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
								numquam reprehenderit quidem, atque aliquam voluptas inventore,
								quibusdam, deserunt nemo architecto recusandae obcaecati enim
								quo commodi. Totam exercitationem animi dicta ipsum?
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
								numquam reprehenderit quidem, atque aliquam voluptas inventore,
								quibusdam, deserunt nemo architecto recusandae obcaecati enim
								quo commodi. Totam exercitationem animi dicta ipsum?
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
								numquam reprehenderit quidem, atque aliquam voluptas inventore,
								quibusdam, deserunt nemo architecto recusandae obcaecati enim
								quo commodi. Totam exercitationem animi dicta ipsum?
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
								numquam reprehenderit quidem, atque aliquam voluptas inventore,
								quibusdam, deserunt nemo architecto recusandae obcaecati enim
								quo commodi. Totam exercitationem animi dicta ipsum?
							</p>
							<div className='comment-action'>
								<img src={like} alt='' loading='lazy' />
								<span>244</span>
								<img src={dislike} alt='' loading='lazy' />
							</div>
						</div>
					</div>
				</p>
			</div>
		</div>
	);
};
export default PlayVideo;
