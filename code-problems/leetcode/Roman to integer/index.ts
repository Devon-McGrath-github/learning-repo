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
  let arr = s.split('').reverse();
  console.log(arr) 

  for(let i: number = 0; i < arr.length; i++) {
    if(arr[i] === 'V' || arr[i] === 'X') {
       if(arr[(i + 1)] === 'I') {
          total += (map.get(arr[i]) - map.get('I'));
          i++;
       }
       else {
          total += map.get(arr[i]);
       }
    }
    else if(arr[i] === 'L' || arr[i] === 'C') {
       if(arr[(i + 1)] === 'X') {
          total += (map.get(arr[i]) - map.get('X'));
          i++;
       }
       else {
          total += map.get(arr[i]);
       }
    }
    else if(arr[i] === 'D' || arr[i] === 'M') {
       if(arr[(i + 1)] === 'C') {
          total += (map.get(arr[i]) - map.get('C'));
          i++;
       }
       else {
          total += map.get(arr[i]);
       }
    }
    else {
       total += map.get(arr[i]);
    }
  }
  return total
};

console.log(romanToInt('LVIII'))

// works but very inefficient
