import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

const Products = () => {
  const [products, setProducts] = useState([]);
  

  useEffect(() => {
    axios.get('http://localhost:8000/products')
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, []);

  return (
    <div>
      <section className="bg-purple-50 pt-10 pb-10 lg:pt-[50px] lg:pb-20">
        <div>
          <h2 className="text-3xl font-bold tracki text-center sm:text-5xl">Vape/E-cigaretter</h2>
          <p className="max-w-3xl mx-auto mt-4 text-xl text-center">Ett brett sortiment av Stockholms bästa Vapes!</p>
        </div>
        <br />
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            {products.map((product) => (
              <div key={product._id} className="w-full px-4 md:w-1/2 xl:w-1/3">
                <div className="mb-10 overflow-hidden rounded-lg bg-white">
                  <img
                     src={`/image/APPLE`}
                    alt={product.name}
                    className="w-full"
                  />
                  <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
                    <h3>
                      <Link
                        to={`/productdetail/${product._id}`} // Länka till rätt produktens detaljsida
                        className="text-dark hover:text-primary mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
                      >
                        {product.name}
                      </Link>
                    </h3>
                    <p className="text-body-color mb-7 text-base leading-relaxed">
                      {product.price} kr
                    </p>
                    <Link
                      to={`/productdetail/${product._id}`} // Uppdaterad länk till produktinformationssidan
                      className="bg-purple-700 inline-flex items-center justify-center rounded-lg py-4 px-6 text-center text-base font-normal text-white hover:bg-purple-500 sm:px-10 lg:px-8 xl:px-10"
                    >
                      Välj alternativ
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Products;
