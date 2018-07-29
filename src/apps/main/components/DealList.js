import React, { PureComponent } from 'react';
import Deal from './Deal';

// PureComponent state is immutable
class DealList extends PureComponent {
  render() {
    return (
      <div className="app-deal-list">
        {this.props.deals.map((deal) => <Deal key={deal.key} deal={deal} />)}
      </div>
    );
  }
}

export default DealList;
