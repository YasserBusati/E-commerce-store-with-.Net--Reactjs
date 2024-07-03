import { useEffect, useState } from 'react';
import { Product } from '../models/product';
import Catalog from '../../features/catalog/Catalog';
import { Typography } from '@mui/material';

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/product')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
      <Typography variant="h1" component="h2">
        Re-Store
      </Typography>
      <Catalog products={products} />
    </>
  );
}

export default App;
