'use client';

import React,{useState,useEffect} from 'react'
import Link from 'next/link'
import { ProductType } from '@/data';
import { getProducts } from '@/actions/ProductAction';

const Products = () => {
  const [productList, setProductList] = useState<ProductType[] | []>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const {products} = await getProducts();
      setProductList(products);
      
    };
    fetchProducts();
  }, []);

  return (
      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 xl:mt-12 xl:grid-cols-3 xl:gap-16">
        {/* <div className="space-y-3"></div> */}
        {
          productList && productList.map((product,index) => (            
        <div key={index} className="w-[300px] rounded-md border">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="h-[200px] w-full rounded-t-md object-cover"
          />
          <div className="p-4">
            <h1 className="inline-flex items-center text-lg font-semibold">
              About Macbook  {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </h1>
            <p className="mt-3 text-sm text-gray-600">
              {product.description}
            </p>
            <div className="mt-4">
              {
                product.tags.map((tag,i) =>(                  
              <span key={i} className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                #{tag}
              </span>
                ))
              }
            </div>
            <Link
            href={{
              pathname: `/product/${product._id}`,
              query: { product: product._id },
          }}
              className="mt-4 w-full rounded-sm bg-green-600 px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-green-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-300"
            >
              Details
              </Link><br />
            <Link
             href={{
              pathname: `/user-profile/cart/123`,
              query: { userId: '123'},
          }}
              className="mt-4 w-full rounded-sm bg-green-600 px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-green-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-300"
            >
              Add to Cart
            </Link>
          </div>
        </div>
          ))
        }
      </div>
  )
}

export default Products