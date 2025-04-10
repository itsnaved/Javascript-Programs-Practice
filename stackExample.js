class Stack{
    constructor(){
        this.items = [];
    }

    add(element){
        this.items.push(element);
    }

    remove(){
        if(this.items.length > 0){
        return this.items.pop();
        }
    }

    isEmpty(){
        return this.items.length ==0;
    }

    size(){
        return this.items.length;
    }

    peek(){
        return this.items[this.items.length-1];
    }

    clear(){
        this.items=[];
    }
}

let st = new Stack();
st.add(1);
st.add(2);
st.add(3);
st.add(4);
st.add(5);
console.log(st);
console.log(st.items);

st.remove();
console.log(st.items);

console.log(st.peek());

console.log(st.isEmpty());

console.log(st.size());

st.clear();
console.log(st.items);