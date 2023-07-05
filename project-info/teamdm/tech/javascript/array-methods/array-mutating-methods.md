# mutating Array methods: (mnemonic: cf ppsu rss)

- copyWithin
- fill
- pop push shift unshift
- reverse
- sort
- splice

note: mutating array methods are used:

```js
myArray.sort()
myArray.forEach()
```

whereas non-mutating array methods, the result is assigned to a new variable

```js
const myNewArray = myArray.map((elem) => elem ** 2)
```

(cool!)
