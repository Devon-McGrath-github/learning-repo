// question from the bottom of https://javascript.info/object 
// create a function to multiply numeric property values by 2


let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};


function multiplyNumeric(obj) {
  Object.keys(obj).forEach(key => {
    if (typeof obj[key] === 'number') {
      obj[key] *= 2;
    }
  })
}

multiplyNumeric(menu);

// alert( "menu width=" + menu.width + " height=" + menu.height + " title=" + menu.title );