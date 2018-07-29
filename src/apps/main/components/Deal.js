import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Deal extends PureComponent {
  static propTypes = {
    // propTypes for eslint
    deal: PropTypes.string
  };

  render() {
    return (
      <div className="deal">
        {this.props.deal.title}
        {this.props.deal.price}
      </div>
    );
  }
}

export default Deal;
