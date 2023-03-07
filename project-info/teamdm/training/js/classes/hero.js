// Terminal Game - Create Hero Prototype
// In this first kata in the series, you need to define a Hero prototype to be used in a terminal game. The hero should have the following attributes:
// attribute	value
// name:	user argument or 'Hero'
// position:	'00'
// health:	100
// damage:	5
// experience:	0
function Hero(name) {
  // this is the most simple solution, but I"m not sure, 
  // DM: todoMM: please copy the tests for this exercise from code-wars and any more information that might help know what the return value should be. 
  // Might need a JS Class to do this, but fyi a 'prototype' has a special meaning in JS, as part of the phrase "prototypal inheritance" JS's approach to object oriented programming. Let's set this aside for a later time.
  return {
    name,
    position: '00',
    health: 100,
    damage: 5,
    experience: 0,
  }
}
