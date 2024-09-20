let person = {
    name: "Budi",
    age: 24,
  };


// Cara untuk ambil value dalam sebuah object
// console.log(`name ${person.name}`)
// console.log(`age ${person.age}`)
// attribut1="name"
// attribut2="age"

// console.log(`name ${person[attribut1]}`)
// console.log(`age ${person[attribut2]}`)

// Tambah nilai baru
// person.address="Jakarta" //cara 1
person["address"]="Jakarta" //cara 2

//Ubah nilai dalam object

person.name="Andi"
console.log(person)

person.family_members=["Sinta,Dewi,Dwiki,Ahmad"]
console.log(person)

person.family_members.push("Dinda")
console.log(person)