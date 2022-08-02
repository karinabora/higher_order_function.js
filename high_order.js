// // Higher Orders Functions are functions that perform operations on other functions.

const firstOrderFunc = () =>
  console.log("Hello, I am a First order function");
const higherOrder = () => console.log("ReturnFirstOrderFunc");
higherOrder(firstOrderFunc()); 

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
a=()=>{
  console.log("a");
}
b=()=>{
  console.log("b");
}
a(b) 
