const sumNumbers = (a, b) => {
  return a + b
}

try {
  sumNumbers(1, 2)
} catch (error) {
  console.log(error)
}

// MM: toDM: I added this first example from the MDN docs, but I don't know if it's a good example because of use case for try/catch
