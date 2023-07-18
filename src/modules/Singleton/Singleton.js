import logger from 'logger'; // Importar el módulo de registro de eventos

const Singleton = (() => {
  let instance;

  class Singleton {
    constructor() {
      // Propiedades del Singleton
      this.name = "Singleton Instance";
      this.counter = 0;
      this.history = [];
    }

    incrementCounter() {
      this.counter++;
      this.history.push(`Incremented counter to ${this.counter}`);
      logger.info("Counter:", this.counter); 
    }

    decrementCounter() {
      this.counter--;
      this.history.push(`Decremented counter to ${this.counter}`);
      logger.info("Counter:", this.counter); 
    }

    resetCounter() {
      this.counter = 0;
      this.history.push("Reset counter");
      logger.info("Counter has been reset."); 
    }

    sayHello() {
      logger.log("Hello from", this.name); // Utilizar logger.log() en lugar de console.log()
    }

    setName(name) {
      this.name = name;
      logger.info("Name has been set to", name); 
    }

    multiplyCounter(factor) {
      this.counter *= factor;
      this.history.push(`Multiplied counter by ${factor} to ${this.counter}`);
      logger.info("Counter multiplied by", factor, "is", this.counter); 
    }

    divideCounter(divisor) {
      if (divisor !== 0) {
        this.counter /= divisor;
        this.history.push(`Divided counter by ${divisor} to ${this.counter}`);
        logger.info("Counter divided by", divisor, "is", this.counter); 
      } else {
        logger.error("Error: Division by zero is not allowed."); // Utilizar logger.error() en lugar de console.error()
      }
    }

    getHistory() {
      return [...this.history];
    }

    clearHistory() {
      this.history = [];
      logger.info("Counter history has been cleared."); 
    }
  }

  return {
    getInstance: function() {
      if (!instance) {
        instance = new Singleton();
      }
      return instance;
    }
  };
})();

export default Singleton;
