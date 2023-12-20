import React from "react";
import { Link } from "react-router-dom";

const Products = ({ product }) => {
  const { id, title, price, image } = product;
  return (
    <div className="border p-2">
      <Link
        to={`/products/${id}`}
        className="group relative mb-2 block h-80 overflow-hidden rounded-lg bg-gray-100 lg:mb-3 "
      >
        <img
          src={image}
          loading="lazy"
          alt={title}
          className="w-full h-full overflow-hidden transition duration-200  group-hover:scale-110"
        />

        <span className="absolute left-0 top-0 rounded-br-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white">
          sale
        </span>
      </Link>

      <div>
        <Link
          to="/"
          className="hover:gray-800 mb-1 text-gray-500 transition duration-100 lg:text-lg"
        >
          {title}
        </Link>
        <div className="flex items-end gap-2">
          <span className="font-bold text-gray-800 lg:text-lg">$ {price}</span>
        </div>
      </div>
    </div>
  );
};

export default Products;
