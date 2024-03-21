import PropTypes from 'prop-types';
import Product from '../Product/Product';

const Products = ({ deleteUser, setDeleteUser }) => {
    return (
        <div className='max-w-6xl mx-auto mt-20'>
            <h1 className="engagement-regular text-5xl ml-2 text-[#000000] text-center" >Our Popular Products</h1>
            <div className='grid grid-cols-2 gap-10 mt-14'>
                {
                    deleteUser.map(product => <Product key={product._id} product={product} deleteUser={deleteUser} setDeleteUser={setDeleteUser}></Product>)
                }
            </div>
        </div>
    );
};

Products.propTypes = {
    deleteUser: PropTypes.func,
    setDeleteUser: PropTypes.func
};

export default Products;