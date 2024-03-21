import { Link } from "react-router-dom";
import Header from "../Shared/Header/Header";
import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { updateProfile } from "firebase/auth";

const Register = () => {
    const {createUser} = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('');

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        const accepted = form.terms.checked;
        console.log(name, email, photo, password, accepted);

        setRegisterError('')
        setSuccess('')

        if (password.length < 6) {
            setRegisterError('Password should be at least 6 characters');
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setRegisterError('Password should be at (A-Z)Any one UpperCase characters');
            return;
        }
        else if (!/[a-z]/.test(password)) {
            setRegisterError('Password should be at (a-z)Any one UpperCase characters');
            return;
        }

        else if (!/[#?!@$%^&*\-_\\/]/.test(password)) {
            setRegisterError('Password should be at #?!@$%^&*');
            return;
        }
        else if (!accepted) {
            setRegisterError('Please accepted Terms and Condition');
            return;
        }

        createUser(email, password)
        .then(result => {
          console.log(result);
            setSuccess('User Create SuccessFully')

            updateProfile(result.user, {
                displayName: name,
                photoURL: photo
            })
            .then(() => {
                console.log('update Profile Name or Photo');
            })
            .catch(error => {
                console.log(error);
            })
        })
        .catch(error => console.log(error))
    }
    return (
        <div>
            <Header></Header>
            <div className="hero min-h-screen">
                <div className="card flex-shrink-0 w-full max-w-lg border rounded-lg mt-10">
                    <div className="card-body mt-5">
                        <h1 className="text-4xl font-bold text-[#14191E] text-center">Please Register!</h1>

                        <form onSubmit={handleRegister}>
                            <div className="form-control mt-5">
                                <label className="label">
                                    <span className="label-text text-xl font-semibold text-[#14191E]">Name</span>
                                </label>
                                <input type="text" placeholder="Enter Name....." name='name' className="border px-2 py-2 bg-white text-lg font-normal text-[#14191E] rounded-lg" />
                            </div>
                            <div className="form-control mt-5">
                                <label className="label">
                                    <span className="label-text text-xl font-semibold text-[#14191E]">Photo</span>
                                </label>
                                <input type="text" placeholder="Photo Url....." name='photo' className="border px-2 py-2 bg-white text-lg font-normal text-[#14191E] rounded-lg" />
                            </div>
                            <div className="form-control mt-5">
                                <label className="label">
                                    <span className="label-text text-xl font-semibold text-[#14191E]">Email</span>
                                </label>
                                <input type="email" placeholder="Enter email....." name='email' className="border px-2 py-2 bg-white text-lg font-normal text-[#14191E] rounded-lg" required />
                            </div>

                            <div className="relative">
                                <div className="form-control mt-4">
                                    <label className="label">
                                        <span className="label-text text-xl font-semibold text-[#14191E]">Password</span>
                                    </label>
                                    <input type={showPassword ? 'text' : 'password'} placeholder="Enter Password....." name='password' className="border px-2 py-2 bg-white text-lg font-normal text-[#14191E] rounded-lg" required />

                                    <span onClick={() => setShowPassword(!showPassword)} className="text-sm font-bold text-[#14191E] absolute top-14 right-3 cursor-pointer">
                                        {
                                            showPassword ? <FaEye className="text-3xl" /> : <FaEyeSlash className="text-3xl" />
                                        }
                                    </span>
                                </div>
                            </div>

                            <div className="mt-5">
                                <input type="checkbox" name="terms" id="terms" />
                                <label className="ml-2 bg-white text-sm font-normal text-[#14191E]" htmlFor="terms">Accept Our <a className="text-[#D7403A]" href="">Terms and Condition</a></label>
                            </div>

                            <div className="form-control mt-10">
                                <input className=" bg-[#D7403A] px-4 py-3 font-semibold rounded-lg text-white cursor-pointer" type="submit" value="Register Now" />

                            </div>
                        </form>

                    </div>

                    <div className="text-center mb-20">
                        {
                            registerError && <p className="text-[#ff1111] text-xl font-semibold">{registerError}</p>
                        }
                        {
                            success && <p className="text-[#11ff5c] text-xl font-semibold">{success}</p>
                        }
                    </div>

                    <div className='text-center'>
                        <p className="text-lg font-semibold text-[#14191E] mb-5">Already have an account? <Link to={'/login'} className='text-[#FF3811]'>Login</Link> </p>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Register;