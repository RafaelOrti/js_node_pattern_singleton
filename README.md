# Singleton Example

This is an implementation example of the Singleton design pattern in TypeScript.

## Description

The Singleton pattern is a creational design pattern that ensures only one instance of a class exists and provides a global access point to that instance. This pattern is often used in scenarios where having multiple instances of a class could lead to issues or inefficiencies.

Key characteristics of the Singleton pattern:

1. Private Constructor: The Singleton class has a private constructor, preventing direct instantiation of the class from outside.

2. Private Static Instance: The Singleton class holds a private static instance of itself, which is the only instance that exists throughout the application's lifetime.

3. Public Static Method: The Singleton class provides a public static method to access its instance. This method is usually named getInstance() and returns the unique instance of the class.

4. Lazy Initialization (optional): The instance of the Singleton class is typically created only when the getInstance() method is called for the first time, rather than eagerly creating it during class loading.

5. Thread Safety (optional): If the application is multithreaded, it's essential to handle potential race conditions during the instance creation process to ensure that only one instance is created.

In this example, we have implemented the Singleton using classes and static methods in JavaScript. We have created a `SingletonController` that acts as an interface to interact with an underlying Singleton, and a `SingletonUtil` that represents the actual Singleton with its own logic and properties.

## Installation

1. Clone this repository:

```shell
git clone <REPOSITORY_URL>
```
Install dependencies:
```shell
npm install
```
Usage
The usage of the Singleton is done through the SingletonController. You can import it and use its methods to interact with the underlying Singleton.

```shell
import SingletonController from './SingletonController';

const singletonController = SingletonController.getInstance();

singletonController.method1();
singletonController.method2();
```
Remember to adjust the code according to your specific needs and the available methods in your SingletonController.

## Testing
The project includes tests using the Jest testing framework. You can run the tests with the following command:

```shell
npm test
```
The tests verify the expected behavior of the methods in the SingletonController and SingletonUtil.

## Contribution
If you want to contribute to this project, you can follow these steps:

Fork the repository.
Create a new branch for your contribution.
Make your modifications.
Submit a pull request to the main branch.
## License
This project is under the MIT License. See the LICENSE file for more details.
