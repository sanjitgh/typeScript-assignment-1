# TypeScript: Interfaces vs Types & The Power of `keyof`

Welcome to this TypeScript-focused blog where we explore some of the deeper concepts that make TypeScript a powerful tool for modern web development. In this post, we'll unravel:

1. The nuanced differences between **`interface`** and **`type`**
2. The usage and advantages of the **`keyof`** keyword in TypeScript


---

## 📌 Table of Contents

- [Interfaces vs Types](#interfaces-vs-types)
- [Understanding `keyof`](#understanding-keyof)
- [Code Examples](#code-examples)
- [Conclusion](#conclusion)

---

## Interfaces vs Types

At first glance, `interface` and `type` in TypeScript seem to serve the same purpose—defining the shape of data. However, they have subtle yet important differences.

### ✅ Use Cases for `interface`

- Preferred for defining object shapes.
- Supports extension via `extends` and declaration merging.
- Ideal when building libraries or public APIs.

```ts
interface User {
  id: number;
  name: string;
}

interface Admin extends User {
  role: string;
}
```
