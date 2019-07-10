// const [count, setCount] = useState(0)
// add = () => setCount(count + 1)
let result = 0;

function realAdd() {
  return result + 1;
}

function add() {
  return result = realAdd()
}


console.log(add())
console.log(add())
