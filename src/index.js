import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import axios from 'axios';

import App from './apps/main/components/App';

// const data = {
//   deals: [], // TODO fetch with ajax
// };

axios.get('https://bakesaleforgood.com/api/deals').then((resp) => {
  ReactDOM.render(<App data={resp.data} />, document.getElementById('root'));
});
