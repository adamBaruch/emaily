import React, { Component } from 'react';
import StripeChekcout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Payments extends Component {
  render() {
    return (
      <StripeChekcout 
        name="Bookly"
        description="5$ for 5 emails"
        amount={500}
        token={token => this.props.handleToken(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <button className="btn">
          Add Credits
        </button>
      </StripeChekcout>
    );
  }
}

export default connect(null, actions)(Payments);