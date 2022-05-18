class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(val) {
        if (!this.root) this.root = new Node(0);

        (function traverse(node) {
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
            if (!node.left) {
                let leftNode = new Node(val);
                let rightNode = new Node(-val);
                node.left = leftNode;
                node.right = rightNode;
            }
        })(this.root);
    }

    DFSPreOrder(target) {
        let count = 0,
            data = 0;

        (function dfs(node) {
            data = data + node.value;
            node.left && dfs(node.left);
            node.right && dfs(node.right);
            if (!node.left) if (data === target) count++;
            data -= node.value;
        })(this.root);
        return count;
    }
}

function solution(numbers, target) {
    let tree = new BinarySearchTree();

    numbers.forEach((el) => tree.insert(el));
    console.log(tree);
    // return tree.DFSPreOrder(target);
}
console.log(solution([1, 1, 1, 1, 1], 3)); // 5
// console.log(solution([4, 1, 2, 1], 4)); // 2
/* 
{
    "value": 0,
    "left": {
        "value": 1,
        "left": {
            "value": 1,
            "left": {
                "value": 1,
                "left": {
                    "value": 1,
                    "left": {
                        "value": 1,
                        "left": null,
                        "right": null
                    },
                    "right": {
                        "value": -1,
                        "left": null,
                        "right": null
                    }
                },
                "right": {
                    "value": -1,
                    "left": {
                        "value": 1,
                        "left": null,
                        "right": null
                    },
                    "right": {
                        "value": -1,
                        "left": null,
                        "right": null
                    }
                }
            },
            "right": {
                "value": -1,
                "left": {
                    "value": 1,
                    "left": {
                        "value": 1,
                        "left": null,
                        "right": null
                    },
                    "right": {
                        "value": -1,
                        "left": null,
                        "right": null
                    }
                },
                "right": {
                    "value": -1,
                    "left": {
                        "value": 1,
                        "left": null,
                        "right": null
                    },
                    "right": {
                        "value": -1,
                        "left": null,
                        "right": null
                    }
                }
            }
        },
        "right": {
            "value": -1,
            "left": {
                "value": 1,
                "left": {
                    "value": 1,
                    "left": {
                        "value": 1,
                        "left": null,
                        "right": null
                    },
                    "right": {
                        "value": -1,
                        "left": null,
                        "right": null
                    }
                },
                "right": {
                    "value": -1,
                    "left": {
                        "value": 1,
                        "left": null,
                        "right": null
                    },
                    "right": {
                        "value": -1,
                        "left": null,
                        "right": null
                    }
                }
            },
            "right": {
                "value": -1,
                "left": {
                    "value": 1,
                    "left": {
                        "value": 1,
                        "left": null,
                        "right": null
                    },
                    "right": {
                        "value": -1,
                        "left": null,
                        "right": null
                    }
                },
                "right": {
                    "value": -1,
                    "left": {
                        "value": 1,
                        "left": null,
                        "right": null
                    },
                    "right": {
                        "value": -1,
                        "left": null,
                        "right": null
                    }
                }
            }
        }
    },
    "right": {
        "value": -1,
        "left": {
            "value": 1,
            "left": {
                "value": 1,
                "left": {
                    "value": 1,
                    "left": {
                        "value": 1,
                        "left": null,
                        "right": null
                    },
                    "right": {
                        "value": -1,
                        "left": null,
                        "right": null
                    }
                },
                "right": {
                    "value": -1,
                    "left": {
                        "value": 1,
                        "left": null,
                        "right": null
                    },
                    "right": {
                        "value": -1,
                        "left": null,
                        "right": null
                    }
                }
            },
            "right": {
                "value": -1,
                "left": {
                    "value": 1,
                    "left": {
                        "value": 1,
                        "left": null,
                        "right": null
                    },
                    "right": {
                        "value": -1,
                        "left": null,
                        "right": null
                    }
                },
                "right": {
                    "value": -1,
                    "left": {
                        "value": 1,
                        "left": null,
                        "right": null
                    },
                    "right": {
                        "value": -1,
                        "left": null,
                        "right": null
                    }
                }
            }
        },
        "right": {
            "value": -1,
            "left": {
                "value": 1,
                "left": {
                    "value": 1,
                    "left": {
                        "value": 1,
                        "left": null,
                        "right": null
                    },
                    "right": {
                        "value": -1,
                        "left": null,
                        "right": null
                    }
                },
                "right": {
                    "value": -1,
                    "left": {
                        "value": 1,
                        "left": null,
                        "right": null
                    },
                    "right": {
                        "value": -1,
                        "left": null,
                        "right": null
                    }
                }
            },
            "right": {
                "value": -1,
                "left": {
                    "value": 1,
                    "left": {
                        "value": 1,
                        "left": null,
                        "right": null
                    },
                    "right": {
                        "value": -1,
                        "left": null,
                        "right": null
                    }
                },
                "right": {
                    "value": -1,
                    "left": {
                        "value": 1,
                        "left": null,
                        "right": null
                    },
                    "right": {
                        "value": -1,
                        "left": null,
                        "right": null
                    }
                }
            }
        }
    }
}
*/
