import React, { useEffect, useState } from 'react';
import { GetAllProducts } from '../../services/product.service';
import ProductListItemComponent from './components/ProductListItem.Component';

const ProductListComponent = () => {
  const [productList, setProductList] = useState([]);
  const [errMsg, setErrMsg] = useState();

  useEffect(() => {
    GetAllProducts()
      .then((data) => {
        console.log(data.data);
        setProductList(data.data);
      })
      .catch((err) => {
        console.log(err);
        setErrMsg(err.message);
      });
  }, []);

  const renderProductListView = () => {
    if (productList.length) {
      return productList.map((item, index) => {
        return <ProductListItemComponent item={item} index={index} />;
      });
    }
    return <h2>No products.</h2>;
  };

  return (
    <>
      {errMsg ? <p className="text-danger m-3">{errMsg}</p> : null}
      {renderProductListView()}
    </>
  );
};

export default ProductListComponent;
