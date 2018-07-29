import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import axios from 'axios';

import App from './apps/main/components/App';

// const data = {
//   deals: [], // TODO fetch with ajax
// };

axios.get('https://bakesaleforgood.com/api/deals').then((resp) => {
  console.log('========1');
  console.log('========= RESPONSE:', resp);
  console.log('============2');
  ReactDOM.render(<App data={{ deals: resp.data}} />, document.getElementById('root'));
});
