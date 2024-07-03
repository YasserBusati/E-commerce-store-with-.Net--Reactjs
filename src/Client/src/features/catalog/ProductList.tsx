import { Grid } from '@mui/material';
import { Product } from '../../app/models/product';
import ProductCard from './ProductCard';

interface Props {
  products: Product[];
}

function ProductList({ products }: Props) {
  return (
    <>
      <Grid container spacing={4}>
        {products.map((product, index) => (
          <Grid key={index} item xs={3}>
            <ProductCard key={product.name} product={product} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default ProductList;
