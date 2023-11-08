import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function ProductDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:8000/api/products/${productId}`) // Anpassa URL:en för ditt API
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [productId]);

  return (
    <div>
      <h2>Produktdetaljer</h2>
      <p>Namn: {product.name}</p>
      <p>Beskrivning: {product.description}</p>
      {/* Visa andra produktinformation */}
    </div>
  );
}

export default ProductDetail;
