import './index.css';
import printMe from './print.js';

console.log('入  口');

if (module.hot) {
    module.hot.accept('./print.js', function () {
        console.log('Accepting the updated printMe module!');
        printMe();
    })
}