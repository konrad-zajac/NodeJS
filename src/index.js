import './index.css';

import numeral from 'numeral';

const cV = numeral(1000).format('$0,0.00')
console.log(`I would pay ${cV} for this awesome course!`);
