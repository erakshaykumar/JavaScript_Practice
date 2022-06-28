/**
 * @purpose : For creating our owm forEach function
 * @param {*} callback 
 * @returns 
 */

Array.prototype.myforEach = function (callback) {
  for (let index = 0; index < this.length; index++) {
    callback(this[index], index, this);
  }
  return;
};

/**
 * @purpose : Array having different colors as elements
 */
let myArray = ["red","green","blue","pink","black"];

/**
 * @purpose : To use custom forEach function and print colors
 */
myArray.myforEach((colors) => {
  console.log(colors);
});
