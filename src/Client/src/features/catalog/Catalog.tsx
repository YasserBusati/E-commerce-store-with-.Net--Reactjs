import { useEffect, useState } from 'react';
import { Product } from '../../app/models/product';
import ProductList from './ProductList';

const Catalog = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/product')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  
  return (
    <>
      <ProductList products={products}/>
    </>
  );
};

export default Catalog;
