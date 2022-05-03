import { Button, Form, InputNumber, Modal, Select } from "antd";
import React, { useContext, useState } from "react";
import { contextProducts } from "../../context/contextProducts";
import { data } from "../../helpers/data";

const AddProduct = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { createProduct } = useContext(contextProducts);

  function save(newProduct) {
    createProduct({
      ...newProduct,
      comment: [],
    });
    setIsModalVisible(false);
  }

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleSave = () => {
    setIsModalVisible(false);
  };
  return (
    <>
      <Button style={{ margin: "10px 0 0" }} type="primary" onClick={showModal}>
        Add product
      </Button>
      <Modal
        footer={null}
        title="Add products"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleSave}
      >
        <Form layout="vertical" name="basic" onFinish={save}>
          <Form.Item
            label="Brand"
            name="brand"
            rules={[
              {
                required: true,
                message: "Please input brand!",
              },
            ]}
          >
            <Select>
              {data.map((item) => (
                <Select.Option key={item.id} value={item.brand}>
                  {item.brand}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            label="Model"
            name="model"
            rules={[
              {
                required: true,
                message: "Please input model!",
              },
            ]}
          >
            <Select>
              {data.map((item) => (
                <Select.Option key={item.id} value={item.model}>
                  {item.model}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            label="Description"
            name="description"
            rules={[
              {
                required: true,
                message: "Please input descriptiom!",
              },
            ]}
          >
            <Select>
              {data.map((item) => (
                <Select.Option key={item.id} value={item.description}>
                  {item.description}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            label="Price"
            name="price"
            rules={[
              {
                required: true,
                message: "Please input price!",
              },
            ]}
          >
            <InputNumber min={1} style={{ width: "100%" }} />
          </Form.Item>
          <Form.Item
            label="Image 1"
            name="image1"
            rules={[
              {
                required: true,
                message: "Please input URL of image 1!",
              },
            ]}
          >
            <Select>
              {data.map((item) => (
                <Select.Option key={item.id} value={item.image1}>
                  {item.image1}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            label="Image 2"
            name="image2"
            rules={[
              {
                required: true,
                message: "Please input URL of image 2!",
              },
            ]}
          >
            <Select>
              {data.map((item) => (
                <Select.Option key={item.id} value={item.image2}>
                  {item.image2}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Add product
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default AddProduct;
