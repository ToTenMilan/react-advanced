import React, { PureComponent } from 'react';
import DealList from './DealList';

class App extends PureComponent {
  render() {
    return (
      <div className="app-container">
        <DealList deals={this.props.data.deals} />
      </div>
    );
  }
}

export default App;
