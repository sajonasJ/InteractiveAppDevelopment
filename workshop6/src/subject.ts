// define a class Subject
class Subject {
    callbacks;
    constructor() { this.callbacks = []; }
    subscribe(fn) { this.callbacks.push(fn); }                              //?subscribe(FUNCTION)push to callbacks
    publish(data) { this.callbacks.foreach(fn => fn(data)); }               //?publish(DATA) foreach data call Functions
}

const subject = new Subject();

// set when to publish data
for (let i = 0; i < 5; i++) {                                               //? RUN 5 TIMES
    setTimeout(() => {
        subject.publish('data' + i);                                        //?data1-5 published 1-5
        console.log(`data ${i} published ${i} and half seconds after`);
    }, 500 + 1000 * i);                                                      //?increment delay by 500s
}

// given 3 observers
const observer1 = (data) => console.log(`Observer1 recieved data: $(data)`);//? Function to do console.log observer
const observer2 = (data) => console.log(`Observer2 recieved data: $(data)`);//? Recieved data
const observer3 = (data) => console.log(`Observer3 recieved data: $(data)`);

// observer 1 and 2 subscribe subject 1 and 2 seconds after, respectively.
setTimeout(() => {                                       
    subject.subscribe(observer1);
    console.log("observer1 subscribes 1 second after")
}, 1000);

setTimeout(() => {
    subject.subscribe(observer2);
    console.log("observer2 subscribes 2 second after")
}, 2000);                                                                     //?DElay after 1st data is published

// data 0 published 0 and half seconds after
// data 1 published 1 and half seconds after
// data 2 published 2 and half seconds after
// data 3 published 3 and half seconds after
// data 4 published 4 and half seconds after
// observer1 subscribes 1 second after
// observer2 subscribes 2 second after
// Observer1 recieved data: data0
// Observer1 recieved data: data1
// Observer2 recieved data: data2
// Observer1 recieved data: data2
// Observer2 recieved data: data3
// Observer1 recieved data: data3
// Observer2 recieved data: data4
// Observer1 recieved data: data4
// Observer2 recieved data: data5
// Observer1 recieved data: data5
