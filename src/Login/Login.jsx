import { Link } from "react-router-dom";
import Header from "../Shared/Header/Header";

const Login = () => {

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
    }
    return (
        <div>
            <Header></Header>
            <div className="hero min-h-screen">
                <div className="card flex-shrink-0 w-full max-w-lg border rounded-lg mt-10">
                    <div className="card-body mt-5">
                        <h1 className="text-4xl font-bold text-[#14191E] text-center">Please Login!</h1>

                        <form onSubmit={handleLogin}>
                            <div className="form-control mt-5">
                                <label className="label">
                                    <span className="label-text text-xl font-semibold text-[#14191E]">Email</span>
                                </label>
                                <input type="email"
                                    placeholder="Your email....."
                                    name='email'
                                    className=" border px-2 py-2 bg-white text-lg font-normal text-[#14191E] rounded-lg" required />
                            </div>

                            <div className="relative">
                                <div className="form-control mt-4">
                                    <label className="label">
                                        <span className="label-text text-xl font-semibold text-[#14191E]">Password</span>
                                    </label>
                                    <input type='text' placeholder="Enter Password....." name='password' className="border px-2 py-2 bg-white text-lg font-normal text-[#14191E] rounded-lg" required />

                                    <span className="text-sm font-bold text-[#14191E] absolute top-14 right-3 cursor-pointer">

                                    </span>
                                </div>
                            </div>

                            <div className="mt-5 cursor-pointer">
                                <p className="text-xl font-semibold text-[#14191E]">Forget Password</p>
                            </div>

                            <div className="form-control mt-10">
                                <input className=" bg-[#D7403A] px-4 py-3 font-semibold rounded-lg text-white cursor-pointer" type="submit" value="Login Now" />

                            </div>
                        </form>

                    </div>

                    <div className='text-center'>
                        <p className="text-lg font-semibold text-[#14191E]">Or Login Up with</p>
                        <div className='flex gap-5 justify-center items-center mb-8 mt-5 px-4'>

                            <a className="bg-[#D7403A] btn text-sm border-0 hover:bg-[#3d3ad7ee] text-[#fff] cursor-pointer">Sign With Google</a>
                            <a className="bg-[#D7403A] btn text-sm border-0 hover:bg-[#3d3ad7ee] text-[#fff] cursor-pointer">Sign With GitHub</a>
                            <a className="bg-[#D7403A] btn text-sm border-0 hover:bg-[#3d3ad7ee] text-[#fff] cursor-pointer">Sign With FaceBook</a>

                        </div>
                        <p className="text-lg font-semibold text-[#14191E] mb-20">Have an account? <Link to={'/register'} className='text-[#FF3811]'>Register</Link> </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;