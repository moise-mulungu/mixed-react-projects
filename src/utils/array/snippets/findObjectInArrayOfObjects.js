//

// exercise:
// find the object that contains objectProperty1 has value of 3
// tip: array.find()
;[
  {
    objectProperty1: 1,
    objectProperty2: 2,
  },
  {
    objectProperty1: 3,
    objectProperty2: 4,
  },
].find((object) => object.objectProperty1 === 3)

// expected result:
// {
// 	objectProperty1: 3,
// 	objectProperty2: 4,
// }

// DM: todoMM: super, now add to the statement so that it resolves to the value of objectProperty2 (after you do this, I'll show you how to improve your constants file so that it has fewer "hard-coded" values)
// DM: todoMM: by this "add to the statement so that it resolves to the value of objectProperty2" I mean, get the value of objectProperty2. whoops, I meant this line to here, referring to the code below. task: find the value of objectProperty2
console.log(
  [
    {
      objectProperty1: 1,
      objectProperty2: 2,
    },
    {
      objectProperty1: 3,
      objectProperty2: 4,
    },
  ].find((object) => object.objectProperty1 === 3 && object.objectProperty2 === 4)
)
// expected result: 4

export const topNavSiteLinks = [
  { id: 'work', name: 'Portfolio', anchor: 'work' },
  { id: 'about', name: 'About', anchor: 'about' },
  { id: 'contact', name: 'Contact', anchor: 'contact' },
]
export const defaultTopNavSiteLinkId = topNavSiteLinks[0].id
