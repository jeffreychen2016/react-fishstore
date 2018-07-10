import React from 'react';
import './Inventory.css';
import fishRequests from '../../firebaseRequests/fishes';
import Fish from '../../components/Fish/Fish';

class Inventory extends React.Component {
  state = {
    fishes: [],
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

  // the fish.id in key can not be used.
  render () {
    const fishComponents = this.state.fishes.map((fish) => {
      return (
        // <h2>{fish.name}</h2>
        <Fish
          details={fish}
          key={fish.id}
        />
      );
    });

    return (
      <div className="Inventory col-xs-12">
        <h1>Inventory</h1>
        <ul className='fishes'>
          {fishComponents}
        </ul>
      </div>
    );
  };
};

export default Inventory;
