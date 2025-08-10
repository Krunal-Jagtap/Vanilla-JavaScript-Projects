// ( ... ) in Function parameter - REST OPERATOR

function collection(value1, value2, ...restValues) {
  console.log(value1, value2); // 11 22

  console.log(restValues); // [ 33, 44, 55, 66, 77, 88, 99, 100 ]
}

collection(11, 22, 33, 44, 55, 66, 77, 88, 99, 100);
