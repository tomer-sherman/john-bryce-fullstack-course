export class ArrOp {
    // Created a Array Operations class // For utility usage
    // The static modifier compliments this usage directly, This will alow, me too 
    // Use it in the main script calling directly the class, Without creating un necesery objects.
    // All of the methods here are static, can be used only by calling the class in the main script.
    static getSum(arr) {
        let sum = 0;
        arr.forEach(num => { sum += num; });
        return sum;
    }
    static getAvg(arr) {
        const sum = this.getSum(arr);
        const avg = sum / arr.length;
        return avg;
    }
    static getMax(arr) {
        let max = arr[0];
        arr.forEach(num => { if (num > max) {
            max = num;
        } });
        return max;
    }
    static getMin(arr) {
        let min = arr[0];
        arr.forEach(num => { if (num < min) {
            min = num;
        } });
        return min;
    }
}
