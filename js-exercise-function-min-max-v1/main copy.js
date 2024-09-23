function minMax(numbers){
    let min = parseInt(numbers[0])
    let max = parseInt(numbers[0])

    for (let i=1;i<numbers.length;i++){
        if(min>parseInt(numbers[i])){
            min=parseInt(numbers[i])
        }
        if(max<parseInt(numbers[i])){
            max=parseInt(numbers[i])
        }
    }

    if (min==max){
        return (`Nilai terkecil dan terbesar adalah ${min}`)
    } else {
        return (`Nilai terkecil adalah ${min}, dan terbesar adalah ${max}`)
    }

}

console.log(minMax("123424324"))
console.log(minMax("111111"))
console.log(minMax("87685"))

module.exports = minMax;