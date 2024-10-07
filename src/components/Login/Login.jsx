import { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../authProviders/AuthProvider";

function Login() {
    const [loginError,setLoginError] = useState('');
    const navigate = useNavigate();
    const { signInUser, signInWithGoogle } = useContext(AuthContext);

    const handelLogin = e => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)
        // sign in user create
        signInUser(email, password)
            .then(result => {
                e.target.reset()
                navigate("/")
        console.log(result)
            })
            .catch(error => {
                setLoginError(error.message)
            console.log(error.message)
            })
    }
    const handelGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
            console.log(result.user)
            })
            .catch(error => {
            console.log(error.message)
        })
            
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handelLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                name="email"
                                type="email"
                                placeholder="Email"
                                className="input input-bordered"
                                required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                name="password"
                                type="password"
                                placeholder="Password"
                                className="input input-bordered"
                                required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <div
                            onClick={handelGoogleSignIn}
                            className="py-3 flex btn btn-ghost justify-center text-xl">
                            <FcGoogle/>
                        </div>
                        <span>Already have account? <Link to="/register" className="link link-info">please register</Link></span>
                        {
                            loginError &&
                            <p className="bg-red-200 p-2 text-red-700 my-2">{loginError}</p>
                        }
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
