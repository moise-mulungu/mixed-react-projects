// node project-info/teamdm/tech/javascript/object-transformation-exercises.js
// MM: very interesting exercise, i learnt a lot from them.

// for validating each exercise
function isDeepEqual(obj1, obj2) {
  if (obj1 === obj2) {
    return true
  }
  if (typeof obj1 !== 'object' || obj1 === null || typeof obj2 !== 'object' || obj2 === null) {
    return false
  }
  const keys1 = Object.keys(obj1)
  const keys2 = Object.keys(obj2)
  if (keys1.length !== keys2.length) {
    return false
  }
  for (let key of keys1) {
    if (!keys2.includes(key) || !isDeepEqual(obj1[key], obj2[key])) {
      return false
    }
  }
  return true
}

// example with solution
const student = { student_id: 223, grades: { math: 85, science: 90, history: 78 }, passed: 'yes' }
const studentTransformed = {
  studentId: student.student_id,
  // DM: this is a short howto. Note that it implies that the example is the working on the next line
  // howtojs:: get object values in an array
  gradeReport: Object.values(student.grades),
  passStatus: student.passed === 'yes', // MM: DM: was it necessary to strict compare to 'yes'? why not just student.passed? DM: strict equality is more readable, and what if student.passed is "no" which is truthy?(got it)
}
console.log({
  student,
  studentTransformed,
  correct: isDeepEqual(studentTransformed, {
    studentId: 223,
    gradeReport: [85, 90, 78],
    passStatus: true,
  }),
})

// EXERCISES

const productInventory = { item_number: 'SKU12345', description: 'blue jeans', qty_in_stock: 150 }
const productInventoryTransformed = {
  // your code here
  sku: productInventory.item_number,
  productDescription: productInventory.description,
  stockQuantity: productInventory.qty_in_stock,
}
console.log({
  productInventory,
  productInventoryTransformed,
  correct: isDeepEqual(productInventoryTransformed, {
    // here you can see the desired transformed object
    sku: 'SKU12345', // MM: DM: i didn't know its meaning at first - stock keeping unit DM: yeah, you run into such things when you work with data. now you know!
    productDescription: 'blue jeans',
    stockQuantity: 150,
  }),
})

const softwareBug = {
  bug_ID: 5678,
  severity: 'critical',
  description: 'Login page not loading',
  isOpen: 'yes',
}
const softwareBugTransformed = {
  // your code here
  bugId: softwareBug.bug_ID,
  severityLevel: softwareBug.severity[0].toUpperCase() + softwareBug.severity.slice(1),
  issueDescription: softwareBug.description,
  activeStatus: softwareBug.isOpen === 'yes', // MM: DM: i tried to omit the strict comparison to 'yes', then the validation failed; DM: === 'yes' is more readable and maintainable
}
console.log({
  softwareBug,
  softwareBugTransformed,
  correct: isDeepEqual(softwareBugTransformed, {
    bugId: 5678,
    severityLevel: 'Critical',
    issueDescription: 'Login page not loading',
    activeStatus: true,
  }),
})

const recipe = {
  recipe_num: 42,
  title: 'Chocolate Cake',
  ingredients: { flour: '2 cups', sugar: '1 cup', cocoa: '1/2 cup' },
  servings: 8,
}
const recipeTransformed = {
  // your code here
  recipeId: recipe.recipe_num,
  name: recipe.title,
  ingredientList: Object.entries(recipe.ingredients).map(
    ([ingredient, amount]) => `${amount} ${ingredient}`
  ),
  numberOfServings: recipe.servings,
}
console.log({
  recipe,
  recipeTransformed,
  correct: isDeepEqual(recipeTransformed, {
    recipeId: 42,
    name: 'Chocolate Cake',
    ingredientList: ['2 cups flour', '1 cup sugar', '1/2 cup cocoa'],
    numberOfServings: 8,
  }),
})

const flightInfo = {
  flight_no: 'AA123',
  status: 'on-time',
  departure_city: 'New York',
  arrival_city: 'London',
  seat_availability: 'high',
}
const flightInfoTransformed = {
  // your code here
  flightNumber: flightInfo.flight_no,
  flightStatus: flightInfo.status
    // remove dash from the string
    .replace(/-/g, ' ')
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' '),

  departure: flightInfo.departure_city,
  destination: flightInfo.arrival_city,
  seatsAvailable:
    flightInfo.seat_availability[0].toUpperCase() + flightInfo.seat_availability.slice(1),
}
console.log({
  flightInfo,
  flightInfoTransformed,
  correct: isDeepEqual(flightInfoTransformed, {
    flightNumber: 'AA123',
    flightStatus: 'On Time',
    departure: 'New York',
    destination: 'London',
    seatsAvailable: 'High',
  }),
})

const employeeDirectory = {
  employeeID: 102,
  roles: ['developer', 'designer'],
  departmentCode: 'D01',
  name: 'John Smith',
}
const employeeDirectoryTransformed = {
  // your code here
  employeeId: employeeDirectory.employeeID,
  roleCount: employeeDirectory.roles.length,
  // change the department code to "Design"
  // this line is interesting, i didn't expect this solution. DM: yeah, it is a readable solution.
  department: employeeDirectory.departmentCode === 'D01' ? 'Design' : 'Unknown',
  fullName: employeeDirectory.name,
}
console.log({
  employeeDirectory,
  employeeDirectoryTransformed,
  correct: isDeepEqual(employeeDirectoryTransformed, {
    employeeId: 102,
    roleCount: 2,
    department: 'Design',
    fullName: 'John Smith',
  }),
})

const libraryCatalog = {
  accession_no: 34567,
  title: 'The Great Gatsby',
  location: 'A3',
  is_checked_out: false,
}
const libraryCatalogTransformed = {
  // your code here
  catalogId: libraryCatalog.accession_no,
  bookTitle: libraryCatalog.title,
  shelfLocation: `Section ${libraryCatalog.location[0]}, Shelf ${libraryCatalog.location[1]}`,
  checkedOutStatus: libraryCatalog.is_checked_out ? 'Checked Out' : 'Available',
}
console.log({
  libraryCatalog,
  libraryCatalogTransformed,
  correct: isDeepEqual(libraryCatalogTransformed, {
    catalogId: 34567,
    bookTitle: 'The Great Gatsby',
    shelfLocation: 'Section A, Shelf 3',
    checkedOutStatus: 'Available',
  }),
})

const fitnessTracker = {
  user: 'JaneDoe',
  daily_steps: [12_530, 11_320, 13_220],
  goal_steps: 10_000,
}
const fitnessTrackerTransformed = {
  // your code here
  username: fitnessTracker.user,
  averageDailySteps:
    Math.round(
      fitnessTracker.daily_steps.reduce((acc, curr) => acc + curr, 0) /
        fitnessTracker.daily_steps.length //(done) DM: always provide a starting value for [].reduce // don't depend on default values // also it is more readable. MM: DM: i couldn't realize at first what you meant by "the starting value", i am used to "the initial value". DM: the "correct" term is whatever it says on mdn.com reduce article, but, yeah, "initial value" is more common.
    ) - 1,
  achievedGoalDays: fitnessTracker.daily_steps.filter((steps) => steps >= fitnessTracker.goal_steps)
    .length,
}
console.log({
  fitnessTracker,
  fitnessTrackerTransformed,
  correct: isDeepEqual(fitnessTrackerTransformed, {
    username: 'JaneDoe',
    averageDailySteps: 12_356,
    achievedGoalDays: 3,
  }),
})

//(done) DM: finish the REST of these using deconstructing assignment with renaming variables and shorthand property names instead of the property access ("dot") operator EX fitnessTracker.user. We will discuss later which one is better, pros and cons.

const vehicleRegistration = {
  plateNumber: 'ABC123',
  vehicleTypeCode: '2A',
  registeredTo: 'John Doe',
  validThrough: '2023-12-31',
}

const {
  plateNumber: licensePlate,
  vehicleTypeCode,
  registeredTo: ownerName,
  validThrough,
} = vehicleRegistration
const vehicleRegistrationTransformed = {
  licensePlate,
  vehicleType: vehicleTypeCode === '2A' ? 'Sedan' : 'Unknown',
  ownerName,
  registrationExpiry: new Date(validThrough).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }), // MM: DM: creating a new Date object with validThrough and then using toLocaleDateString() to format the date. awesome answer from copilot!
  //(done) DM: todoMM: create a howtojs for this. whenever you get that feeling like you expressed in your comment above, create a howtojs. To help properly phrase your howtojs, you can ask AI to describe what the line does.
}

// howtojs:: javascript: convert a date string into a given format; create a new Date object with a given property and then use toLocaleDateString() to format the date to a given format
console.log({
  vehicleRegistration,
  vehicleRegistrationTransformed,
  correct: isDeepEqual(vehicleRegistrationTransformed, {
    licensePlate: 'ABC123',
    // (great!)DM: now you know this was created by AI. There is no way to derive "Sedan" from "2A" without a lookup table. AI left out that important part. What will you do? Sometimes at work you will be given poor instructions, or data can have errors. What will you do ≈≈≈ "sedan" if you have to complete an exercise but can't ask anyone for clarification? DM: there was a question for you in there. How would you handle the situation?(MM: if i can't ask anyone for clarification, i would start by searching on Google, then try to use my own assumptions to finding the answer, then test it. once my attempted assumptions lead to nothing i would finally ask to someone else.)
    vehicleType: 'Sedan',
    ownerName: 'John Doe',
    registrationExpiry: 'December 31, 2023',
  }),
})

const userAccountStatus = {
  userId: 78910,
  accountTypeCode: 'SV',
  statusIndicator: '1',
  userName: 'JaneSmith',
}

const {
  userId: accountId,
  accountTypeCode,
  statusIndicator,
  userName: userDisplayName,
} = userAccountStatus

const userAccountStatusTransformed = {
  // your code here
  accountId,
  accountType: accountTypeCode === 'SV' ? 'Savings' : 'Unknown',
  accountStatus: statusIndicator === '1' ? 'Active' : 'Inactive',
  userDisplayName,
}
console.log({
  userAccountStatus,
  userAccountStatusTransformed,
  correct: isDeepEqual(userAccountStatusTransformed, {
    accountId: 78910,
    accountType: 'Savings',
    accountStatus: 'Active',
    userDisplayName: 'JaneSmith',
  }),
})

const employeeTaskAssignment = {
  employeeId: 456,
  taskId: 'T123',
  taskList: { T123: 'Inventory Audit', T124: 'Sales Report', T125: 'Market Analysis' },
}

const { employeeId, taskId, taskList } = employeeTaskAssignment
const employeeTaskAssignmentTransformed = {
  employeeId,
  currentTask: taskList[taskId],
}
console.log({
  employeeTaskAssignment,
  employeeTaskAssignmentTransformed,
  correct: isDeepEqual(employeeTaskAssignmentTransformed, {
    employeeId: 456,
    currentTask: 'Inventory Audit',
  }),
})

const bookGenreClassification = {
  isbn: '978-3-16-148410-0',
  genreCode: 'NF',
  genreMap: { F: 'Fiction', NF: 'Non-Fiction', SF: 'Science Fiction' },
}

const { isbn, genreCode, genreMap } = bookGenreClassification
const bookGenreClassificationTransformed = {
  isbn,
  bookGenre: genreMap[genreCode],
}

console.log({
  bookGenreClassification,
  bookGenreClassificationTransformed,
  correct: isDeepEqual(bookGenreClassificationTransformed, {
    isbn: '978-3-16-148410-0',
    bookGenre: 'Non-Fiction',
  }),
})
