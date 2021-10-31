//  percentage of marks

    var totalmarks=600;
    function percentge (maths,physics,chemistry,Biology,english,urdu) {
    var sum=maths+physics+chemistry+Biology+english+urdu;
    return sum;
}
    var result=percentge(70,60,50,65,70,95);
    var percentage=(result*100/totalmarks);
    console.log(percentage);

    // To print for odd or even

    function  oddoreven(num){
        if(num%2==0){
          return "even number";
        }
        else{
            return "odd number";
        }
    }
    var result = oddoreven(3);
    console.log(result);

    // Function to reverse a string
    
    