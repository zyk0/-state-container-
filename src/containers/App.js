import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import App from '../components/App.jsx';
import groupBy from 'lodash/groupBy';
import find from 'lodash/find';
import * as wines from '../actions/wines';
import * as cart from '../actions/cart';

const getCartItems = (ids, wines) => {
  const keys = Object.keys(ids);
  return keys.map(id => ({
    id: parseInt(id),
    image: wines[id].image,
    title: wines[id].title,
    count: ids[id].length,
    total: ids[id].length * wines[id].price
  }));
};

const mapStateToProps = ({
  cart,
  wines
}) => {
  const items = (wines.items);
  const groupIds = groupBy(cart.items);
  const cartItems = getCartItems(groupIds, wines.items);
  return {
    items,
    isLoading: wines.isLoading,
    cartItems
  };
};

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(wines, dispatch),
  ...bindActionCreators(cart, dispatch),
  getCartItem: (cartItems, id) => find(cartItems, { id })
});

export default connect(mapStateToProps, mapDispatchToProps)(App);