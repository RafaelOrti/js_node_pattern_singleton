import Logger from './Logger';

class SingletonUtil {
  constructor() {
    this.logger = Logger.getInstance();
  }

  static getInstance() {
    if (!SingletonUtil.instance) {
      SingletonUtil.instance = new SingletonUtil();
    }
    return SingletonUtil.instance;
  }

  method1() {
    this.logger.info('Ejecutando método 1 del SingletonUtil');
    this.sayHello();
    this.performAction();
    const result = this.calculateSum(3, 5);
    this.logger.info(`El resultado de la suma es: ${result}`);
  }

  method2() {
    this.logger.info('Ejecutando método 2 del SingletonUtil');
    this.sayGoodbye();
  }

  sayHello() {
    this.logger.info('¡Hola desde SingletonUtil!');
  }

  performAction() {
    this.logger.info('Realizando acción en SingletonUtil');
    // Código para realizar la acción
  }

  calculateSum(a, b) {
    this.logger.info(`Calculando la suma de ${a} y ${b}`);
    return a + b;
  }

  sayGoodbye() {
    this.logger.info('¡Adiós desde SingletonUtil!');
  }
}

const singletonUtil = SingletonUtil.getInstance();

export default singletonUtil;
