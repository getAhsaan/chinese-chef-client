import React from "react";
import SocialLoginBtn from "../../components/SocialLoginBtn";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/hook";

const Login = () => {
  const { createNewUserWithGoogle } = useAuth();

  // handle google sign in
  const handleGoogleSignIn = () => {
    createNewUserWithGoogle()
      .then((userCredential) => {
        console.log(userCredential.user);
      })
      .catch((err) => console.log(err.message));
  };
  return (
    <div className=" min-h-screen bg-base-200">
      <div className="hero-content ">
        <div className="card w-full lg:w-1/2 shadow-2xl bg-base-100">
          <div className="card-body">
            <h3 className="text-2xl text-secondary mb-10">WelCome Back</h3>
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
            <form>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
