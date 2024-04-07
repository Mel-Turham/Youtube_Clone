import { MutatingDots } from 'react-loader-spinner';
import './Loading.css';
console.log(MutatingDots);
const Loading = () => {
	return (
		<div className='wrapperLoading'>
			<MutatingDots
				visible={true}
				height='100'
				width='100'
				color='#080808'
				secondaryColor='#080808'
				radius='12.5'
				ariaLabel='mutating-dots-loading'
			/>
		</div>
	);
};
export default Loading;
