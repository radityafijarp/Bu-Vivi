// let cars = [
//     {
//       "color": "purple",
//       "type": "minivan",
//       "registration": new Date('2017-01-03'),
//       "capacity": 7
//     },
//     {
//       "color": "red",
//       "type": "station wagon",
//       "registration": new Date('2018-03-03'),
//       "capacity": 5
//     }
//   ]

//   console.log(cars[0].registration)

  let activities = [
    ["Study", 9],
    ["Eat", 1],
    ["Play Game", 2],
    ["Sleep", 8],
  ];
  
  function arrObj(activities){
    activities.map((activity)
  }

  let arrObj = activities.map((activity) => {
    let obj = {};
  
    obj.name = activity[0];
    obj.duration = activity[1];
  
    return obj;
  });
  
  console.log(arrObj);
  
  /*
  result:
  
  [
    { name: 'Study', duration: 9 },
    { name: 'Eat', duration: 1 },
    { name: 'Play Game', duration: 2 },
    { name: 'Sleep', duration: 8 }
  ]*/