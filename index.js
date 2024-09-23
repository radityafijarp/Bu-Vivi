// 1 dimensional
//Pengambilan item pada array
buahBuahan=["Apel","Mangga","Jeruk"]
people=["Andi","Budi","Sinta"]

console.log(buahBuahan[2])
console.log(people[2])

// Ubah suatu nilai dalam array
buahBuahan[2]="Pisang"

// Tambah item baru di array (metode push)
buahBuahan.push("Kelapa")
console.log(buahBuahan)

//metode popbuahBuahan.push("Kelapa")
buahBuahan.pop("Kelapa")
console.log(buahBuahan)

multidimensional

numbers=[[1,2],[3,4],[5,6],4,6,"text"]
// console.log(numbers[0][1])
// console.log(numbers[5])

numbers.push([[6,7],[8,9]])
// console.log(numbers[6][1][0])

for (let i=0;i<numbers.length;i++){
    console.log(numbers[i])
}

oddNumbers=[]

for (let i=0;i<20;i++){
    if (i%2!=0){
        oddNumbers.push(i)
    }
}

console.log(oddNumbers)

console.log(5*10)