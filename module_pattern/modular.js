let myFunc = (function () {
  const log = (notAMessage) => console.log(`[${Date.now()}] Logger: ${notAMessage}`)

  const makeUppercase = (text) => {
    log("Making uppercase");
    return text.toUpperCase();
  };
  
  return { 
    makeUppercase,
  }

})()  


const Formatter = (function() {
  let timesRun = 0;

  const log = (message) => console.log(`[${Date.now()}] Logger: ${message}`);
  const setTimesRun = () => { 
    log("Setting times run");
    ++timesRun;
  }

  const makeUppercase = (text) => {
    log("Making uppercase");
    setTimesRun();
    return text.toUpperCase();
  };

  return {
    makeUppercase,
    timesRun,
  }
})();


Formatter.timesRun = 10;
console.log(Formatter.makeUppercase("Hello"))
console.log(Formatter.timesRun)