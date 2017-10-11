const callFunctionLargestTimes = function() {
  const args = Array.prototype.slice.call(arguments);
  const func = args[0];
  const callTimes = args.slice(1);
  const callXTimes = (f, x) => {
    if (x===0){return;}
    f();
    callXTimes(f, x-1);
  };
  callXTimes(func, Math.max(...callTimes));
}
module.export = { callFunctionLargestTimes };
