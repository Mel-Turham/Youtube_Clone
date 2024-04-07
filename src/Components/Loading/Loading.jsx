import { MutatingDots } from 'react-loader-spinner';
import './Loading.css';
const Loading = () => {
	return (
		<div className='wrapperLoading'>
			<MutatingDots
				visible={true}
				height='100'
				width='100'
				color='#000'
				secondaryColor='#000'
				radius='12.5'
				ariaLabel='mutating-dots-loading'
			/>
			<h4>Loading...</h4>
		</div>
	);
};
export default Loading;
