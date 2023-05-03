import React from "react";
import { Link } from "react-router-dom";

const Registration = () => {
  return (
    <div className=" min-h-screen bg-base-200">
      <div className="hero-content ">
        <div className="card w-full lg:w-1/2 shadow-2xl bg-base-100">
          <div className="card-body">
            <h3 className="text-2xl text-secondary mb-10">Create an Account</h3>
            <form>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name(optional)</span>
                </label>
                <input
                  type="name"
                  placeholder="name"
                  className="input input-bordered"
                  name="name"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email <sup className="text-secondary text-lg">*</sup></span>
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
                  <span className="label-text">Password <sup className="text-secondary text-lg">*</sup></span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  name="password"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">PhotoUrl(optional)</span>
                </label>
                <input
                  type="text"
                  placeholder="photo url"
                  className="input input-bordered"
                  name="photoUrl"
                />
              </div>
              <div className="form-control mt-6">
                <button
                  type="submit"
                  className="btn btn-primary"
                >
                  Sign up
                </button>
              </div>
              <div className="mt-6">
                <p>
                  Already have an Account?
                  <Link
                    className="text-secondary"
                    to="/login"
                  >
                    {" "}
                    Login
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

export default Registration;
