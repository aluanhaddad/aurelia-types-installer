

/**
 * this is a test
 * @param {string} myConstructorParm - constructor parm, can be anything.
 */
function myObject(myConstructorParm) {

  this.localParm = myConstructorParm;

  //this doesn't do anything
  /** setLocalParm - sets value of localParm, overwrites constructor value.
  * @property { string } newValue - the new value to be assigned into localParm
  */
  this.setLocalParm = function (newValue) {this.localParm = newValue;}
}

new myObject().