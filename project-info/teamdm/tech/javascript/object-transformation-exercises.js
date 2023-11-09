// node project-info/teamdm/tech/javascript/object-transformation-exercises.js

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
  gradeReport: Object.values(student.grades),
  passStatus: student.passed === 'yes',
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
}
console.log({
  productInventory,
  productInventoryTransformed,
  correct: isDeepEqual(productInventoryTransformed, {
    // here you can see the desired transformed object
    sku: 'SKU12345',
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

const fitnessTracker = { user: 'JaneDoe', daily_steps: [12530, 11320, 13220], goal_steps: 10000 }
const fitnessTrackerTransformed = {
  // your code here
}
console.log({
  fitnessTracker,
  fitnessTrackerTransformed,
  correct: isDeepEqual(fitnessTrackerTransformed, {
    username: 'JaneDoe',
    averageDailySteps: 12356,
    achievedGoalDays: 3,
  }),
})

const vehicleRegistration = {
  plateNumber: 'ABC123',
  vehicleTypeCode: '2A',
  registeredTo: 'John Doe',
  validThrough: '2023-12-31',
}
const vehicleRegistrationTransformed = {
  // your code here
}
console.log({
  vehicleRegistration,
  vehicleRegistrationTransformed,
  correct: isDeepEqual(vehicleRegistrationTransformed, {
    licensePlate: 'ABC123',
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
const userAccountStatusTransformed = {
  // your code here
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
const employeeTaskAssignmentTransformed = {
  // your code here
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
const bookGenreClassificationTransformed = {
  // your code here
}
console.log({
  bookGenreClassification,
  bookGenreClassificationTransformed,
  correct: isDeepEqual(bookGenreClassificationTransformed, {
    isbn: '978-3-16-148410-0',
    bookGenre: 'Non-Fiction',
  }),
})
