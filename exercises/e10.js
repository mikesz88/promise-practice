/**
 * MULTIPLE PROMISES: .all(), .any(), .allSettled(), .race()
 * Please, make sure to read the "10 Multiple-promises.md" file in exercise-info folder before you start!
 */

const promise1 = new Promise((res) => setTimeout(res, 4000, 'RESOLVED AGAIN'));
const promise2 = Promise.reject('Promise 2 REJECTED');
const promise3 = Promise.resolve('Promise 3 RESOLVED');
const promise4 = new Promise((res) => setTimeout(res, 3000, 'RESOLVED AGAIN'));
const promiseArr = [promise1, promise2, promise3, promise4];

/**
 * @task
 * Use a correct PROMISE shortcut that will log the caught error (reason) from promise2
 * when promiseArr was passed as the argument
 */

export const result1 = Promise.allSettled(promiseArr).then(
  (val) => val[1].reason
); // Your code here

/**
 * @task
 * Use a correct PROMISE shortcut that will log and return the resolved value of promise3;
 */

export const result2 = Promise.allSettled(promiseArr).then(
  (val) => val[2].value
); // Your code here

/**
 * @task
 * Use a correct PROMISE shortcut that will log and return an array of all promises statuses and values/reasons;
 */

export const result3 = Promise.allSettled(promiseArr).then((val) => val); // Your code here

/**
 * @task
 * update the initializer for the newPromiseArr so that the Promise logs and returns
 * the resolved value of promise4 ('RESOLVED AGAIN') with the Promise.race() method.
 * You can use any array methods you know.
 */

let newPromiseArr = [
  promise1,
  new Promise((res) => setTimeout(res, 4000, 'Promise 2 REJECTED')),
  new Promise((res) => setTimeout(res, 4000, 'Promise 3 RESOLVED')),
  Promise.resolve('RESOLVED AGAIN'),
];

export const result4 = Promise.race(newPromiseArr).then((data) => data);

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-10"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
