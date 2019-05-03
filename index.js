function inOrder(rootNode){
  if(rootNode.left){
    inOrder(rootNode.left)
  }
  console.log(rootNode.data)
  if(rootNode.right){
    inOrder(rootNode.right)
  }
}

//
// let node = {data: 5, left:
//                   {data: 3, left: null, right: null},
//                     right: {data: 7, left: null,
//                     right: {data: 9, left: null, right: null}
//                   }
//             }
//
// inOrder(node)

function findOrAdd(rootNode, newNode){
  if(newNode.data === rootNode.data){
    return true
  }
  if(newNode.data < rootNode.data){
    if(rootNode.left){
      findOrAdd(rootNode.left, newNode)
    } else{
      rootNode.left = newNode
    }
  }
  if(newNode.data > rootNode.data){
    if(rootNode.right){
      findOrAdd(rootNode.right, newNode)
    } else {
      rootNode.right = newNode
    }
  }
  return true
}

//check if newNode.data = rootNode
// return true
//if newNode < rootNode
// run itself on the rootNode.left
// newNode > root Node
// run itself on the right
// if data is empty insert it in

function max(currentNode){
  if(currentNode.right){
    return max(currentNode.right)
  } else {
    return currentNode;
  }
}

function min(currentNode){
  if(currentNode.left){
    return min(currentNode.left)
  } else {
    return (currentNode)
  }
}

let node = {data: 5, left:
                  {data: 3, left: null, right: null},
                    right: {data: 7, left: null,
                    right: {data: 9, left: null, right: null}
                  }}

  min(node)
