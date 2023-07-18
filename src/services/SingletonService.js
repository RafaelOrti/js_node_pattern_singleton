import Singleton from './singleton';

class SingletonService {
  constructor() {
    this.singleton = Singleton.getInstance();
  }

  incrementCounter() {
    this.singleton.incrementCounter();
  }

  decrementCounter() {
    this.singleton.decrementCounter();
  }

  resetCounter() {
    this.singleton.resetCounter();
  }

  sayHello() {
    this.singleton.sayHello();
  }

  setName(name) {
    this.singleton.setName(name);
  }

  multiplyCounter(factor) {
    this.singleton.multiplyCounter(factor);
  }

  divideCounter(divisor) {
    this.singleton.divideCounter(divisor);
  }

  getHistory() {
    return [...this.singleton.getHistory()];
  }

  clearHistory() {
    this.singleton.clearHistory();
  }
}

const singletonService = new SingletonService();

export default singletonService;
