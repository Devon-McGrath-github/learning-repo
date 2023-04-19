function romanToInt(s: string): number {

  // define array of roman Numeral (key) with corresponding int (value)
  let map = new Map();
  map.set('I', 1)
  map.set('V', 5)
  map.set('X', 10)
  map.set('L', 50)
  map.set('C', 100)
  map.set('D', 500)
  map.set('M', 1000)

  // create variable to store total 
  let total: number = 0;

  // split string into array, 
  let romanNumeral = s.split('').reverse();
  console.log(romanNumeral)

  for ( let i = 0; i < romanNumeral.length; i++) {
    if ( romanNumeral[i] === 'V') {
      total += 
      i++
    } 

    // map.get(romanNumeral[i])


    console.log(map.get(romanNumeral[i])) 
  }
  


    // if following index is irrelevant
      // add value to total
    
    // else 
      // calculate appropriate value
      // add value to total
      // increment index

  return total;
};


/* Symbol       Value
 */

console.log(romanToInt('IIV'))
