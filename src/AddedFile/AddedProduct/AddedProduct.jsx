import Swal from "sweetalert2";
import Header from "../../Shared/Header/Header";

const AddedProduct = () => {

    const handleAddedProduct = event => {
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

        fetch('http://localhost:5000/addedProduct', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addedProduct)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                if (result.insertedId){
                    Swal.fire({
                        title: "Success",
                        text: "Product Added SuccessFull",
                        icon: "success"
                      });
                }
        })

    }
    return (
        <div>
            <Header></Header>
            <div className="max-w-6xl mx-auto mt-10 bg-[#F4F3F0] text-center p-16 rounded-lg">
                <h1 className="engagement-regular text-4xl mt-5 text-[#414A59]">Add New Coffee</h1>
                <p className="text-sm text-[#414A59] mt-4">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at <br /> its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed <br /> to using Content here.</p>

                <div className="mt-8">
                    <form onSubmit={handleAddedProduct}>
                        <div className="flex gap-10">
                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Enter coffee name" name="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text">Chef</span>
                                </label>
                                <input type="text" placeholder="Enter coffee chef" name="chef" className="input input-bordered" required />
                            </div>
                        </div>

                        <div className="flex gap-10">
                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text">Supplier</span>
                                </label>
                                <input type="text" placeholder="Enter coffee supplier" name="supplier" className="input input-bordered" required />
                            </div>
                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text">Taste</span>
                                </label>
                                <input type="text" placeholder="Enter coffee taste" name="taste" className="input input-bordered" required />
                            </div>
                        </div>

                        <div className="flex gap-10">
                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text">Category</span>
                                </label>
                                <input type="text" placeholder="Enter coffee category" name="category" className="input input-bordered" required />
                            </div>
                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text">Details</span>
                                </label>
                                <input type="text" placeholder="Enter coffee details" name="details" className="input input-bordered" required />
                            </div>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input type="text" placeholder="Enter photo URL" name="photo" className="input input-bordered" required />
                        </div>

                        <button className="bg-[#D2B48C] w-full rounded-lg mt-5 text-[#414A59] py-2">Add Coffee</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddedProduct;