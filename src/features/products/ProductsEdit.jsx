import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { updateProducts } from "./productsSlice";

export default function ProductsEdit({ modalData ,oncloseMode }) {
    const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

 
  useEffect(() => {
    if (modalData) {
      reset({
        name: modalData.name,
        price: modalData.price,
        category: modalData.category,
      });
    }
  }, [modalData, reset]);

  const onSubmit = (data) => {
    const updatedProduct = {
      ...modalData,
      name: data.name,
      price: Number(data.price),
      category: data.category,
    };
    oncloseMode()
    dispatch(updateProducts({id:updatedProduct.id, product: updatedProduct}));
  };

  if (!modalData) return null; 

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4 text-center">Edit Product</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        {/* Name */}
        <input
          type="text"
          placeholder="Product Name"
          {...register("name", { required: "Name is required" })}
          className="input input-bordered w-full"
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}

        {/* Price */}
        <input
          type="number"
          placeholder="Price"
          {...register("price", { required: "Price is required", min: 1 })}
          className="input input-bordered w-full"
        />
        {errors.price && <p className="text-red-500 text-sm">{errors.price.message}</p>}

        {/* Category */}
        <input
          type="text"
          placeholder="Category"
          {...register("category", { required: "Category is required" })}
          className="input input-bordered w-full"
        />
        {errors.category && <p className="text-red-500 text-sm">{errors.category.message}</p>}

        {/* Submit */}
        <button type="submit" className="btn btn-primary mt-2">
          Update Product
        </button>
      </form>
    </div>
  );
}
