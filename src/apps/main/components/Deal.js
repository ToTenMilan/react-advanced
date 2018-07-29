import React, { PureComponent } from 'react';

class Deal extends PureComponent {

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
