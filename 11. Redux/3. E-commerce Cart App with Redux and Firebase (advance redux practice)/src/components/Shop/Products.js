import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {
    id: 'p1', 
    price: 100,
    title: 'First Book', 
    description: 'The first book i have ever read', 
  }, 
  {
    id: 'p2', 
    price: 75,
    title: 'Second Book', 
    description: 'The second book i have ever read', 
  }, 
  {
    id: 'p3', 
    price: 50,
    title: 'Third Book', 
    description: 'The third book i have ever read', 
  }
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map(item => <ProductItem key={item.id} {...item}/>)}
      </ul>
    </section>
  );
};

export default Products;
