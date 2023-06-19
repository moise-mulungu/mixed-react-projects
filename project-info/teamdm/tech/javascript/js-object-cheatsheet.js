
// object examples
{} // empty object
{ key: 'value', key2: 'value2' }

// vocabulary:
// key is called an "object property name" or "object member name"
// value is called a "property value" or "member value" 
// "member" is a new vocab at MDN, I don't like it, everyone says "property" ... I think MDN are trying to appeal to OOP (Java) programmers who are accustomed to "objects" having "members".

// properties are always strings (use a Map if you want other data types as properties)
// but you don't have to use quotes

// create an object:
const myObj = {key: 'value', number: 1} // {key: 'value', number: 1} is an "object literal" created using "object literal syntax"

// mutate the object while adding a new property
myObj.key2 = 'value2'
// increment an existing object value
myObj.number++
// - or -
myObj.number = myObj.number + 1
// use a property name that contains non-alphaNum characters; cannot use the "property access operator" ".", rather must use the "computed property access operator" "[]"
myObj[' I am a %@#$ string!'] = 'value'
// use a property name that is stored in a variable (strings only)
const myNewPropertyName = 'pretend I am a dynamic value'
myObj[myNewPropertyName] = 'value'
// with "computed property access operator", you can put any expression inside the []
const funcThatReturnsSTring = () => 'from funcThatReturnsSTring'
myObj[funcThatReturnsSTring() + ' huzzah!'] = 'value'
// complex object value
myObj.array = [1, 2]
myObj.obj = {a: 'b'}
const myNewPropertyName = 'pretend I am a dynamic value'

// define an "object literal" with all those examples
const myObjLiteral = {
	key: 'value', 
	number: 1,
  key2: 'value2',
  [' I am a %@#$ string!']: 'value',
  [myNewPropertyName]: 'value',
  [funcThatReturnsSTring() + ' huzzah!']: 'value',
}

// not an "object literal"
const notObjectLiteral = new Object() // using the built-in object constructor function
notObjectLiteral.key = 'value'


