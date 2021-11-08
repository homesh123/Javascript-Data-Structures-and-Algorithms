array = [ 1, 4, 2, 5, -2, 3 ] 

bubbleSort = function () {
    var length = array.length;
    for (var i = 0; i < length; i++) {
        for (var j = 0; j < length - 1; j++) {
            if (array[j] > array[j + 1]) {
                swap(array, j, j + 1);
            }
        }
    }
};

var swap = function (array, index1, index2) {
    var aux = array[index1];
    array[index1] = array[index2];
    array[index2] = aux;
};


bubbleSort(array);

// [-2, 1, 2, 3, 4, 5]
