---
date: 2024-01-28
tags:
  - java
---

我的目的是速成然后直接上 Spring Boot 3 做一个简单的 CRUD 项目，总结了一下前置要求：

- Beginner Java Experience
- Java 17 JDK
- Java Build Tools (Maven or Gradle) 更推荐 Maven

## Install in WSL2

```sh
sudo apt update
sudo apt search jdk
sudo apt install openjdk-17-jdk
java --version
javac --version
```

JDK 也就是 Java Development Kit，包含代码编译器 JAVAC 和运行环境 JRE 等其他工具。

JAVAC 会将 .java 文件编译成 .class 字节码文件，然后交给 JRE 执行，这时 JRE 中的 JVM 会将字节码文件转换为不同计算机设备上的机器码执行，这也是 Java 可以跨平台运行的关键原因。

## Hello World

首先安装 VS Code 和其中的 Extension Pack for Java 插件。

创建我们的第一个 `HelloWorld.java` 文件：

- 每个文件都由类构成，类名称与文件名称相同
- 固定格式的 main 方法，也是程序的入口
- `javac HelloWorld.java` 编译成字节码文件
- `java HelloWorld` 运行字节码文件
- 你也可以通过 VS Code 插件在 main 方法上的 Run 命令来直接运行

```java
class HelloWorld {
  public static void main(String[] args) {
    System.out.println("Hello, World!");
  }
}
```


## 变量

```java
int num1 = 5;
double num2 = 10.2;
double num3;
num3 = 11.1;

final int num4 = 10;  // 不可变

char letter = 'D';
boolean bool = true;
String site = "mancuoj.me";
// Other types: byte short long float

int[] a1;
int[] a2 = {1, 2, 3};
int[] a3 = new int[]{1, 2, 3};

int[] a4 = new int[3];
a4[0] = 1;
a4[2] = 2;
a4[3] = 3;
```

## 运算





## Thanks

- [10分钟速成Java 送你的2024新年礼物](https://www.bilibili.com/video/BV1Ee411H7mT/?vd_source=4da426ef9b0e129787ecf66363321458)
- [Spring Boot Tutorial for Beginners - 2023 Crash Course using Spring Boot 3 - YouTube](https://www.youtube.com/watch?v=UgX5lgv4uVM)
- [Java Cheat Sheet & Quick Reference](https://quickref.me/java.html)