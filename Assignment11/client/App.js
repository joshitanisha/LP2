import React, { useEffect, useState } from 'react';

function App() {

  const [products, setProducts] = useState([]);

  useEffect(() => {

    fetch('http://YOUR_PUBLIC_IP:5000/api/products')

      .then((res) => res.json())

      .then((data) => setProducts(data));

  }, []);

  const buyProduct = (name) => {

    alert(`${name} purchased successfully`);

  };

  return (

    <div className="container">

      <h1>Cloud E-Commerce Store</h1>

      <div className="products">

        {products.map((product) => (

          <div className="card" key={product._id}>

            <img src={product.image} alt={product.name} />

            <h2>{product.name}</h2>

            <p>${product.price}</p>

            <button onClick={() => buyProduct(product.name)}>
              Buy Now
            </button>

          </div>

        ))}

      </div>

    </div>

  );
}

export default App;
