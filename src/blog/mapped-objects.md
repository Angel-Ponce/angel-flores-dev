---
title: 'Mapped Objects'
author: 'Angel Flores'
date: 'Jun. 2026'
description: 'Know the advantages of grouping your data arrays into a dictionary (Mapped Object)'
slug: 'mapped-objects'
iconName: 'solar:code-file-bold-duotone'
---

## Let's start from scratch

Asume you have a entry data array from somewhere, example:

```typescript
export const data = [
  { id: 1, name: 'John', lastName: 'Doe' },
  { id: 2, name: 'Bill', lastName: 'Smith' },
  { id: 3, name: 'Jade', lastName: 'Li' },
  // and so on...
];
```

Next, try to access to the record with `id = 2`, if you are using any language (egg: JavaScript) you probably can do something like this:

```typescript
const record = data[2];
```

Next, try to access to the record with `name = 'Bill'`, it's essential the same idea as above, but a bit different:

```typescript
const record = data.find((item) => item.name === 'Bill');
```

This minimal difference becomes into a most of the common mistakes when working with `arrays`, because you're are executing a lineal searching over entry array, and that hurts performance. Now, imagine to execute a lineal search over a largest array multiple times (as normally happens when developing anything)

---

## The solution?

✨ Mapped Objects, it's a data structure to transform a entry array into a key based dictionary, example:

```typescript
export const data = [
  { id: 1, name: 'John', lastName: 'Doe' },
  { id: 2, name: 'Bill', lastName: 'Smith' },
  { id: 3, name: 'Jade', lastName: 'Li' },
  // and so on...
];

//dataByName or mappedData
const dataByName = {
  John: { id: 1, name: 'John', lastName: 'Doe' },
  Bill: { id: 2, name: 'Bill', lastName: 'Smith' },
  Jade: { id: 3, name: 'Jade', lastName: 'Li' },
};

//accessing to record with name = 'Bill'
const record = dataByName['Bill']; // { id: 2, name: 'Bill', lastName: 'Smith' }
```

That's it! now, you have a `indexed` data structure to accessing your array elements.

## How to get a Mapped Object?

Let me drop you an example to achieve any mapped object based on element keys.

```typescript
export type Mapped<Item extends Record<string, unknown>> = Record<
  string,
  Item | undefined
>;

export const getMappedObjects = <Item extends Record<string, unknown>>(
  items: Item[],
  key: keyof Item,
) =>
  items.reduce<Mapped<Item>>(
    (map, item) => ({ ...map, [`${item[key]}`]: item }),
    {},
  );
```

- • Duplicated keys will be overridden with the latest encountered key/value
- • As a indexed object, missing keys produces missing objects, this is the reason why `Mapped` type is a `Record<string, Item | undefined>`
- • `getMappedObjects` should be called once (to avoid travel entry array multiple times)

## Conclusion

Works with arrays it's pretty magic, but risk when length of arrays increases to much. When you handle your elements always try to add an `indexation` technique to improve your performance results.
