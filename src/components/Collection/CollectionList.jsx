import { Input, Pagination } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { contextProducts } from "../../context/contextProducts";
import Filters from "../Filters/Filters";
import CollectionCard from "./CollectionCard";

const CollectionList = () => {
  const { getProducts, products, productsCount } = useContext(contextProducts);
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchValue, setSearchValue] = useState(
    searchParams.get("q") ? searchParams.get("q") : ""
  );
  const [model, setModel] = useState([]);
  const [price, setPrice] = useState([1, 1000]);

  const [limit, setLimit] = useState(6);
  const [page, setPage] = useState(1);

  //
  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    setSearchParams({
      q: searchValue,
      _page: page,
      _limit: limit,
      model: model,
      price_gte: price[0],
      price_lte: price[1],
    });
  }, [searchValue, model, price, page, limit]);
  console.log(products);
  useEffect(() => {
    getProducts();
  }, [searchParams]);

  // console.log(products, productsCount);

  return (
    <div className="container">
      <div style={{ display: "flex" }}>
        <Input.Search
          placeholder="Search..."
          style={{ width: "25vw", marginTop: "30px" }}
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <Filters
          model={model}
          setModel={setModel}
          price={price}
          setPrice={setPrice}
        />
      </div>

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
            <CollectionCard key={item.id} item={item} />
          </div>
        ))}
        <div
          className="container"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Pagination
            total={+productsCount}
            current={+page}
            pageSize={+limit}
            defaultCurrent={1}
            onChange={(page, limit) => {
              setPage(page);
              setLimit(limit);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default CollectionList;
