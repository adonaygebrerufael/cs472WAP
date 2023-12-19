console.log('start');
process.nextTick(() => {
console.log("this is process.nextTick 1");
setTimeout(() => console.log("this is setTimeout 1"), 0);
});
process.nextTick(() => console.log("this is process.nextTick 2"));
setImmediate(() => console.log("this is setImmediate"));
setTimeout(() => console.log("this is setTimeout 2"), 0);
console.log('end');
