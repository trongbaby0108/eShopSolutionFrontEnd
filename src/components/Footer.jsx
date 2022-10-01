import React from 'react'

export default function 
() {
  return (
    <div>
        <div className="container-fluid bg-dark text-secondary mt-5 pt-5">
        <div className="row px-xl-5 pt-5">
            <div className="col-lg-4 col-md-12 mb-5 pr-3 pr-xl-5">
                <h5 className="text-secondary text-uppercase mb-4">405 SHOP</h5>
                <p className="mb-4">
                    Nhà phân phối độc quyền các thương hiệu Filco - Glorious - Pulsar - Realforce - Spyder</p>
                <p className="mb-2"><i className="fa fa-map-marker-alt text-primary mr-3"></i>XA LỘ HÀ NỘI, TP HỒ CHÍ MINH</p>
                <p className="mb-2"><i className="fa fa-envelope text-primary mr-3"></i>405@GMAIL.com</p>
                <p className="mb-0"><i className="fa fa-phone-alt text-primary mr-3"></i>+8412 345 67890</p>
            </div>
            <div className="col-lg-8 col-md-12">
                <div className="row">
                    <div className="col-md-4 mb-5">
                        <h5 className="text-secondary text-uppercase mb-4">405 Shop</h5>
                        <div className="d-flex flex-column justify-content-start">
                            <a className="text-secondary mb-2" href="trangchu.html"><i className="fa fa-angle-right mr-2"></i>Trang chủ</a>
                            <a className="text-secondary mb-2" href="dssanpham.html"><i className="fa fa-angle-right mr-2"></i>Sản Phẩm</a>
                            <a className="text-secondary mb-2" href="dshoadon.html"><i className="fa fa-angle-right mr-2"></i>Đơn Hàng</a>
                            <a className="text-secondary mb-2" href="giohang.html"><i className="fa fa-angle-right mr-2"></i>Giỏ Hàng</a>
                            
                        </div>
                    </div>
                    
                    <div className="col-md-4 mb-5">
                        <h5 className="text-secondary text-uppercase mb-4">Liên Hệ</h5>
                        <p>Hãy để lại e-mail của bạn để chúng tôi có thể liên hệ sớm nhất</p>
                        <form action="">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Your Email Address"/>
                                <div className="input-group-append">
                                    <button className="btn btn-primary">Sign Up</button>
                                </div>
                            </div>
                        </form>
                        <h6 className="text-secondary text-uppercase mt-4 mb-3">Follow Us</h6>
                        <div className="d-flex">
                            <a className="btn btn-primary btn-square mr-2" href="#"><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-primary btn-square mr-2" href="#"><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-primary btn-square mr-2" href="#"><i className="fab fa-linkedin-in"></i></a>
                            <a className="btn btn-primary btn-square" href="#"><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    </div>
    </div>
  )
}
