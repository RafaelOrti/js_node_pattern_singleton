
# Singleton Example

Este es un ejemplo de implementación del patrón de diseño Singleton en TypesScript.

## Descripción

El patrón de diseño Singleton se utiliza para garantizar que solo haya una instancia de una clase determinada en todo el programa. Esto puede ser útil cuando se desea tener un único punto de acceso a una funcionalidad o recurso compartido.

En este ejemplo, hemos implementado el Singleton utilizando clases y métodos estáticos en JavaScript. Se ha creado un SingletonController que actúa como una interfaz para interactuar con un Singleton subyacente, y un SingletonUtil que representa el Singleton real con su propia lógica y propiedades.

## Instalación

1. Clona este repositorio:

   ```shell
   git clone <URL_DEL_REPOSITORIO>
   ```
Instala las dependencias:

   ```shell
   npm install
   ```
Uso
El uso del Singleton se realiza a través del SingletonController. Puedes importarlo y utilizar sus métodos para interactuar con el Singleton subyacente.

   ```shell
   import SingletonController from './SingletonController';
   
   const singletonController = SingletonController.getInstance();
   
   singletonController.method1();
   singletonController.method2();
   ```
Recuerda ajustar el código según tus necesidades específicas y los métodos disponibles en tu SingletonController.

Pruebas
El proyecto incluye pruebas utilizando el framework de pruebas Jest. Puedes ejecutar las pruebas con el siguiente comando:

   ```shell
   npm test
   ```
Las pruebas verifican el comportamiento esperado de los métodos del SingletonController y del SingletonUtil.

Contribución
Si deseas contribuir a este proyecto, puedes seguir los siguientes pasos:

Haz un fork del repositorio.
Crea una nueva rama para tu contribución.
Realiza tus modificaciones.
Realiza un pull request a la rama principal.
Licencia
Este proyecto está bajo la Licencia MIT. Ver el archivo LICENSE para más detalles.



