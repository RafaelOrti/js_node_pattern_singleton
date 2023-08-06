# Singleton Example

This is an implementation example of the Singleton design pattern in TypeScript.

## Description

The Singleton design pattern is used to ensure that there is only one instance of a particular class throughout the program. This can be useful when you want to have a single point of access to a shared functionality or resource.

In this example, we have implemented the Singleton using classes and static methods in JavaScript. We have created a `SingletonController` that acts as an interface to interact with an underlying Singleton, and a `SingletonUtil` that represents the actual Singleton with its own logic and properties.

## Installation

1. Clone this repository:

```shell
git clone <REPOSITORY_URL>
```
Install dependencies:
```
npm install```
Usage
The usage of the Singleton is done through the SingletonController. You can import it and use its methods to interact with the underlying Singleton.

```
import SingletonController from './SingletonController';

const singletonController = SingletonController.getInstance();

singletonController.method1();
singletonController.method2();```
Remember to adjust the code according to your specific needs and the available methods in your SingletonController.

## Testing
The project includes tests using the Jest testing framework. You can run the tests with the following command:

```
npm test```
The tests verify the expected behavior of the methods in the SingletonController and SingletonUtil.

## Contribution
If you want to contribute to this project, you can follow these steps:

Fork the repository.
Create a new branch for your contribution.
Make your modifications.
Submit a pull request to the main branch.
## License
This project is under the MIT License. See the LICENSE file for more details.
