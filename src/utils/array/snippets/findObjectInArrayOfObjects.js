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
