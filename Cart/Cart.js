import { connect } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

const Cart = ({ cart }) => {
  const getTotalPrice = () => {
    const arrayValues = cart.map((item) => item.qty * item.price);
    let initialValue = 0;
    let sum = arrayValues.reduce((totalValue, currentValue) => {
      return totalValue + currentValue;
    }, initialValue);
    return sum.toFixed(2);
  };

  const getTotalQty = () => {
    const arrayqty = cart.map((item) => item.qty);
    let initialValue = 0;
    let sum = arrayqty.reduce((totalValue, currentValue) => {
      return totalValue + currentValue;
    }, initialValue);
    return sum;
  };

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <Link to="/">
        <button>Back Menu</button>
      </Link>
      <ul>
        {cart.map((item) => (
          <CartItem
            key={item.id}
            items={{
              id: item.id,
              title: item.title,
              quantity: item.qty,
              price: item.price,
            }}
          />
        ))}
      </ul>
      <div>
        <h3>Total Quantitiy : {getTotalQty()}</h3>
        <h3>Total Price : ${getTotalPrice()}</h3>
      </div>
    </Card>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Cart);
