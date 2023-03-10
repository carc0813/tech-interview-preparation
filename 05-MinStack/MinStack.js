function Node(val) {
  // Your code here:
  this.value = val;
  this.next = null;
  this.minimo = Infinity;
}

function MinStack() {
  // Your code here:
  this.top = null;
}

MinStack.prototype.push = function (val) {
  let previousTop = this.top;
  this.top = new Node(val);
  this.top.next = previousTop;
  if (!previousTop) this.top.minimo = val;
  else if (val < previousTop.minimo) this.top.minimo = val;
  else {
    this.top.minimo = previousTop.minimo;
  }

  MinStack.prototype.pop = function () {
    let popped = this.top;
    this.top = this.top.next;
    return popped.value;
  };

  MinStack.prototype.min = function () {
    return this.top.minimo;
  }

}

let node = new Node(4);
console.log(node);

let minStack = new MinStack();
console.log(minStack);

    minStack.push(4)
    console.log(minStack);
    minStack.push(1)
    console.log(minStack);
    minStack.push(1000)
    console.log(minStack);
    minStack.push(0.5)
    console.log(minStack);
    minStack.push(5000)
    console.log(minStack);
    minStack.push(0.1)
    console.log(minStack);
    console.log(minStack.pop());
    console.log(minStack);
    console.log(minStack.peek());



module.exports = {
  Node,
  MinStack,
};
