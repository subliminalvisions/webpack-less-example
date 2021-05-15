// console.log("Hello, Webpack test 1 !");
import component from './component';
// import './style.css';
import './my-styles.less';
import './image-component';

document.querySelector('body').classList.add('with-styles');
document.body.appendChild(component());
