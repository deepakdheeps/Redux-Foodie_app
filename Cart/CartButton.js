import CartIcon from "./cartIcon";
import classes from "./CartButton.module.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const CartButton = ({ cart }) => {
  const cartCount = () => {
    const values = cart.map((item) => item.qty);
    let initialValue = 0;
    const sum = values.reduce((totalValue, currentvalue) => {
      return totalValue + currentvalue;
    }, initialValue);

    return sum;
  };
  return (
    <Link to="/values">
      <button className={classes.button}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span>My Cart</span>
        <span className={classes.badge}>{cartCount()}</span>
      </button>
    </Link>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(CartButton);
