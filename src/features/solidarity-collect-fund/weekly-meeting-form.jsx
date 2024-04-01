

import React, { useState } from 'react'
import DataGrid from 'react-data-grid'
import { collection, addDoc, deleteDoc, doc } from 'firebase/firestore'
import { db } from './firebase'

export default function WeeklyMeetingForm() {
  const [rows, setRows] = useState([])

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
    const newRows = [...rows]
    for (let i = fromRow; i <= toRow; i++) {
      newRows[i] = { ...newRows[i], ...updated }
      try {
        const rowId = newRows[i].id
        await doc(collection(db, 'meetings'), rowId).set(newRows[i])
      } catch (e) {
        console.error('Error updating document: ', e)
      }
    }
    setRows(newRows)
  }

  const handleAddRow = () => {
    const newRow = {
      id: Date.now(),
      fullName: '',
      share: '',
      sum: '',
      debt: '',
      reimbursement: '',
      meetingRegistrationNumber: '',
      weeklySum: '',
      weeklyTotal: '',
      weeklySavings: '',
    }
    setRows([...rows, newRow])
  }

  const handleDeleteRow = async (rowIdx) => {
    const deletedRow = rows[rowIdx]
    try {
      await deleteDoc(doc(db, 'meetings', deletedRow.id))
      const newRows = rows.filter((_, idx) => idx !== rowIdx)
      setRows(newRows)
    } catch (e) {
      console.error('Error deleting document: ', e)
    }
  }
  console.log('rows-length', rows) // MM: forDM: to check the length of the rows array because it is throwing the "Uncaught TypeError: Cannot read properties of undefined (reading 'length')" error. any idea on how to fix this?
  return (
    <div>
      <button onClick={handleAddRow}>Add Row</button>
      <DataGrid
        columns={columns}
        rowGetter={(i) => rows[i]}
        rowsCount={rows.length}
        onGridRowsUpdated={onGridRowsUpdated}
        enableCellSelect={true}
        enableCellAutoFocus={true}
        rowDeleter={handleDeleteRow}
      />
    </div>
  )
}
