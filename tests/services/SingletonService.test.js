import SingletonService from './SingletonService';

describe('SingletonService', () => {
  let singletonService;

  beforeEach(() => {
    singletonService = SingletonService.getInstance();
  });

  afterEach(() => {
    singletonService.clearHistory();
  });

  it('should perform action', () => {
    singletonService.performAction();
    const history = singletonService.getHistory();
    expect(history).toHaveLength(1);
    expect(history[0]).toBe('Performed action');
  });

  it('should calculate sum', () => {
    const result = singletonService.calculateSum(3, 5);
    expect(result).toBe(8);
  });

  it('should set name', () => {
    const name = 'John Doe';
    singletonService.setName(name);
    expect(singletonService.getName()).toBe(name);
  });

  it('should throw error on division by zero', () => {
    expect(() => {
      singletonService.divideCounter(0);
    }).toThrow('Error: Division by zero is not allowed.');
  });

  it('should get history', () => {
    singletonService.performAction();
    singletonService.calculateSum(2, 3);
    const history = singletonService.getHistory();
    expect(history).toHaveLength(2);
    expect(history[0]).toBe('Performed action');
    expect(history[1]).toBe('Calculated sum of 2 and 3');
  });

  it('should clear history', () => {
    singletonService.performAction();
    singletonService.clearHistory();
    const history = singletonService.getHistory();
    expect(history).toHaveLength(0);
  });
});
