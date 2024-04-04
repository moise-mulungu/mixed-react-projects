import React, { useState } from 'react'
import 'react-data-grid/lib/styles.css'
import DataGrid from 'react-data-grid'

function WeeklyMeetingForm() {
  const initialRows = Array.from({ length: 10 }, (_, index) => ({
    id: index,
    fullName: '',
    share: '',
    sum: '',
    debt: '',
    reimbursement: '',
    meetingRegistrationNumber: '',
    weeklySum: '',
    weeklyTotal: '',
    weeklySavings: '',
  }))

  const [rows, setRows] = useState(initialRows)

  const columns = [
    { key: 'fullName', name: 'Full Name', editable: true, resizable: true },
    { key: 'share', name: 'Share', editable: true, resizable: true },
    { key: 'sum', name: 'Sum', editable: true, resizable: true },
    { key: 'debt', name: 'Debt', editable: true, resizable: true },
    { key: 'reimbursement', name: 'Reimbursement', editable: true, resizable: true },
    {
      key: 'meetingRegistrationNumber',
      name: 'Meeting Registration Number',
      editable: true,
      resizable: true,
    },
    { key: 'weeklySum', name: 'Weekly Sum', editable: true, resizable: true },
    { key: 'weeklyTotal', name: 'Weekly Total', editable: true, resizable: true },
    { key: 'weeklySavings', name: 'Weekly Savings', editable: true, resizable: true },
  ]

  const handleGridRowsUpdated = ({ fromRow, toRow, updated }) => {
    setRows((prevRows) => {
      const newRows = [...prevRows]
      for (let i = fromRow; i <= toRow; i++) {
        newRows[i] = { ...newRows[i], ...updated }
      }
      return newRows
    })
  }

  const handleAddRow = () => {
    setRows((prevRows) => [
      ...prevRows,
      {
        id: prevRows.length,
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
  }

  const rowGetter = (i) => rows?.[i] || {}

  // Conditionally render the DataGrid only if rows is defined and not empty
  if (!rows || rows.length === 0) {
    return null // or you can render a loading indicator or an empty message
  }

  return (
    <div style={{ height: 400, width: '100%' }}>
      <button
        style={{
          backgroundColor: 'blue',
          color: 'white',
          padding: '10px 20px',
          borderRadius: '5px',
          marginBottom: '10px',
        }}
        onClick={handleAddRow}
      >
        Add Row
      </button>
      {/* MM: forDM: The TypeError: can't read properties of undefined(reading length) still persists after working with ChatGPT chat link: https://chat.openai.com/share/c9f803e0-71fb-4f0f-9cd6-cf42bd9e76da. can you help with hints or just fix it */}
      <DataGrid
        rowsCount={rows.length}
        columns={columns}
        rowGetter={rowGetter}
        onGridRowsUpdated={handleGridRowsUpdated}
        enableCellSelect
        rowHeight={40}
        headerRowHeight={50}
        rowRenderer={({ renderBaseRow }) => (
          <div
            style={{
              borderBottom: '1px solid green',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            {renderBaseRow()}
          </div>
        )}
        cellRenderer={({ cellContent, cell }) => (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '0 10px',
            }}
          >
            {cellContent}
          </div>
        )}
      />
    </div>
  )
}

export default WeeklyMeetingForm
