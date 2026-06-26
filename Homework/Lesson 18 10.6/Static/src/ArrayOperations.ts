export class ArrOp {

    // Created a Array Operations class // For utility usage
    // The static modifier compliments this usage directly, This will alow, me too 
    // Use it in the main script calling directly the class, Without creating un necesery objects.


    // All of the methods here are static, can be used only by calling the class in the main script.
public static getSum(arr: Array<number>): number{
let sum = 0
arr.forEach(num => { sum+=num});
return sum;
}

public static getAvg(arr: Array<number>){
const sum = this.getSum(arr);
const avg = sum/arr.length;
return avg;
}

public static getMax(arr: Array<number>): number{
let max = arr[0];
arr.forEach(num => {if(num > max){max = num}})
return max;
}

public static getMin(arr: Array<number>): number{
let min = arr[0];
arr.forEach(num => {if(num < min){min = num}})
return min;
}
}