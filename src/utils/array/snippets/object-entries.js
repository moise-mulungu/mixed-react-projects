const object1 = {
  a: 'some string',
  b: 42,
  c: false,
}

for (const [key, value] of Object.entries(object1)) {
  console.log(`${key}: ${value}`)
}

// Expected output:
// "a: some string"
// "b: 42"
// "c: false"
