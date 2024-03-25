// import React, { useState } from 'react'
// import { collection, addDoc } from 'firebase/firestore'
// import { db } from './firebase'

// export default function WeeklyMeetingForm() {
//   const [fullName, setFullName] = useState('')
//   const [share, setShare] = useState('')
//   const [sum, setSum] = useState('')
//   const [debt, setDebt] = useState('')
//   const [reimbursement, setReimbursement] = useState('')
//   const [meetingRegistrationNumber, setMeetingRegistrationNumber] = useState('')
//   const [weeklySum, setWeeklySum] = useState('')
//   const [weeklyTotal, setWeeklyTotal] = useState('')
//   const [weeklySavings, setWeeklySavings] = useState('')

//   const handleSubmit = async (event) => {
//     event.preventDefault()
//     try {
//       await addDoc(collection(db, 'meetings'), {
//         fullName,
//         share,
//         sum,
//         debt,
//         reimbursement,
//         meetingRegistrationNumber,
//         weeklySum,
//         weeklyTotal,
//         weeklySavings,
//       })
//       // Clear the input fields here
//       setFullName('')
//       setShare('')
//       setSum('')
//       setDebt('')
//       setReimbursement('')
//       setMeetingRegistrationNumber('')
//       setWeeklySum('')
//       setWeeklyTotal('')
//       setWeeklySavings('')
//     } catch (e) {
//       console.error('Error adding document: ', e)
//     }
//   }

//   // Return the form JSX here
//   return (
//     <form onSubmit={handleSubmit} className="space-y-4">
//       <input
//         value={fullName}
//         onChange={(e) => setFullName(e.target.value)}
//         type="text"
//         placeholder="Full Name"
//         className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
//       />
//       <input
//         value={share}
//         onChange={(e) => setShare(e.target.value)}
//         type="text"
//         placeholder="Share"
//         className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
//       />
//       <input
//         value={sum}
//         onChange={(e) => setSum(e.target.value)}
//         type="text"
//         placeholder="Sum"
//         className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
//       />
//       <input
//         value={debt}
//         onChange={(e) => setDebt(e.target.value)}
//         type="text"
//         placeholder="Debt"
//         className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
//       />
//       <input
//         value={reimbursement}
//         onChange={(e) => setReimbursement(e.target.value)}
//         type="text"
//         placeholder="Reimbursement"
//         className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
//       />
//       <input
//         value={meetingRegistrationNumber}
//         onChange={(e) => setMeetingRegistrationNumber(e.target.value)}
//         type="text"
//         placeholder="Meeting Registration Number"
//         className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
//       />
//       <input
//         value={weeklySum}
//         onChange={(e) => setWeeklySum(e.target.value)}
//         type="text"
//         placeholder="Weekly Sum"
//         className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
//       />
//       <input
//         value={weeklyTotal}
//         onChange={(e) => setWeeklyTotal(e.target.value)}
//         type="text"
//         placeholder="Weekly Total"
//         className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
//       />
//       <input
//         value={weeklySavings}
//         onChange={(e) => setWeeklySavings(e.target.value)}
//         type="text"
//         placeholder="Weekly Savings"
//         className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
//       />
//       <button
//         type="submit"
//         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
//       >
//         Submit
//       </button>
//     </form>
//   )
// }

import React, { useState } from 'react'
import DataGrid from 'react-data-grid'
import { collection, addDoc } from 'firebase/firestore'
import { db } from './firebase'

export default function WeeklyMeetingForm() {
  const [rows, setRows] = useState([
    {
      id: 0,
      fullName: '',
      share: '',
      sum: '',
      debt: '',
      reimbursement: '',
      meetingRegistrationNumber: '',
      weeklySum: '',
      weeklyTotal: '',
      weeklySavings: '',
    },
  ])

  const columns = [
    { key: 'fullName', name: 'Full Name', editable: true },
    { key: 'share', name: 'Share', editable: true },
    { key: 'sum', name: 'Sum', editable: true },
    { key: 'debt', name: 'Debt', editable: true },
    { key: 'reimbursement', name: 'Reimbursement', editable: true },
    { key: 'meetingRegistrationNumber', name: 'Meeting Registration Number', editable: true },
    { key: 'weeklySum', name: 'Weekly Sum', editable: true },
    { key: 'weeklyTotal', name: 'Weekly Total', editable: true },
    { key: 'weeklySavings', name: 'Weekly Savings', editable: true },
  ]

  const onGridRowsUpdated = async ({ fromRow, toRow, updated }) => {
    const newRows = rows.map((row, i) => {
      if (i >= fromRow && i <= toRow) {
        return { ...row, ...updated }
      }
      return row
    })
    setRows(newRows)

    // Save the updated row to Firestore
    try {
      const updatedRow = newRows[fromRow]
      await addDoc(collection(db, 'meetings'), updatedRow)
    } catch (e) {
      console.error('Error adding document: ', e)
    }
  }

  return (
    <DataGrid
      columns={columns}
      rowGetter={(i) => rows[i]}
      rowsCount={rows.length}
      onGridRowsUpdated={onGridRowsUpdated}
      enableCellSelect={true}
    />
  )
}
