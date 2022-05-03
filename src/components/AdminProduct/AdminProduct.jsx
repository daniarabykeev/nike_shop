import {
  DeleteOutlined,
  EditOutlined,
  EllipsisOutlined,
} from "@ant-design/icons";
import { Card, Tooltip } from "antd";
import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { contextProducts } from "../../context/contextProducts";
import AddProduct from "../AddProduct/Addproduct";

const AdminProduct = () => {
  const { getProducts, products, deleteProduct } = useContext(contextProducts);
  useEffect(() => {
    getProducts();
  }, []);
  console.log(products);
  return (
    <div className="container">
      <AddProduct />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          margin: "10px auto",
        }}
        className="container"
      >
        {products.map((item) => (
          <div key={item.id}>
            <Card
              style={{ width: 300 }}
              cover={<img alt="example" src={item.image1} />}
              actions={[
                <Tooltip placement="topLeft" title="Delete">
                  <DeleteOutlined
                    onClick={() => deleteProduct(item.id)}
                    key="setting"
                  />
                </Tooltip>,
                <Tooltip placement="topLeft" title="Edit">
                  <Link
                    style={{ borderBottom: "1px solid white" }}
                    to={`/edit/${item.id}`}
                  >
                    <EditOutlined key="edit" />
                  </Link>
                </Tooltip>,
                <Tooltip placement="topLeft" title="Details">
                  <Link
                    style={{ borderBottom: "1px solid white" }}
                    to={`/collection/${item.id}`}
                  >
                    <EllipsisOutlined key="ellipsis" />
                  </Link>
                </Tooltip>,
              ]}
            >
              <p>{item.model}</p>
              <p>{item.price}$</p>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminProduct;
