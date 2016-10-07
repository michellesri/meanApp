import template from './places.html';
import styles from './places.css';

export default { //export this module. it's being imported from ../index.js
  template: template,
  controllerAs: 'places', //if i don't name controller. it will be $ctrl in the app.html
  bindings: {
    foo: '@'
  },
  controller (){
    this.styles = styles;
    this.text = 'Portland';
  }
};
