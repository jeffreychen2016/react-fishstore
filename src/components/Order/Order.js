import React from 'react';
import './Order.css';
import formatPrice from '../../helpers';

class Order extends React.Component {
  saveOrder = () => {
    this.props.saveNewOrder();
  };

  renderOrder = (key) => {
    const fish = this.props.fishes.find (x => x.id === key);
    const count = this.props.order[key];
    const xClickFunction = () => {
      this.props.removeFromOrder(key);
    };
    return (
      <li
        key={key}
        className="text-left"
      >
        <div className="col-xs-2 count">{count} lbs</div>
        <div className="col-xs-5">{fish.name}</div>
        <div className="col-xs-3">{formatPrice(fish.price)}</div>
        <div className="col-xs-2">
          <button className="btn btn-default" onClick={xClickFunction}>&times;</button>
        </div>
      </li>
    );
  };

  render () {
    // take out all of keys and put them into an array so that we can loop them
    const orderIds = Object.keys(this.props.order);
    const orderExists = orderIds.length > 0;
    const total = orderIds.reduce((prevTotal, key) => {
      const fish = this.props.fishes.find (x => x.id === key);
      const count = this.props.order[key];
      const isAvailable = fish && fish.status === 'available';
      if (isAvailable) {
        return prevTotal + count * fish.price;
      }
      return prevTotal;
    },0);
    return (
      <div className="Order">
        <h2>Order</h2>
        <ul>
          {orderIds.map(this.renderOrder)}
        </ul>
        <div className="total">Total:<strong>{formatPrice(total)}</strong></div>
        {
          orderExists ? (
            <button className="btn btn-default" onClick={this.saveOrder}>Save Order</button>
          ): (
            <div>Add inventory to your order</div>
          )
        }
      </div>
    );
  };
};

export default Order;
