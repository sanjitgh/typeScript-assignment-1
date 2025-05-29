## 1. What are some differences between interfaces and types in TypeScript?

TypeScript offers both `interface` and `type` aliases to describe the shape of an object or a data structure. While they often overlap in use cases, there are several subtle differences between the two.

### ✅ Interface

An `interface` defines the structure (shape) of an object. It is mostly used to describe objects, especially when working with classes.

```ts
interface User {
  name: string;
  age: number;
}

interface Admin extends User {
  role: string;
}

const adminUser: Admin = {
  name: "Alice",
  age: 30,
  role: "Manager",
};
```

### ✅ Type

A `type` alias can define a type for almost anything: objects, primitives, functions, arrays, unions, and more.

```ts
type Product = {
  id: number;
  name: string;
  price: number;
};

const product: Product = {
  id: 101,
  name: "Camera",
  price: 499,
};
```

## 1. Example of using union and intersection types in TypeScript.

A union type allows a value to be one of multiple types. It's useful when something can be more than one type, but not all at once & An intersection type combines multiple types into one. The resulting type has all the properties of the combined types.

### ✅ Union Type `(|)`

A union type means a variable can hold one of several types.

```ts
type Dog = {
  bark: () => void;
};

type Cat = {
  meow: () => void;
};

// Animal can be either a Dog or a Cat
type Animal = Dog | Cat;

const pet: Animal = {
  meow: () => console.log("Meow"),
};
```

In this case, `pet` can be either a Dog or a Cat — not both.

### ✅ Intersection Type `(&)`

An intersection type means combining multiple types into one type with all properties.

```ts
type Person = {
  name: string;
};

type Employee = {
  employeeId: number;
};

type Staff = Person & Employee;

const worker: Staff = {
  name: "Sanjit",
  employeeId: 1234,
};
```

Here, `worker` must satisfy both `Person` and `Employee.`
