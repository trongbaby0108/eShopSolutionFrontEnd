import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { priceFormatter } from "../untils/format";
import { Carousel } from "react-bootstrap";
import "../untils/style.css";
import "../untils/animate.min.css";
import "../untils/carousel.css";

export default function DetailProduct() {
  const [product, setProduct] = useState([]);
  const [amount, setAmount] = useState(0);
  const [index, setIndex] = useState(0);
  const [productCart, setProductCart] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  let { id } = useParams();
  const getProduct = async () => {
    const res = await axios.get("http://localhost:8080/product/getById", {
      params: { id },
    });
    setProduct(res.data);
  };
  useEffect(() => {
    getProduct();
  }, []);
  return (
    <div>
      <div className="container-fluid">
        <div className="row px-xl-5">
          <div className="col-12">
            <nav className="breadcrumb bg-light mb-30">
              <a className="breadcrumb-item text-dark" href="#">
                Trang chủ
              </a>
              <a className="breadcrumb-item text-dark" href="/">
                Sản phẩm
              </a>
              <a className="breadcrumb-item text-dark" href="">
                {product.name}
              </a>
            </nav>
          </div>
        </div>
      </div>
      <div className="container-fluid pb-5">
        <div className="row px-xl-5">
          <div className="col-lg-5 mb-30  ">
            <Carousel activeIndex={index} onSelect={handleSelect}>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={product.img}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={product.img}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={product.img}
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
          </div>

          <div className="col-lg-7 h-auto mb-30">
            <div className="h-100 bg-light p-30">
              <h3>{product.name}</h3>
              <h3 className="font-weight-semi-bold mb-4">
                {priceFormatter(product.price)}
              </h3>
              <p className="mb-4">{product.description}</p>

              <div className="d-flex align-items-center mb-4 pt-2">
                <div
                  className="input-group quantity mr-3"
                  style={{ width: "130px" }}
                >
                  <div className="input-group-btn">
                    <button
                      className="btn btn-primary btn-minus"
                      onClick={() => {
                        if (amount > 0) setAmount(amount - 1);
                      }}
                    >
                      <i className="fa fa-minus"></i>
                    </button>
                  </div>
                  <input
                    type="text"
                    className="form-control bg-secondary border-0 text-center"
                    value={amount}
                  />
                  <div className="input-group-btn">
                    <button
                      className="btn btn-primary btn-plus"
                      onClick={() => {
                        setAmount(amount + 1);
                      }}
                    >
                      <i className="fa fa-plus"></i>
                    </button>
                  </div>
                </div>
                <button
                  className="btn btn-primary px-3"
                  onClick={() => {
                    const res = localStorage.getItem(product.name);
                    setProductCart(parseInt(res)+parseInt(amount));
                    console.log(productCart);
                    localStorage.setItem(product.name, amount );
                  }}
                >
                  <i className="fa fa-shopping-cart mr-1"></i> Thêm vào giỏ hàng
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
