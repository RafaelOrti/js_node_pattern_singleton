import Singleton from './singleton';

class SingletonController {
  constructor() {
    this.singleton = Singleton.getInstance();
  }

  incrementCounter() {
    this.invokeSingletonMethod('incrementCounter');
  }

  decrementCounter() {
    this.invokeSingletonMethod('decrementCounter');
  }

  resetCounter() {
    this.invokeSingletonMethod('resetCounter');
  }

  sayHello() {
    this.invokeSingletonMethod('sayHello');
  }

  setName(name) {
    this.invokeSingletonMethod('setName', name);
  }

  multiplyCounter(factor) {
    this.invokeSingletonMethod('multiplyCounter', factor);
  }

  divideCounter(divisor) {
    this.invokeSingletonMethod('divideCounter', divisor);
  }

  getHistory() {
    return this.singleton.getHistory();
  }

  clearHistory() {
    this.singleton.clearHistory();
  }

  invokeSingletonMethod(methodName, ...args) {
    const method = this.singleton[methodName];
    if (typeof method !== 'function') {
      throw new Error(`Method '${methodName}' does not exist on Singleton.`);
    }

    return method.apply(this.singleton, args);
  }
}

const singletonController = new SingletonController();

export default singletonController;

