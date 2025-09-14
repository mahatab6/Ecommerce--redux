import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProducts, fetchProducts } from "./productsSlice";
import Loading from "../../pages/Loading";
import ErrorPage from "../../pages/ErrorPage";
import ProductsForm from "./ProductsForm";

export default function ProductsView() {
  const { products, isLoading, error } = useSelector(
    (store) => store.productsR
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorPage />;
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
        {products.map((item) => (
          <div
            key={item.id}
            className="card w-72 bg-base-100 shadow-xl border hover:shadow-2xl transition"
          >
            <div className="card-body">
              <h2 className="card-title text-lg font-bold text-gray-800">
                {item.name}
                <div className="badge badge-secondary">{item.category}</div>
              </h2>
              <p className="text-blue-600 font-semibold">${item.price}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary btn-sm">Buy Now</button>
                <button
                  onClick={() => dispatch(deleteProducts(item.id))}
                  className="btn btn-outline btn-sm"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>
        <ProductsForm />
      </div>
    </>
  );
}
