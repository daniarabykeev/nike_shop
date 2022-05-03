import React from "react";
import { Select, Slider } from "antd";
import { nikeCollection } from "../Collection/CollectionDB";

const Filters = ({ model, setModel, price, setPrice }) => {
  return (
    <div style={{ marginTop: "30px", display: "flex" }}>
      <Select
        value={model}
        onChange={(e) => setModel(e)}
        placeholder="Filter by brand"
        style={{ width: "25vw", marginLeft: "50px" }}
        allowClear
        mode="multiple"
      >
        {nikeCollection.map((item) => (
          <Select.Option key={item.id} value={item.model}>
            {item.model}
          </Select.Option>
        ))}
      </Select>
      <Slider
        style={{ width: "25vw", marginTop: "10px", marginLeft: "50px" }}
        value={price}
        onChange={(e) => setPrice(e)}
        defaultValue={[1, 1000]}
        min={0}
        max={1000}
        step={10}
        range
      />
    </div>
  );
};
export default Filters;
