import React, { useState } from "react";
export default function Header() {
  const [Kw, setKw] = useState([]);
  console.log(Kw);
  return (
    <>
      <div className="container-fluid">
        <div className="row align-items-center bg-light py-3 px-xl-5 d-none d-lg-flex">
          <div className="col-lg-4">
            <a href="/" className="text-decoration-none">
              <span className="h1 text-uppercase text-primary bg-dark px-2">
                Gear
              </span>
              <span className="h1 text-uppercase text-dark bg-primary px-2 ml-n1">
                Shop
              </span>
            </a>
          </div>
          <div className="col-lg-4 col-6 text-left">
            <form action="">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Tìm kiếm"
                  onChange={(e) => {
                    const { name, value } = e.target;
                    setKw({ ...Kw, [name]: value });
                  }}
                />
                <div className="input-group-append" onClick={() => {}}>
                  <span className="input-group-text bg-transparent text-primary">
                    <a href="#">
                      <i className="fa fa-search"></i>
                    </a>
                  </span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
