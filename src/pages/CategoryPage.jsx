import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "../components/products.css";
import NavBarAdmin from "../components/NavBarAdmin";
import axios from "axios";

export default function CategoryPage() {
  const [category, setCategory] = useState({});
  function addCategory() {
    return async () => {
      let formData = new FormData();
      formData.append("name", category.name);
      const res = await axios({
        method: "post",
        url: "http://localhost:8080/category/Save",
        data: formData,
      }).catch((err) => {
        console.log(err);
      });
      console.log(res);
    };
  }

  return (
    <div>
      <NavBarAdmin></NavBarAdmin>
      <div className="container">
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Tên sản phẩm</Form.Label>
            <Form.Control
              type="text"
              placeholder="Tên sản phẩm"
              onChange={(e) => {
                const { value } = e.target;
                setCategory({ name: value });
              }}
            />
          </Form.Group>
          <Button variant="primary" onClick={addCategory()}>
            Thêm
          </Button>
        </Form>
      </div>
    </div>
  );
}
