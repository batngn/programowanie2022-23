const stuff = new Array();

stuff[0] = 34;
stuff[4] = 20;
const myMultiArray = [
    [1, 2, 3, 4, 5, [1, 2, 3, 4, 5] ],
    [6, 7, 8, 9, 10, [1, 2, 3, 4, 6] ],
    [11, 12, 13, 14, 15, [1, 2, 3, 4, 5] ],
    [16, 17, 18, 19, 20, [1, 2, 3, 4, 5] ]
  ];
  
  console.log(myMultiArray[1][5][4]);
  if (!false && ( false || (false && true) )) {
    console.log('Guess what...');
  }
  