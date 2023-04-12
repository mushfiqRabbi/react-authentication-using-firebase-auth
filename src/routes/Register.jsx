import React from "react";

export default function Register() {
  return (
    <>
      <div className="container col-md-6 my-5">
        <div className="card w-100">
          <div className="card-body">
            <div className="card-title text-center">
              <h1>Sign Up</h1>
            </div>
            <form className="">
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input type="text" id="email" className="form-control" />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input type="password" id="password" className="form-control" />
              </div>
              <div className="mb-3">
                <label htmlFor="re_password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  id="re_password"
                  className="form-control"
                />
              </div>
              <div className="container mt-4">
                <button className="btn btn-primary col-12">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
