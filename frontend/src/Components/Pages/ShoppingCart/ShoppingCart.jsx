import axios from "axios";
import Navbar from "../../Navigation/Navbar";
import Footer from "../../Footer/Footer";
import { Link } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../context/userContext";

const ShoppingCart = () => {
  const { user } = useContext(UserContext);
  const [products, setProducts] = useState([]);
  const [newQuantityToUpdate, setNewQuantityToUpdate] = useState(() => {
    const storedQuantity = localStorage.getItem("newQuantityToUpdate");
    return storedQuantity ? parseInt(storedQuantity, 10) : 0;
  });

  const removeFromCart = (productId) => {
    axios
      .delete(
        `https://vapehouse-service-camilla.onrender.com/cart/${productId}/${user._id}`
      )
      .then((response) => {
        console.log("Response data after deletion:", response.data);

        setProducts((prevProducts) =>
          prevProducts.filter(
            (product) => product.productInfo._id !== productId
          )
        );
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const updateQuantity = (productId, newQuantity) => {
    axios
      .put(`https://vapehouse-service-camilla.onrender.com/cart/${user._id}`, {
        quantity: newQuantity,
      })
      .then((response) => {
        console.log("Response data after quantity update:", response.data);

        setProducts((prevProducts) =>
          prevProducts.map((product) =>
            product.productInfo._id === productId
              ? { ...product, quantity: newQuantity }
              : product
          )
        );
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    if (user && user._id) {
      axios
        .get(`https://vapehouse-service-camilla.onrender.com/cart/${user._id}`)
        .then((response) => {
          console.log(response.data);
          setProducts(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [user]);

  useEffect(() => {
    if (user && user._id) {
      const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
      setProducts(storedCart);
    }
  }, [user]);

  const handleUpdateClick = async (productId, newQuantity) => {
    try {
      await updateQuantity(productId, newQuantity);

      setProducts((prevProducts) => {
        const updatedProducts = prevProducts.map((product) =>
          product.productInfo._id === productId
            ? { ...product, quantity: newQuantity }
            : product
        );

        localStorage.setItem("cart", JSON.stringify(updatedProducts));

        return updatedProducts;
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="max-w-screen font-poppins overflow-hidden ">
        <section className="relative z-10 bg-white py-20 sm:px-20 sm:py-40">
          {products.length >= 0 && (
            <div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10">
              <h2 className="text-xl font-semibold">Varukorg</h2>
              <ul className="flex flex-col divide-y divide-gray-700">
                {products.map((product) => (
                  <li
                    key={product._id}
                    className="flex flex-col py-6 sm:flex-row sm:justify-between">
                    <div className="flex w-full space-x-2 sm:space-x-4">
                      {/* <img
                        src={`/images/${product.productName.toLowerCase()}.jpeg`}
                        alt={product.productName}
                        className="w-full"
                      /> */}

                      <div className="flex flex-col justify-between w-full pb-4">
                        <div className="flex justify-between w-full pb-2 space-x-2">
                          <div className="space-y-1">
                            <h3 className="text-lg font-semibold leadi sm:pr-8">
                              {product.productInfo &&
                                product.productInfo.productName}
                            </h3>
                            <p className="text-sm">
                              {product.productInfo &&
                                product.productInfo.flavor}
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="text-lg font-semibold">
                              {product.productInfo && product.productInfo.price}
                              kr
                            </p>
                          </div>
                        </div>
                        <div className="flex text-sm divide-x">
                          <button
                            type="button"
                            className="flex items-center px-2 py-1 pl-0 space-x-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                              className="w-4 h-4 fill-current">
                              <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                              <rect
                                width="32"
                                height="200"
                                x="168"
                                y="216"></rect>
                              <rect
                                width="32"
                                height="200"
                                x="240"
                                y="216"></rect>
                              <rect
                                width="32"
                                height="200"
                                x="312"
                                y="216"></rect>
                              <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
                            </svg>
                            <span
                              onClick={() => {
                                removeFromCart(product.productInfo._id);
                              }}>
                              Remove
                            </span>
                          </button>
                          <div className="flex items-center px-2 py-1 space-x-1">
                            <span>Quantity:</span>
                            <input
                              className="border border-black"
                              type="number"
                              value={newQuantityToUpdate}
                              onChange={(e) =>
                                setNewQuantityToUpdate(
                                  parseInt(e.target.value, 10)
                                )
                              }
                            />

                            <button
                              type="button"
                              className="bg-purple-700 text-white px-2 py-1 rounded"
                              onClick={() =>
                                handleUpdateClick(
                                  product.productInfo._id,
                                  newQuantityToUpdate
                                )
                              }>
                              Uppdatera
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="flex justify-end space-x-4">
                <Link
                  to="/"
                  className="px-6 py-2 border rounded-md border-purple-500">
                  Fortsätt shoppa
                </Link>
                <Link
                  to="/delivery"
                  className="px-6 py-2 border rounded-md bg-purple-800 hover:bg-purple-500 text-white">
                  <span className="sr-only sm:not-sr-only">Till kassan</span>
                </Link>
              </div>
            </div>
          )}
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default ShoppingCart;
