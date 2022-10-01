import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "../untils/style.css";
import "../untils/animate.min.css";
import "../untils/carousel.css";
export default function Header() {
  const [categories, setCategories] = useState([]);

  const getCategories = () => {
    axios.get("http://localhost:8080/category/getAll").then((response) => {
      setCategories(response.data);
    });
  };

  useEffect(() => {
    getCategories();
  }, []);

  function renderCategory() {
    return categories.map((category) => {
      return (
        <a href="" className="nav-item nav-link">
          {category.name}
        </a>
      );
    });
  }
  return (
    <div>
      <div className="container-fluid bg-dark mb-30">
        <div className="row px-xl-5">
          <div className="col-lg-3 d-none d-lg-block">
            <a
              className="btn d-flex align-items-center justify-content-between bg-primary w-100"
              data-toggle="collapse"
              href="#navbar-vertical"
              style={{ height: "65px", padding: " 0 30px" }}
            >
              <h6 className="text-dark m-0">
                <i className="fa fa-bars mr-2"></i>Danh mục
              </h6>
              <i className="fa fa-angle-down text-dark"></i>
            </a>
            <nav
              className="collapse position-absolute navbar navbar-vertical navbar-light align-items-start p-0 bg-light"
              id="navbar-vertical"
            >
              <div className="navbar-nav w-100">
                {renderCategory()}
              </div>
            </nav>
          </div>
          <div className="col-lg-9">
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 py-lg-0 px-0">
              <a href="" className="text-decoration-none d-block d-lg-none">
                <span className="h1 text-uppercase text-dark bg-light px-2">
                  405
                </span>
                <span className="h1 text-uppercase text-light bg-primary px-2 ml-n1">
                  Shop
                </span>
              </a>
              <button
                type="button"
                className="navbar-toggler"
                data-toggle="collapse"
                data-target="#navbarCollapse"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse justify-content-between"
                id="navbarCollapse"
              >
                <div className="navbar-nav mr-auto py-0">
                  <a href="trangchu.html" className="nav-item nav-link ">
                    Trang chủ
                  </a>
                  <a href="dssanpham.html" className="nav-item nav-link">
                    Sản phẩm
                  </a>
                  <a href="dshoadon.html" className="nav-item nav-link">
                    Lịch sử đơn hàng
                  </a>
                  <a href="lienhe.html" className="nav-item nav-link">
                    Liên Hệ
                  </a>
                </div>
                <div className="navbar-nav ml-auto py-0 d-none d-lg-block">
                  <a href="giohang.html" className="btn px-0 ml-3">
                    <i className="fas fa-shopping-cart text-primary"></i>
                    <span
                      className="badge text-secondary border border-secondary rounded-circle"
                      style={{ paddingBottom: "2px" }}
                    >
                      0
                    </span>
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
