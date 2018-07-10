import React from 'react';
import './Fish.css';
import formatPrice from '../../helpers';

class Fish extends React.Component {
  addClickEvent = () => {
    this.props.addToOrder(this.props.details.id)
  };

  render () {
    const {details} = this.props;
    // isAvailable will be either true or false
    const isAvailable = details.status === 'available';
    // in order to use image, need to requir the image path
    const image = require(`${details.image}`);
    return (
      <div className="Fish">
        <img src={image} alt={details.name}/>
        <h3 className="name">
          {details.name}
          <span className="price">{formatPrice(details.price)}</span>
        </h3>
        <p>{details.desc}</p>
        <button
          disabled={!isAvailable}
          onClick={this.addClickEvent}
        >
          {isAvailable ? 'Add To Order' : 'Sold Out!'}
        </button>
      </div>
    );
  };
};

export default Fish;
