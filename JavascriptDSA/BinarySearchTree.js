//given an integer as input, check if the integer exists within a binary search tree
//value = 3,1,2,3
function BST(value){
    this.value = value;
    this.right = null;
    this.left = null;
}

BST.prototype.insert = function(value){
    if(value <= this.value){
        if(!this.left){
            this.left = new BST(value);
        }
        else{
            this.left.insert(value);
        }
    }
    else if(value > this.value){
        if(!this.right){
            this.right = new BST(value);
        }
        else{
            this.right.insert(value);
        }
    }
}

BST.prototype.contains = function(value){
    // your code here
    //console.log(value)
    //we have a node? no
    //we have a value, yes
    //we have an insert, yes
    //where is our tree? no tree
    //no tree? then what?
    //no root? where is our root?

    //console.log(newNode)
    //console.log(this)
    let myValue = this.value
    let rightNode = this.right
    let leftNode = this.left

    if(myValue === value) return true
    if(value > myValue){
        if(rightNode === null){
            return false
        }
            return rightNode.contains(value)
    }
    if(value <= myValue){
        if(leftNode === null){
            return false
        }
        return leftNode.contains(value)
    }
}
let newNode = new BST(1);
newNode.insert(2);
newNode.insert(3);
newNode.insert(3);

//console.log(newNode)
let hasThree = newNode.contains(3)
//let hasFive = newNode.contains(5)
//let hasSix = newNode.contains(6)
console.log(hasThree)
//console.log(hasFive)
//console.log(hasSix)