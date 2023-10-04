# Naming: terms, prefixes, suffixes

## with
withVowelsCapitalized

## breaking up a growing <Input/> component into named sub-components
```jsx
<InputContainer ...props> 
  <InputLabel ...props /> 
  <InputLeftAddon ...props /> 
  <InputControl ...props /> 
  <InputRightAddon ...props />
</InputContainer>
```

## local
localFilteredData - used to accumulate data before setFitleredData

## go
goPlayVideo - prepend 'go' to verb names for an alternative name

## dirty
```js
// assumes you're going to validate/correct the options passed as an argument
function toDate(argument, dirtyOptions) { /*  */ }
```

DM: Moise: I have many more in my own collection of naming terms