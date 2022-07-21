//Задание 1

const data = [
    {
      name: "John",
      age: 24,
      position: "senior",
      isActive: false,
    },
    {
      name: "Peter",
      age: 33,
      position: "middle",
      isActive: false,
    },
    {
      name: "Sam",
      age: 29,
      position: "junior",
      isActive: true,
    },
    {
      name: "Mary",
      age: 24,
      position: "middle",
      isActive: false,
    },
    {
      name: "Steve",
      age: 23,
      position: "middle",
      isActive: true,
    },
    {
      name: "Kate",
      age: 31,
      position: "middle",
      isActive: false,
    },
    {
      name: "Sally",
      age: 19,
      position: "junior",
      isActive: false,
    },
    {
      name: "Jack",
      age: 19,
      position: "middle",
      isActive: true,
    },
  ];

  const filterData = (dataArray, objectToFilter) => {

    let result = dataArray.filter(item => {

        console.log('keys:', Object.keys(objectToFilter))

        return Object.keys(objectToFilter).every(key => {

            return item[key] === objectToFilter[key]
        })
    });
    return result;
  }

  //let resultFilter = filterData(data, {age: 23})
  //console.log(resultFilter)

  //Задание 2

  const isNegative = (number) => number < 0;
  const increment = (number) => number + 1;
  const logger = (element, index, array) => {
    console.log(`In array [${array}] on position ${index}: ${element}`);
  }

  const ownFilter = (arr, isNegative) => {

    let arrDouble = [];

    for(let num of arr){

      if(isNegative(num) === true){

        arrDouble.push(num)
      }

    }
    return arrDouble

  }

  let resultOwnFilter = ownFilter([5, -3, -7], isNegative);
  // console.log(resultOwnFilter)

  const ownMap = (arr, increment) => {

    let arr2 = [];

    for(let num of arr){
      arr2.push(increment(num))
    }

    return arr2
  }

  let resultOwnMap = ownMap([5, 7, 9], increment)
  // console.log(resultOwnMap)

  const ownForEach = (arr, logger) => {

    for(let num of arr){
      logger(num, arr.indexOf(num),arr)
    }
  }

  // ownForEach([5, 7, 9], logger)
