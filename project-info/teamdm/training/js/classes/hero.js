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
// howtojs: classes: basic "constructor function", i.e., without using the 'class' keyword, callable via the 'new' operator
function Hero(name) {
  this.name = name || 'Hero'
  this.position = '00'
  this.health = 100
  this.damage = 5
  this.experience = 0
}
myHero = new Hero()
myHero.name === 'Hero' // true
new Hero('Greg').name === 'Greg' // true
new Hero('Greg').position === '00' // true
// DM: that's how it's done, but let's leave JS OOP for later, it's one of those things you should know about, but not learn. better to use functional programming, as does React since hooks no longer use "class components"
