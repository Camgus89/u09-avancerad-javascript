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

  const addToCart = () => {
    // Skicka en POST-förfrågan för att lägga till produkten i varukorgen
    axios.post(`http://localhost:8000/cart`, { productId: product.id })
      .then((response) => {
        // Handla om det gick bra, t.ex. visa en bekräftelse
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <Navbar />
      <div className="max-w-screen font-poppins overflow-hidden">
        <section className="relative z-10 py-20">
          <div className="container mx-auto">
            <div className="flex flex-wrap">
              <div className="w-full md:w-1/2 px-4">
                {" "}
                {/* Dela sidan i två kolumner */}
                <div className="max-w-[525px] overflow-hidden rounded-lg bg-white">
                  <img
                    src={product.image} // Använd produktens bild
                    alt={product.productName} // Använd produktens namn
                    className="w-full" // Gör bilden fullbredd
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 px-4">
                <div className="py-16 px-10 text-center sm:px-12 md:px-[60px]">
                  <h2 className="text-black mb-6 text-[32px] font-bold uppercase sm:text-[40px] lg:text-[36px] xl:text-[40px]">
                    {product.productName}
                  </h2>
                  <p className="text-left">
                    Beskrivning: {product.description}
                  </p>
                  <p>Smak: {product.flavor}</p>
                  <p className="font-bold">{product.price}kr</p>

                  <Link
                    to="/ShoppingCart"
                    onClick={addToCart} // Anropa funktionen för att lägga till i varukorg
                    className="bg-purple-700 inline-flex items-center justify-center rounded-lg py-4 px-6 text-center text-base font-normal text-white hover:bg-purple-500 sm:px-10 lg:px-8 xl:px-10">
                    Lägg i varukorg
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default ProductDetail;
