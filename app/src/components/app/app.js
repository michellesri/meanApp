import template from './app.html';
import styles from './app.css';

export default { //export this module. it's being imported from ../index.js
  template: template,
  controllerAs: 'app', //if i don't name controller. it will be $ctrl in the app.html
  controller (){
    this.styles = styles;
    this.text = 'hellooo';
    this.blah = 'blahblah';
  }
};
