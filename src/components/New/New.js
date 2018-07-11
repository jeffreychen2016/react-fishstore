import React from 'react';
import './New.css';
import Fish from '../../components/Fish/Fish';
import Order from '../../components/Order/Order';
import fishRequests from '../../firebaseRequests/fishes';

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
        />
      </div>
    );
  };
};

export default New;
