import PropTypes from 'prop-types';
import { FaEye } from 'react-icons/fa';
import { MdDelete, MdEdit } from "react-icons/md";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';


const Product = ({ product, deleteUser, setDeleteUser }) => {
    
    const { _id, name, chef, photo, taste } = product;
    const deleteProduct = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/addedProduct/${_id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            const remaining = deleteUser.filter(user => user._id !== _id)
                            setDeleteUser(remaining)
                        }
                    })
            }
        });
    }
   
    return (
        <div className='flex justify-between gap-10 items-center bg-[#F5F4F1] p-5 rounded-xl'>
            <div className='flex items-center'>
                <img className='w-40 h-52 rounded-xl' src={photo} alt="" />
                <div className='ml-5'>
                    <p className='text-[#1b1a1a] font-bold'>Name: <span className='text-[#4d4848] font-normal'>{name}</span> </p>
                    <p className='mt-5 text-[#1b1a1a] font-bold'>Chef: <span className='text-[#4d4848] font-normal'>{chef}</span> </p>
                    <p className='mt-5 text-[#1b1a1a] font-bold'>Taste: <span className='text-[#4d4848] font-normal'>{taste}</span> </p>
                </div>
            </div>
            <div className='flex-col'>
                <p className='bg-[#D2B48C] hover:bg-[#eaa850] text-[#ffff] px-3 py-2 rounded-md text-2xl cursor-pointer'>{<FaEye></FaEye>}</p>
                <Link to={`/updateProduct/${_id}`}>
                    <p className='mt-3 bg-[#3C393B] hover:bg-[#131112] text-[#ffff] px-3 py-2 rounded-md text-2xl cursor-pointer'> {<MdEdit />} </p>
                </Link>
                <p onClick={() => deleteProduct(_id)} className='mt-3 bg-[#EA4744] hover:bg-[#F60002] text-[#ffff] px-3 py-2 rounded-md text-2xl cursor-pointer'> {<MdDelete />} </p>
            </div>
        </div>
    );
};
Product.propTypes = {
    product: PropTypes.object,
    deleteUser: PropTypes.func,
    setDeleteUser: PropTypes.func
};
export default Product;