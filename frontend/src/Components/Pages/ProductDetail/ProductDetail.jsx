import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../../Navigation/Navbar";
import Footer from "../../Footer/Footer";
import { Link } from "react-router-dom";

function ProductDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:8000/products/${productId}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [productId]);

  return (
    <div>
      <Navbar />
      <div className="max-w-screen font-poppins overflow-hidden ">
        <section className="relative z-10 py-20 ">
          <div className="container mx-auto">
            <div className="-mx-4 flex flex-wrap">
              <div className="w-full px-4">
                <div className="relative mx-auto max-w-[525px] overflow-hidden rounded-lg bg-white py-16 px-10 text-center sm:px-12 md:px-[60px]">
                  <div className="mb-10 text-center md:mb-16">
                    <h2 className="text-black mb-6 text-[32px] font-bold uppercase sm:text-[40px] lg:text-[36px] xl:text-[40px]">
                      {product.productName}
                    </h2>
                    <p>{product.image}</p>
                    <p>Smak: {product.flavor}</p>
                    <p>Pris: {product.price}</p>
                    <p>Beskrivning: {product.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Link
            to="/ShoppingCart" // Uppdaterad länk till produktinformationssidan
            className="bg-purple-700 inline-flex items-center justify-center rounded-lg py-4 px-6 text-center text-base font-normal text-white hover:bg-purple-500 sm:px-10 lg:px-8 xl:px-10">
            Lägg i varukorg
          </Link>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default ProductDetail;
