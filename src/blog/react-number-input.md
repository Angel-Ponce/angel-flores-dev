---
title: 'React Number Input'
author: 'Angel Flores'
date: 'Jun. 2026'
description: 'Handling native number input events as well'
slug: 'react-number-input'
iconName: 'logos:react'
---

## The number input

Number inputs are essentially natural when working with React applications, let's learn how to handle it properly. There is a common mistake to fall when working with controlled number inputs:

```tsx
//The ideal component, number inputs are equivalent to number states

const [value, setValue] = useState<number>(0);

return (
  <input
    type="number"
    value={value}
    onChange={(event) => setValue(+event.currentTarget.value)}
  />
);
```

**❌ Wrong!!** Number inputs needs `number | null` or `number | ""` states to handle empty inputs properly, if you restrict your state you will never clear your input.

## The proposal

Do you remember to `NaN` value??, yessssss, thats the perfect solution! but, why?

```tsx
console.log(typeof NaN); // "number", so...

const [value, setValue] = useState<number>(NaN);

return (
  <input
    type="number"
    // ✨ Magic
    value={isNaN(value) ? '' : value}
    // ✨ Magic
    onChange={(event) => setValue(event.currentTarget.valueAsNumber)}
  />
);
```

With this simple but powerful trick you will boost your code experience when working with number inputs in React, directly advantages:

```tsx
// 1. Your declarations keeps pretty

type Person = {
  name: string;
  age: number; //you don't need to override this to handle empty inputs
};

const [person, setPerson] = useState({ name: '', age: NaN });

console.log(typeof person.age); // `age` always is a number type

return (
  <form>
    <input
      value={person.name}
      onChange={(event) =>
        setPerson((person) => ({ ...person, name: event.currentTarget.value }))
      }
    />

    <input
      type="number"
      value={isNaN(person.age) ? '' : person.age}
      onChange={(event) =>
        setPerson((person) => ({
          ...person,
          age: event.currentTarget.valueAsNumber,
        }))
      }
    />
  </form>
);
```

```typescript
// 2. It's is backend/validation friendly

type Person = {
  name: string;
  age: number;
};

const person: Person = { name: 'Angel', age: NaN };

console.log(JSON.stringify(person)); // "{ "name": "Angel", "age": null }"

//null commonly mean an empty value
```

## Conclusions

Trick 1, use `NaN` as number empty value

```tsx
const [value, setValue] = useState<number>(NaN);
```

Trick 2, allow your inputs to be free

```tsx
<input value={isNaN(value) ? '' : value} />
```

Trick 3, always use `valueAsNumber`

```tsx
<input onChange={(event) => setValue(event.currentTarget.valueAsNumber)} />
```

Trick 4, consider `NaN` as `null` or `undefined` o `""` value when validate

```typescript
const isEmpty = (value: unknown) =>
  value === null || value === undefined || value === '' || value === NaN;

console.log(isEmpty(NaN)); //true
console.log(isEmpty('')); //true
console.log(isEmpty(null)); //true
console.log(isEmpty(undefined)); //true
console.log(isEmpty(12)); //false
console.log(isEmpty('Angel')); //false
```
