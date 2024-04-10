import PropTypes from 'prop-types';
import './Error.css';
const Error = ({ errorMessage }) => {
	return (
		<div className='error-message'>
			<h1 className='error-text'>{errorMessage}</h1>
		</div>
	);
};

Error.propTypes = {
	errorMessage: PropTypes.string,
};
export default Error;
