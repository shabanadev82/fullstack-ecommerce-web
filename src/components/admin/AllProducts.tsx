'use client';

import { getProducts } from "@/actions/ProductAction";
import { ProductType } from "@/data";
import Link from "next/link";
import { useEffect, useState } from "react";

const AllProducts = () => {
  const [productList, setProductList] = useState<ProductType[] | []>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const {products} = await getProducts();
      setProductList(products);
      console.log(products);
      
    };
    fetchProducts();
  }, []);

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-4">
  <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
    <div>
      <h2 className="text-lg font-semibold">Employees</h2>
      <p className="mt-1 text-sm text-gray-700">
        This is a list of all employees. You can add new employees, edit or
        delete existing ones.
      </p>
    </div>
    <div>
      <button
        type="button"
        className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        Add new product
      </button>
    </div>
  </div>
  <div className="mt-6 flex flex-col">
    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
        <div className="overflow-hidden border border-gray-200 md:rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                >
                  <span>Product</span>
                </th>
                <th
                  scope="col"
                  className="px-12 py-3.5 text-left text-sm font-normal text-gray-700"
                >
                  Details
                </th>
                <th
                  scope="col"
                  className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                >
                  Stock
                </th>
                <th
                  scope="col"
                  className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                >
                  Tags
                </th>
                <th scope="col" className="relative px-4 py-3.5">
                  action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {
                productList && productList.map((product,index) =>(
              <tr key={index}>
                <td className="whitespace-nowrap px-4 py-4">
                  <div className="flex items-center">
                    <div className="h-10 w-10 flex-shrink-0">
                      <img
                        className="h-10 w-10 rounded-full object-cover"
                        src={product.thumbnail}
                        alt={product.title}
                      />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">
                        {product.title}
                      </div>
                      <div className="text-sm text-gray-700 font-bold">{product.brand}</div>
                    </div>
                  </div>
                </td>
                <td className="whitespace-nowrap px-12 py-4">
                  <div className="text-sm text-gray-900 ">{product.category}</div>
                  <div className="text-sm text-gray-700">${product.price}</div>
                </td>
                <td className="whitespace-nowrap px-4 py-4">
                  <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                    {product.stock}
                  </span>
                </td>
                <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                  {
                    product.tags.map((tag,i) =>(
                      <span key={i} className="mx-1">{tag}</span>
                    ))
                  }
                </td>
                <td className="whitespace-nowrap px-4 py-4 text-right text-sm font-medium">
                  <button className="text-green-700">
                    Edit
                  </button>
                  /
                  <button className="text-red-700">
                    Delete
                  </button>
                </td>
              </tr>
                  ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</section>

  );
}

export default AllProducts;
