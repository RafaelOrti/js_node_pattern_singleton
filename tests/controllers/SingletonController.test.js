import SingletonController from './SingletonController';

describe('SingletonController', () => {
  let singletonController;

  beforeEach(() => {
    singletonController = SingletonController.getInstance();
  });

  afterEach(() => {
    singletonController.clearHistory();
  });

  it('should increment counter', () => {
    singletonController.incrementCounter();
    expect(singletonController.getCounter()).toBe(1);
  });

  it('should decrement counter', () => {
    singletonController.decrementCounter();
    expect(singletonController.getCounter()).toBe(-1);
  });

  it('should reset counter', () => {
    singletonController.incrementCounter();
    singletonController.resetCounter();
    expect(singletonController.getCounter()).toBe(0);
  });

  it('should set name', () => {
    const name = 'John Doe';
    singletonController.setName(name);
    expect(singletonController.getName()).toBe(name);
  });

  it('should multiply counter', () => {
    singletonController.incrementCounter();
    singletonController.multiplyCounter(5);
    expect(singletonController.getCounter()).toBe(5);
  });

  it('should divide counter', () => {
    singletonController.incrementCounter();
    singletonController.divideCounter(2);
    expect(singletonController.getCounter()).toBe(0.5);
  });

  it('should throw error on divide by zero', () => {
    expect(() => {
      singletonController.divideCounter(0);
    }).toThrow('Error: Division by zero is not allowed.');
  });

  it('should get history', () => {
    singletonController.incrementCounter();
    singletonController.decrementCounter();
    const history = singletonController.getHistory();
    expect(history).toHaveLength(2);
    expect(history[0]).toBe('Incremented counter to 1');
    expect(history[1]).toBe('Decremented counter to 0');
  });

  it('should clear history', () => {
    singletonController.incrementCounter();
    singletonController.clearHistory();
    const history = singletonController.getHistory();
    expect(history).toHaveLength(0);
  });
});
