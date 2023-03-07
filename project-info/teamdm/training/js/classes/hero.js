// const { assert } = require('chai');
// describe('hero class', () => {
//  it('should create a hero', () => {
//    let myHero = new Hero()
//    assert.strictEqual(
//      myHero.name,
//      'Hero',
//      'Hero should have a \'name\' attribute with value "Hero"'
//    )
//    assert.strictEqual(
//      myHero.experience,
//      0,
//      "Hero should have an 'experience' attribute with value 0"
//    )
//    assert.strictEqual(myHero.health, 100, "Hero should have a 'health' attribute with value 100")
//    assert.strictEqual(
//      myHero.position,
//      '00',
//      'Hero should have a \'position\' attribute with value "00"'
//    )
//    assert.strictEqual(myHero.damage, 5, "Hero should have a 'damage' attribute with value 5")
//  })
//   it('should use name argument', () => {
//     assert.strictEqual(
//       new Hero('Greg').name,
//       'Greg',
//       'Hero Greg should have a \'name\' attribute with value "Greg"'
//     )
//   })
// });

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
