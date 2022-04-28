import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
import { connect } from "react-redux";

const Products = ({ products }) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite Foods </h2>
      <ul>
        {products.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
            img={product.img}
          />
        ))}
      </ul>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
  };
};

export default connect(mapStateToProps)(Products);
