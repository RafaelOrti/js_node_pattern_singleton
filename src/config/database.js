// database.js

const mongoose = require('mongoose');
const logger = require('logger'); // Ejemplo de módulo de registro de eventos

const Database = {
  connect: async (connectionString) => {
    try {
      await mongoose.connect(connectionString, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // Otras opciones de configuración de mongoose
      });
      logger.info('Conexión a la base de datos establecida');
    } catch (error) {
      logger.error('Error al conectar a la base de datos:', error);
      process.exit(1); // Salir de la aplicación si no se puede conectar a la base de datos
    }
  },

  disconnect: async () => {
    try {
      await mongoose.disconnect();
      logger.info('Conexión a la base de datos cerrada');
    } catch (error) {
      logger.error('Error al cerrar la conexión a la base de datos:', error);
      process.exit(1); // Salir de la aplicación si no se puede cerrar la conexión a la base de datos
    }
  }
};

module.exports = Database;
