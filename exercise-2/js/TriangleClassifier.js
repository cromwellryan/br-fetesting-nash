var TriangleClassifier = function() {

  this.classify = function(a,b,c) {
    if( a === b && b === c && a === c ) {
      return "equilateral";
    }
    else if( b === c || a == b ) {
      return "isosceles";
    } 
    return "scalene";
  };
};
