import React, { PureComponent } from 'react';
import Deal from './Deal';
import PropTypes from 'prop-types';

// PureComponent state is immutable
class DealList extends PureComponent {
  static propTypes = {
    // propTypes for eslint
    deals: PropTypes.any
  };
  render() {
    return (
      <div className="app-deal-list">
        {this.props.deals.map((deal) => <Deal key={deal.key} deal={deal} />)}
      </div>
    );
  }
}

export default DealList;

////////
import express from 'express';

const app = express();

app.get('/', function(req, res) {
  res.send('Hello Express');
});

app.listen(8000, function () {
  console.info('server is running...');
});
