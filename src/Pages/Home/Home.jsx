import { useLoaderData } from "react-router-dom";
import Header from "../../Shared/Header/Header";
import Banner from "../Banner/Banner";
import Products from "../Products/Products";
import { useState } from "react";

const Home = () => {
    const deleteProducts = useLoaderData()
    const [deleteUser, setDeleteUser] = useState(deleteProducts)
   
    return (
        <div>
         <Header></Header>
         <Banner></Banner>
         <Products deleteUser={deleteUser} setDeleteUser={setDeleteUser}></Products>
        </div>
    );
};

export default Home;