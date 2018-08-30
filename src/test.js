import express from 'express';
import hourly_consumption from './hourly_consumption.json'
const test = () => {

  const limit_hourly = 15 //enter the limit not to be exceeded
  const consecutive_limit_hourly = 3//enter consecutive hourly


  // consumption hour by hour
  function only_consumption (hourly_consumption) {
    return hourly_consumption.map(x => x.consommation)
  }

  // convert consumption to true or false (if it's true the limit has been exceeded)
  function exceed_true (only_consumption) {
    return only_consumption.map(x => x > limit_hourly)
  }

  // only get the indices equal to true
  function only_true_index(exceed_true) {
    let indices = [];
    const element = true;

    let idx = exceed_true.indexOf(element);
    while (idx != -1) {
      indices.push(idx);
      idx = exceed_true.indexOf(element, idx + 1);
    }
    return indices
  }



  // we only recover the suites
  function suite_w_duplicate(indices) {
    let suite_w_duplicate = []
    for( let i = 0; i < indices.length; i++) {
      if(indices[i] === indices[i+1] -1) {
        suite_w_duplicate.push(indices[i], indices[i+1])
      }
    }
    return suite_w_duplicate
  }

  // Eliminate duplicate results

  function suite_wo_duplicate(suite_w_duplicate) {
    let suite_wo_duplicate = []
    for(let i = 0; i < suite_w_duplicate.length; i++) {
      if(suite_w_duplicate[i] !== suite_w_duplicate[i+1]) {
        suite_wo_duplicate.push(suite_w_duplicate[i])
      }
    }
    return suite_wo_duplicate

  }


  // split tab with suites
  function finalArray(suite_wo_duplicate){
    let finalArray = []
    let temporaryArray = []

    for (let i = 0; i < suite_wo_duplicate.length; ++i) {
      if (i == 0) {
        temporaryArray.push(suite_wo_duplicate[i])
        continue
      }
      if(suite_wo_duplicate[i - 1] != (suite_wo_duplicate[i] - 1)) {
        finalArray.push(temporaryArray)
        temporaryArray = []
      }
      temporaryArray.push(suite_wo_duplicate[i])
    }
    finalArray.push(temporaryArray)

    return finalArray
  }

  //eliminate the suites below the desired number of hours
  function keep_good_number_of_hours(finalArray) {
    let result = []
    for(let i = 0; i <= finalArray.length-1; i++) {
      if(finalArray[i].length >= consecutive_limit_hourly) {
        result.push(finalArray[i])
      }
    }
    return result
  }


  // index with object
  function get_objects_for_indexes (result){
    let potential_leakage = []
    let temporaryArray = []
    for(let i = 0; i < result.length; i++) {
      result[i].forEach(x => temporaryArray.push(hourly_consumption[x]))
      potential_leakage.push(temporaryArray)
      temporaryArray = []
    }
    return potential_leakage
  }


  //Promises

  const get_potential_leakage = new Promise((resolve, reject) => {
    resolve(hourly_consumption)
  })

  get_potential_leakage
  .then((value) => {
    return only_consumption(value)
  })
  .then((value) => {
    return exceed_true(value)
  })
  .then((value) => {
    return only_true_index(value)
  })
  .then((value) => {
    return suite_w_duplicate(value)
  })
  .then((value) => {
    return suite_wo_duplicate(value)
  })
  .then((value) => {
    return finalArray(value)
  })
  .then((value) => {
    return keep_good_number_of_hours(value)
  })
  .then((value) => {
    return get_objects_for_indexes(value)
  })
  .then((value) => {
    console.log(value)
  })

  .catch((error) => {
    console.error(error)
  })


}

export default test
