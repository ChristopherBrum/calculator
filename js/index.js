let state = 0;

const add = a => state += a
const sub = a => state -= a
const mult = a => state *= a
const div = a => state /= a

const clear = () => state = 0

const setState = value => {
  if (state === 0){
    state = value
  }
}

let displayBox = document.getElementsByClassName('.display');
value = displayBox.value