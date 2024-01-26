---
date: 2024-01-26
---


## 计数器

![[Pasted image 20240126224150.png]]

最初值为零，每次单击按钮值加一。

## 温度转换器

![[Pasted image 20240126224240.png]]

摄氏度与华氏度的互相转换，公式 `C = (F-32) - (5/9)`，左边输入右边自动更新，反之亦然。


## 航班预定


![[Pasted image 20240126224428.png]]

一个选择框，包含单程和返程两个选项，两个日期是起止时间，单击按钮提示用户预定信息。

选择返程选项，第二个日期启用，当第二个日期时间早于第一个时间时，显示红色，Book 按钮被禁用。

默认选项为单程，相同日期。

## 计时器

![[Pasted image 20240127010830.png]]

已过去时间 e 的进度条和标签，调整计时器总时间 d 的滑块，拖动滑块会立即显示到进度条上。

d <= e 时，进度条满，计时停止；d > e 时，开始计时，直到 d = e 结束。

点击 Reset 按钮将 e 重置为零。


## CRUD

![[Pasted image 20240127011624.png]]




## Thanks

- [7GUIs](https://eugenkiss.github.io/7guis/tasks/#counter)
- [Task 1: Counter | XState Docs](https://xstate.js.org/docs/tutorials/7guis/counter.html)
- [Learning React State Manager Jotai With 7GUIS Tasks](https://blog.axlight.com/posts/learning-react-state-manager-jotai-with-7guis-tasks/)

