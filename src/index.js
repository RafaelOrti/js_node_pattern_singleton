import SingletonUtil from './SingletonUtil';

(async () => {
  try {
    const singletonUtil = SingletonUtil.getInstance();

    // Realizar acciones utilizando el SingletonUtil
    singletonUtil.method1();
    singletonUtil.method2();
  
    // Obtener el historial del SingletonUtil
    const history = singletonUtil.getHistory();
    console.log('Historial del SingletonUtil:');
    history.forEach((item, index) => {
      console.log(`[${index + 1}] ${item}`);
    });
  
    // Limpiar el historial del SingletonUtil
    singletonUtil.clearHistory();
    console.log('Historial del SingletonUtil ha sido limpiado.');
  } catch (error) {
    console.error('Error:', error.message);
  }
})();
