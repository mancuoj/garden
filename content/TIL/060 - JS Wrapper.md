---
date: 2024-02-29
tags:
  - til
  - js
---

```js
let obj = {
  valueOf: function() {
    return 5;
  },
  toString: function() {
    return 'Hello';
  }
};

console.log(obj + 2); // 7
console.log(String(obj)); // 'Hello'
```

```js
var ArrayWrapper = function(nums) {
    this.nums = nums;
};

ArrayWrapper.prototype.valueOf = function() {
    return this.nums.reduce((a, b) => a + b, 0);
}

ArrayWrapper.prototype.toString = function() {
    return "[" + this.nums.join(',') + "]";
    // return `[${this.nums.toString()}]`
}
```

## Thanks

- [2695. 包装数组 - 力扣](https://leetcode.cn/problems/array-wrapper/)