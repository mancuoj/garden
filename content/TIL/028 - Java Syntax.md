---
date: 2024-01-28
tags:
  - til
  - java
---

My goal is to quickly learn and then dive into building a simple CRUD project with Spring Boot 3.

Here's a summary of the prerequisites:

- Beginner Java Experience
- Java 17 JDK
- Java Build Tools (Maven or Gradle), with a preference for Maven

## Install in WSL2

```sh
sudo apt update
sudo apt search jdk
sudo apt install openjdk-17-jdk
java --version
javac --version
```

JDK stands for Java Development Kit, which includes the code compiler JAVAC and other tools like the runtime environment JRE.

JAVAC compiles `.java` files into `.class` bytecode files, which are then executed by JRE. The Java Virtual Machine (JVM) in JRE translates bytecode into machine code for execution on different computer devices, enabling Java's cross-platform capabilities.

## Hello World

Firstly, install VS Code and Extension Pack for Java.

Create our first `HelloWorld.java` file:

- Each file consists of a class with a name matching the file
- A fixed-format main method, which is the program's entry point
- Compile with `javac HelloWorld.java` to generate bytecode
- Run with `java HelloWorld` to execute the bytecode
- Alternatively, use the Run command on the main method via the VS Code extension

```java
class HelloWorld {
  public static void main(String[] args) {
    System.out.println("Hello World");
  }
}
```

## Types and Variables

```java
int num1 = 5;
double num2 = 10.2;
double num3;
num3 = 11.1;

final int num4 = 10;  // immutable

char letter = 'D';
boolean bool = true;
String site = "mancuoj.me";
// other types: byte short long float
```

```java
int[] a1;
int[] a2 = {1, 2, 3};
int[] a3 = new int[]{1, 2, 3};

int[] a4 = new int[3];
a4[0] = 1;
a4[2] = 2;
a4[3] = 3;
```

## Flow Control

```java
int k = 15;
if (k > 20) {
  System.out.println(1);
} else if (k > 10) {
  System.out.println(2);
} else {
  System.out.println(3);
}
// switch case and ternary operator ? : are also available
```

```java
int[] numbers = {1,2,3,4,5};
for (int i = 0; i < 5; i++) {
  System.out.print(numbers[i]);
}

// or
for (int number: numbers) {
  System.out.print(number);
}

// break and continue are also available
```

```java
int count = 0;

while (count < 5) {
  System.out.print(count);
  count++;
}
// do-while loop is also available
```

Exception control with `try`, `catch`, and `finally` is also present. Let's stick to the basic syntax for now.

Object-oriented concepts such as classes, constructors, inheritance, polymorphism, overloading, and overriding have extensive discussions, but I'll keep it brief.

## Thanks

- [10分钟速成Java 送你的2024新年礼物](https://www.bilibili.com/video/BV1Ee411H7mT/?vd_source=4da426ef9b0e129787ecf66363321458)
- [Spring Boot Tutorial for Beginners](https://www.youtube.com/watch?v=UgX5lgv4uVM)
- [Java Cheat Sheet & Quick Reference](https://quickref.me/java.html)
