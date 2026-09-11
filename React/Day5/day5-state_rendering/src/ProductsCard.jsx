import React from "react";

const ProductsCard = ({ product, del }) => {
//   console.log(product);

  return (
    <div className="p-4 border-2 rounded h-fit flex flex-col gap-4">
      <div className="w-40 h-65 ">
        <img src={product.image} alt="img" />
      </div>
      <div>
        <h2 className="font-semibold">{product.title.substring(0, 20)} </h2>
        <p className="text-xs">{product.category}</p>
        <p className="text-green-600">$ {product.price}</p>
      </div>
      <button onClick={()=> del(product.id)} className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 cursor-pointer">
        Delete
      </button>
    </div>
  );
};

export default ProductsCard;
