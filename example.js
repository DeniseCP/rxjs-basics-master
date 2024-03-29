/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable object-curly-spacing */
import { asyncScheduler, from, of, range, scheduled } from 'rxjs';

// const observer = {
//     next: (value) => console.info('next', value),
//     // error: (error) => console.error('error', error),
//     // complete: () => console.log('complete'),
// };

// const observable = new Observable((subscriber) => {
//     // subscriber.next('Hello');
//     // eslint-disable-next-line max-len
//     // subscriber.error('Fuck'); /** example of an error - complete not reached */
//     // subscriber.complete();
//     let count = 0;
//     const id = setInterval(() => {
//         subscriber.next(count);
//         // subscriber.complete();
//         count++;
//     }, 1000);

//     return () => {
//         console.log('called');
//         clearInterval(id);
//     };
// });

// observable.subscribe(
//     (value) => console.info('next', value),
//     null,
//     () => console.info('complete'),
// );

// console.log('before');
// const subscription = observable.subscribe(observer);
// // console.log('after');

// const subscriptionTwo = observable.subscribe(observer);

// subscription.add(subscriptionTwo);

// setTimeout(() => {
//     subscription.unsubscribe();
//     // subscriptionTwo.unsubscribe();
// }, 3500);

// const hello = () => 'Hello World';


const observable = {
    next: (val) => console.log('next', val),
    error: (err) => console.log('error', err),
    complete: () => console.log('complete'),
};

const source$ = scheduled(
    fetch(
        'https://api.github.com/users/octocat',
    ), asyncScheduler);
source$.subscribe(observable);
// console.log(hello());

// const source$ = fromEvent(document, 'click');

// const subOne = source$.subscribe(observable);
// const subTwo = source$.subscribe(observable);

// setTimeout(() => {
//     console.log('unsubscribing');
//     subOne.unsubscribe();
//     subTwo.unsubscribe();
// }, 3000);
