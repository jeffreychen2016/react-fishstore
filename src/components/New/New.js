import React from 'react';
import './New.css';
import Fish from '../../components/Fish/Fish';
import Order from '../../components/Order/Order';
import fishRequests from '../../firebaseRequests/fishes';
import authRequests from '../../firebaseRequests/auth';
import orderRequests from '../../firebaseRequests/orders';

class New extends React.Component {
  state = {
    fishes: [],
    order: {},
  };

  addToOrder = (key) => {
    const newOrder = {...this.state.order};
    newOrder[key] = newOrder[key] + 1 || 1;
    this.setState({ order: newOrder});
  };

  removeFromOrder = (key) => {
    const newOrder = {...this.state.order};
    // remove key value pair from object
    delete newOrder[key];
    this.setState({order: newOrder});
  };

  saveNewOrder = () => {
    const newOrder = {fishes: {...this.state.order}};
    newOrder.uid = authRequests.getUid();
    newOrder.dateTime = Date.now();
    console.error('newOrder',newOrder);
    orderRequests
      .postRequest(newOrder)
      .then(() => {
        this.props.history.push('/orders');
      })
      .catch((err) => {
        console.error('error in order post', err);
      });
  };

  componentDidMount () {
    fishRequests
      .getRequest()
      .then((fishes) => {
        // this.setState({fishes : fishes});
        this.setState({fishes});
      })
      .catch((err) => {
        console.error('error with fish get request', err);
      });
  };

  render () {
    const fishComponents = this.state.fishes.map((fish) => {
      return (
        // <h2>{fish.name}</h2>
        <Fish
          details={fish}
          key={fish.id}
          addToOrder={this.addToOrder}
        />
      );
    });
    return (
      <div className="New">
        <div className="col-xs-8 inventory-container">
          <h2>Inventory</h2>
          <ul className="fishes">
            {fishComponents}
          </ul>
        </div>
        <Order
          fishes={this.state.fishes}
          order={this.state.order}
          removeFromOrder={this.removeFromOrder}
          saveNewOrder={this.saveNewOrder}
        />
      </div>
    );
  };
};

export default New;
