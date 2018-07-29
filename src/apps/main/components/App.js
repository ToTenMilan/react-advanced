import React, { PureComponent } from 'react';
import DealList from './DealList';
import PropTypes from 'prop-types';

class App extends PureComponent {
  static propTypes = {
    // propTypes for eslint
    data: PropTypes.object
  };

  render() {
    return (
      <div className="app-container">
        <DealList deals={this.props.data.deals} />
      </div>
    );
  }
}

export default App;
