import errorImage from '../assets/images/404/404.gif'

const ErrorRoute = () => {
    return (
        <div className='max-w-6xl mx-auto'>
            <div className='mt-10'>
                <img className='mx-auto rounded-lg' src={errorImage} alt="" />
            </div>
        </div>
    );
};

export default ErrorRoute;