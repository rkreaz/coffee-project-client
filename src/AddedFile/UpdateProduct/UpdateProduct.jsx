import { useLoaderData } from "react-router-dom";
import Header from "../../Shared/Header/Header";
import Swal from "sweetalert2";

const UpdateProduct = () => {
    const updates = useLoaderData();
    const {_id, name, chef, supplier, photo, taste, category, details } = updates;

    const handleUpdateProduct = event => {
        event.preventDefault();
        const from = event.target;
        const name = from.name.value;
        const chef = from.chef.value;
        const supplier = from.supplier.value;
        const taste = from.taste.value;
        const category = from.category.value;
        const details = from.details.value;
        const photo = from.photo.value;


        const addedProduct = { name, chef, supplier, taste, category, details, photo };

        console.log(addedProduct);

        fetch(`http://localhost:5000/addedProduct/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addedProduct)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                if (result.modifiedCount > 0){
                    Swal.fire({
                        title: "Success Full",
                        text: "Product Updated SuccessFull",
                        icon: "success"
                      });
                }
        })

    }
    
    return (
        <div>
        <Header></Header>
        <div className="max-w-6xl mx-auto mt-10 bg-[#F4F3F0] text-center p-16 rounded-lg">
            <h1 className="engagement-regular text-4xl mt-5 text-[#414A59]">Update Coffee</h1>

            <div className="mt-8">
                <form onSubmit={handleUpdateProduct}>
                    <div className="flex gap-10">
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" defaultValue={name} name="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Chef</span>
                            </label>
                            <input type="text" defaultValue={chef} name="chef" className="input input-bordered" required />
                        </div>
                    </div>

                    <div className="flex gap-10">
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Supplier</span>
                            </label>
                            <input type="text" defaultValue={supplier} name="supplier" className="input input-bordered" required />
                        </div>
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Taste</span>
                            </label>
                            <input type="text" defaultValue={taste} name="taste" className="input input-bordered" required />
                        </div>
                    </div>

                    <div className="flex gap-10">
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <input type="text" defaultValue={category} name="category" className="input input-bordered" required />
                        </div>
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Details</span>
                            </label>
                            <input type="text" defaultValue={details} name="details" className="input input-bordered" required />
                        </div>
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <input type="text" defaultValue={photo} name="photo" className="input input-bordered" required />
                    </div>

                    <button className="bg-[#D2B48C] w-full rounded-lg mt-5 text-[#414A59] py-2">Update Coffee</button>
                </form>
            </div>
        </div>
    </div>
    );
};

export default UpdateProduct;