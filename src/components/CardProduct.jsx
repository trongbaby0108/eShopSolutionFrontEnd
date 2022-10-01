import * as React from "react";
import { priceFormatter } from "../untils/format";

export default function MediaCard(props) {
  function getProductLink() {
    return "/product/" + product.id;
  }
  const product = props.product;
  return (
    <><div className="col-lg-3 col-md-4 col-sm-6 pb-1">
    <div className="product-item bg-light mb-4">
        <div className="product-img position-relative overflow-hidden">
            <img className="img-fluid w-100" src={product.img} alt=""/>
            <div className="product-action">
                <a className="btn btn-outline-dark btn-square" href="/"><i className="fa fa-shopping-cart"></i></a>
                <a className="btn btn-outline-dark btn-square" href="/"><i className="far fa-heart"></i></a>
                <a className="btn btn-outline-dark btn-square" href="/"><i className="fa fa-sync-alt"></i></a>
                <a className="btn btn-outline-dark btn-square" href={getProductLink()}><i className="fa fa-search"></i></a>
            </div>
        </div>
        <div className="text-center py-4">
            <a className="h6 text-decoration-none text-truncate" href="/">{product.name}</a>
            <div className="d-flex align-items-center justify-content-center mt-2">
                <h5>{priceFormatter(product.price)}</h5>
            </div>
            <div className="d-flex align-items-center justify-content-center mb-1">
                <small className="fa fa-star text-primary mr-1"></small>
                <small className="fa fa-star text-primary mr-1"></small>
                <small className="fa fa-star text-primary mr-1"></small>
                <small className="fa fa-star text-primary mr-1"></small>
                <small className="fa fa-star text-primary mr-1"></small>
                <small>(99)</small>
            </div>
        </div>
    </div>
</div>
    </>
  );
}
