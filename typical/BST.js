// Создание BST(BinarySearchTree) и реализация методов
// insertData()
// inOrderTraverse()
// preOrderRTaverse()
// postOrderTraverse()
// search(data)
// remove(data)

class Node {
  constructor(val) {
    this.data = val;
    this.left = null;
    this.right = null;
  }
}

const logDeepStringify = (v) => console.log(JSON.stringify(v, undefined, '  '));

class BST {
  constructor() {
    this.root = null;
  }

  // При вставке узла нам нужно проверить 2 случая: является ли узел первым(то есть корневым) или является обычным узлом
  // Если это корневой узел - то в корневой узел присваиваем ноду
  // Иначе мы ноду помещаем в нужную позицию

  insertData(val) {
    let newNode = new Node(val);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  // Вспомогательный метод на случай, если помещаем в нужнудю позицию, а не в корень
  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  // Обход дерева (Traverse) – это процесс посещения всех узлов дерева и выполнения операции на каждом узле.
  // Большой вопрос, как мы должны обходить дерево ? Существует три общих подхода: прямой(in -order), симметричный или поперечный(pre - order) и
  // в обратном порядке(post - order).

  // При прямом обходе будут посещаться все узлы в порядке возрастания,
  //  начиная с указанного узла(хотя это и необязательно), и выполнять заданную функцию обратного вызова callback(также необязательно).

  inOrderTraverse(node, callback) {
    if (node != null) {
      this.inOrderTraverse(node.left, callback);
      callback(node.data);
      this.inOrderTraverse(node.right, callback);
    }
  }

  // При симметричном обходе посещаются каждый узел до его потомков.
  // Обратите внимание на довольно тонкую разницу с прямым обходом в коде и на диаграмме:

  preOrderTraverse(node, callback) {
    if (node != null) {
      callback(node.data);
      this.preOrderTraverse(node.left, callback);
      this.preOrderTraverse(node.right, callback);
    }
  }
  // при обходе в обратном порядке посещаются узлы после посещения его потомков.

  postOrderTraverse(node, callback) {
    if (node != null) {
      this.postOrderTraverse(node.left, callback);
      this.postOrderTraverse(node.right, callback);
      callback(node.data);
    }
  }

  search(node, val) {
    if (node === null) {
      return null;
    } else if (val < node.data) {
      return this.search(node.left, val);
    } else if (val > node.data) {
      return this.search(node.right, val);
    } else {
      return node;
    }
  }

  minNode(node) {
    if (node.left === null) {
      return node;
    } else {
      return this.minNode(node.left);
    }
  }

  maxNode(node) {
    if (node.right === null) {
      return node
    } else return this.maxNode(node.right);
  }

  remove(val) {
    this.root = this.removeNode(this.root, val)
  }

  removeNode(node, val) {
    if (node === null) {
      return null;
      // если данные, которые нужно удалить, меньше, чем данные корня, переходим к левому поддереву
    } else if (val < node.data) {
      node.left = this.removeNode(node.left, val);
      return node;
       // если данные, которые нужно удалить, больше, чем данные корня, переходим к правому поддереву
    } else if (val > node.data) {
      node.right = this.removeNode(node.right, val);
      return node;
      // если данные такие как данные корня, удаляем узел
    } else {
      // удаляем узел без потомков (листовой узел (leaf) или крайний)
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }

      // удаляем узел с одним потомком
      if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.rigth === null) {
        node = node.left;
        return node;
      }
      // удаляем узел с двумя потомками
      // minNode правого поддерева хранится в новом узле
      let newNode = this.minNode(node.right);
      node.data = newNode.data;
      node.right = this.removeNode(node.rigth, newNode.data);
      return node;
    }

  }
}

const sum = (num) => {
  let res;
  res += num;
  console.log(num);
  return res;
};

const newBST = new BST();
newBST.insertData(7);
newBST.insertData(5);
newBST.insertData(11);
newBST.insertData(9);
newBST.insertData(100);


newBST.preOrderTraverse(newBST.root, sum);
console.log(newBST.remove(9));

logDeepStringify(newBST);

// 4 Дано дерево, надо найти сумму всех вершин.
