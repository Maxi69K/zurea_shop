import React, { useEffect, useState } from 'react';
import { GetAllProducts, SearchProducts } from '../../services/product.service';
import ProductListItemComponent from './components/ProductListItem.Component';
//import { useSearchParams } from 'react-router-dom'; // new hook for query params *************************************
import { useParams } from 'react-router-dom'; // for url params

const ProductListComponent = () => {
  const [productList, setProductList] = useState([]);
  const [errMsg, setErrMsg] = useState();
  const params = useParams(); // for url params
  //const [queryParams] = useSearchParams(); // new hook for query params

  useEffect(() => {
    //console.log('params...', params.searchParams); // only for url params
    setProductList([]);
    setErrMsg('');
    if (!params.searchParams) {
      GetAllProducts()
        .then((data) => {
          //console.log(data.data);
          setProductList(data.data);
        })
        .catch((err) => {
          console.log(err);
          setErrMsg(err.message);
        });
    } else {
      SearchProducts(params.searchParams.replaceAll('-', ' ')) // returns a string without a dash**
        .then((res) => {
          console.log(res);
          if (res.status === 209) {
            return setErrMsg(
              `No products for key: ${params.searchParams.replaceAll('-', ' ')}`
            );
          }
          setProductList(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    
  }, [params])

  //  useEffect(() => {
  //    console.log('queryParams...', queryParams.get('search')); // for query params
  //  }, [queryParams]);

  useEffect(() => {
    
  }, []);

  const renderProductListView = () => {
    if (productList.length) {
      return productList.map((item, index) => {
        return <ProductListItemComponent key={item._id+'_'+index} item={item} />;
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
