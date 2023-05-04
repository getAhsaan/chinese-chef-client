import React, { useState } from "react";
import SocialLoginBtn from "../../components/SocialLoginBtn";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/hook";
import { toast } from "react-toastify";

const Login = () => {
  const [err, setErr] = useState("");
  const navigate = useNavigate();

  const {
    createNewUserWithGoogle,
    createNewUserWithGithub,
    user,
    loginNewUser,
  } = useAuth();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  // handle google sign in
  const handleGoogleSignIn = () => {
    setErr("");
    createNewUserWithGoogle()
      .then((userCredential) => {
        console.log(userCredential.user);
        toast.success("login successful")
      })
      .catch((err) => setErr(err.message));
  };

  // handle github sign in
  const handleGithubSignIn = () => {
    setErr("");
    createNewUserWithGithub()
      .then((userCredential) => {
        console.log(userCredential.user);
        toast.success("login successful")
      })
      .catch((err) => setErr(err.message));
  };

  // handle login
  const handleLogin = (e) => {
    e.preventDefault();
    setErr("");

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    if (email && password) {
      loginNewUser(email, password)
        .then((result) => {
          console.log(result.user);
          toast.success("login successful")
          navigate(form);
        })
        .catch((err) => {
          setErr(err.message);
        });
    }
  };

  return (
    <div className=" min-h-screen bg-base-200">
      <div className="hero-content ">
        <div className="card w-full lg:w-1/2 shadow-2xl bg-base-100">
          <div className="card-body">
            <h3 className="text-2xl text-secondary mb-6">WelCome Back</h3>
            <h3 className="text-lg text-red-500">{err}</h3>

            <div className="flex justify-evenly">
              <div>
                <SocialLoginBtn
                  handleClick={handleGoogleSignIn}
                  icon={
                    <FcGoogle
                      size={20}
                      style={{ marginRight: "5px" }}
                    />
                  }
                >
                  Login with Google
                </SocialLoginBtn>
              </div>
              <div>
                <SocialLoginBtn
                  handleClick={handleGithubSignIn}
                  icon={
                    <FaGithub
                      size={20}
                      style={{ marginRight: "5px" }}
                    />
                  }
                >
                  Login with Github
                </SocialLoginBtn>
              </div>
            </div>
            <div className="flex justify-between items-center gap-8 my-10">
              <div className="w-full bg-slate-500 h-[2px]"></div>
              <div>or</div>
              <div className="w-full bg-slate-500 h-[2px]"></div>
            </div>
            <form onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  name="email"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  name="password"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button
                  type="submit"
                  className="btn btn-primary"
                >
                  Login
                </button>
              </div>
              <div className="mt-6">
                <p>
                  Don't have and account?
                  <Link
                    className="text-secondary"
                    to="/signUp"
                  >
                    {" "}
                    Sign up
                  </Link>
                </p>
              </div>
            </form>
            {user && <Navigate to={from} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
