class Stack {
    constructor() {
        this.stack = [];
    }

    // đẩy các phẩn tử vào một mảng để tạo dữ liệu stack
    push(element) {
        this.stack.push(element);
    }

    // Xoá phần tử top của stack và trả về gia tri top 
    pop() {
        if (this.isEmpty()) return 'Stack is empty!';
        return this.stack.pop();
    }

    // Trả về giá trị top của stack
    peek() {
        if (this.isEmpty()) return 'Stack is empty';
        return this.stack[this.stack.length - 1];
    }

    // check
    isEmpty() {
        return !this.stack.length;
    }
}

const stack = new Stack();
stack.push("hung");
console.log(stack);
console.log(stack.peek());
console.log(stack.isEmpty());
