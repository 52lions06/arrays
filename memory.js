// The word's worst allocator
var memory = new Float64Array(1024);
var head = 0;

var allocate = function (size) {            //reserves a contiguous block of memory consisting of size boxes which you can safely modify,
    if (head + size > memory.length) {      //returning a pointer to the first box, or null if the allocation fails.
        return null;
    }
    var start = head;
    head += size;
    return start;
};

//(ptr) is shorthand for pointer: variables containing memory addresses are known as pointers).

var free = function (ptr) {   //frees the block of memory reserved using allocate.
};
                    //0, 10, 3            /1    
var copy = function (to, from, size) {   //copies size boxes of data from the from pointer to the to pointer. 
                                        //For example, copy(10, 0, 3) would copy the values at boxes 0, 1 and 2 to the boxes at 10, 11 and 12 respectively.
    if (from === to) {  
        return;                             //copy (10,2,4) => we start at 12 because of the 2.....4 blocks long from there...12,13,14,15
    }                                               //******* where do we start from 10 or 12 ******/
    else if (from > to) {
        // Iterate forwards
        for (var i = 0; i < size; i++) {
            set(to + i, get(from + i));
        }
    }
    else {
        // Iterate backwards
        for (var i = size - 1; i >= 0; i--) {
            set(to + i, get(from + i));
        }
    }
};

var get = function (ptr) {    // returns the value stored at a certain memory address
    return memory[ptr];
};

var set = function (ptr, value) {  //sets the value stored at a certain memory address
    memory[ptr] = value;
};

module.exports = {allocate, free, copy, get, set};