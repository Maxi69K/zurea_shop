import React from 'react';

const ProductListItemComponent = ({item, index}) => {
  return (
    <div key={item._id + '_' + index} className="card text-center p-2 ">
      <img
        src={item.imgUrl}
        className="card-img-top img-thumbnail img-fluid w-75 m-auto "
        alt={item.title}
      />
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-text">{item.description}</p>
        <button className="btn btn-sm btn-outline-primary m-1">
          Category: {item.category}
        </button>
        <button className="btn btn-sm btn-outline-primary m-1">
          Rating: {item.rating}
        </button>
        <button className="btn btn-sm btn-outline-primary m-1 mb-0">
          Price: {item.price}
        </button>
      </div>
    </div>
  );
};

export default ProductListItemComponent;
