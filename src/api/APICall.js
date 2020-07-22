import React, { useState, useEffect } from 'react';

function APICall() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://api.bestbuy.com/v1/products(onSale=true&(categoryPath.id=abcat0502000))?apiKey=qBuX6XunHKJ9uqKLf8R5U9CS&format=json")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.products);
          console.log(result.products)
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className='card-container'>
      {items.map(item => (
        <div key={item.sku} className='card'>
          <a href={item.url}><img src={item.image} alt={item.name} /></a>
          <h3>{item.name}</h3>
          <div className='price-container'>
            <p>${item.regularPrice}</p>
            <p>${item.salePrice}</p>
          </div>
          <a href={item.url} className='btn'>More Details</a>
        </div>
      ))}
      </div>
    );
  }
}

export default APICall;