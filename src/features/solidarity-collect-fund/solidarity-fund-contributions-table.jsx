// SolidarityFundContributionsTable.jsx
import React, { useMemo, useState } from 'react'
import { useTable } from 'react-table'

export default function SolidarityFundContributionsTable() {
  const [data, setData] = useState([
    {
      // fullName: '',
      // share: '',
      // sum: '',
      // debt: '',
      // reimbursement: '',
      // meetingRegNo: '',
      // weeklySum: '',
      // weekly: '',
      fullName: null,
      share: null,
      sum: null,
      debt: null,
      reimbursement: null,
      meetingRegNo: null,
      weeklySum: null,
      weekly: null,
      observations: null,
    },
    // ... more data rows
  ])

  const columns = useMemo(
    () => [
      {
        Header: 'Full Name',
        accessor: 'fullName',
        Cell: ({ value, updateMyData, rowIndex, column }) => {
          return (
            <input
              type="text"
              value={value}
              onChange={(e) => {
                updateMyData(rowIndex, column.id, e.target.value)
              }}
            />
          )
        },
      },
      {
        Header: 'Share',
        accessor: 'share',
        Cell: ({ value, updateMyData, rowIndex, column }) => {
          return (
            <input
              type="number"
              value={value}
              onChange={(e) => {
                updateMyData(rowIndex, column.id, e.target.value)
              }}
            />
          )
        },
      },
      {
        Header: 'Sum',
        accessor: 'sum',
        Cell: ({ value, updateMyData, rowIndex, column }) => {
          return (
            <input
              type="number"
              value={value}
              onChange={(e) => {
                updateMyData(rowIndex, column.id, e.target.value)
              }}
            />
          )
        },
      },
      {
        Header: 'Debt',
        accessor: 'debt',
        Cell: ({ value, updateMyData, rowIndex, column }) => {
          return (
            <input
              type="number"
              value={value}
              onChange={(e) => {
                updateMyData(rowIndex, column.id, e.target.value)
              }}
            />
          )
        },
      },
      {
        Header: 'Reimbursement',
        accessor: 'reimbursement',
        Cell: ({ value, updateMyData, rowIndex, column }) => {
          return (
            <input
              type="number"
              value={value}
              onChange={(e) => {
                updateMyData(rowIndex, column.id, e.target.value)
              }}
            />
          )
        },
      },
      {
        Header: 'Meeting Reg. No',
        accessor: 'meetingRegNo',
        Cell: ({ value, updateMyData, rowIndex, column }) => {
          return (
            <input
              type="number"
              value={value}
              onChange={(e) => {
                updateMyData(rowIndex, column.id, e.target.value)
              }}
            />
          )
        },
      },
      {
        Header: 'Weekly Sum',
        accessor: 'weeklySum',
        Cell: ({ value, updateMyData, rowIndex, column }) => {
          return (
            <input
              type="number"
              value={value}
              onChange={(e) => {
                updateMyData(rowIndex, column.id, e.target.value)
              }}
            />
          )
        },
      },
      {
        Header: 'Weekly',
        accessor: 'weekly',
        Cell: ({ value, updateMyData, rowIndex, column }) => {
          return (
            <input
              type="number"
              value={value}
              onChange={(e) => {
                updateMyData(rowIndex, column.id, e.target.value)
              }}
            />
          )
        },
      },
      {
        Header: 'Observations',
        accessor: 'observations',
        Cell: ({ value, updateMyData, rowIndex, column }) => {
          return (
            <input
              type="text"
              value={value}
              onChange={(e) => {
                updateMyData(rowIndex, column.id, e.target.value)
              }}
            />
          )
        },
      },

      // ... more columns
    ],
    []
  )

  // const handleChange = (event, rowIndex, column) => {
  //   const newRows = [...rows]
  //   newRows[rowIndex][column] = event.target.value
  //   setRows(newRows)
  // }
  // const handleSubmit = (event) => {
  //   event.preventDefault()
  //   setRows([...rows, initialRow])
  // }

  // Create an updater function to use with the input fields
  const updateMyData = (rowIndex, columnId, value) => {
    setData((old) =>
      old.map((row, index) => {
        if (index === rowIndex) {
          return {
            ...old[rowIndex],
            [columnId]: value,
          }
        }
        return row
      })
    )
  }

  // Pass the updater function to the useTable hook
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data,
    updateMyData,
  })

  return (
    <div className="w-full h-full mt-4 mx-4 rounded-lg overflow-hidden shadow-lg">
      <table
        {...getTableProps()}
        className="min-w-full divide-y divide-gray-200 border border-gray-200"
      >
        <thead className="bg-gray-50">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider border-r border-gray-200"
                >
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()} className="bg-white divide-y divide-gray-200">
          {rows.map((row, i) => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td
                    {...cell.getCellProps()}
                    className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border-r border-gray-200"
                  >
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
  // return (
  //   <div className="w-full h-full mt-4 mx-4 rounded-lg overflow-hidden shadow-lg">
  //     <form onSubmit={handleSubmit}>
  //       {rows.map((row, rowIndex) => (
  //         <div key={rowIndex}>
  //           <input
  //             type="text"
  //             value={row.fullName}
  //             onChange={(e) => handleChange(e, rowIndex, 'fullName')}
  //           />
  //           <input
  //             type="number"
  //             value={row.share}
  //             onChange={(e) => handleChange(e, rowIndex, 'share')}
  //           />
  //           <input
  //             type="number"
  //             value={row.sum}
  //             onChange={(e) => handleChange(e, rowIndex, 'sum')}
  //           />
  //           <input
  //             type="number"
  //             value={row.debt}
  //             onChange={(e) => handleChange(e, rowIndex, 'debt')}
  //           />
  //           <input
  //             type="number"
  //             value={row.reimbursement}
  //             onChange={(e) => handleChange(e, rowIndex, 'reimbursement')}
  //           />
  //           <input
  //             type="number"
  //             value={row.meetingRegNo}
  //             onChange={(e) => handleChange(e, rowIndex, 'meetingRegNo')}
  //           />
  //           <input
  //             type="number"
  //             value={row.weeklySum}
  //             onChange={(e) => handleChange(e, rowIndex, 'weeklySum')}
  //           />
  //           <input
  //             type="number"
  //             value={row.weekly}
  //             onChange={(e) => handleChange(e, rowIndex, 'weekly')}
  //           />
  //         </div>
  //       ))}

  //       <button type="submit">Submit</button>
  //     </form>
  //     <table className="min-w-full divide-y divide-gray-200 border border-gray-200">
  //       <thead className="bg-gray-50">
  //         <tr>
  //           {[
  //             'No',
  //             'Full Name',
  //             'Share',
  //             'Sum',
  //             'Debt',
  //             'Reimbursement',
  //             'Meeting Reg. No',
  //             'Weekly Sum',
  //             'Weekly',
  //           ].map((header, idx) => (
  //             <th
  //               key={idx}
  //               scope="col"
  //               className="px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider border-r border-gray-200"
  //             >
  //               {header}
  //             </th>
  //           ))}
  //         </tr>
  //       </thead>
  //       <tbody className="bg-white divide-y divide-gray-200">
  //         {rows.map((row, idx) => (
  //           <tr key={idx}>
  //             <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border-r border-gray-200">
  //               {idx + 1}
  //             </td>
  //             <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border-r border-gray-200">
  //               {row.fullName}
  //             </td>
  //             <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border-r border-gray-200">
  //               {row.share}
  //             </td>
  //             <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border-r border-gray-200">
  //               {row.sum}
  //             </td>
  //             <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border-r border-gray-200">
  //               {row.debt}
  //             </td>
  //             <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border-r border-gray-200">
  //               {row.reimbursement}
  //             </td>
  //             <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border-r border-gray-200">
  //               {row.meetingRegNo}
  //             </td>
  //             <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border-r border-gray-200">
  //               {row.weeklySum}
  //             </td>
  //             <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border-r border-gray-200">
  //               {row.weekly}
  //             </td>
  //           </tr>
  //         ))}
  //       </tbody>
  //     </table>
  //   </div>
  // )
}

/*
I did the following to make it work:
  1. install react-table package
  2. import { useTable } from 'react-table'
  3. import useMemo and useState hooks
  4. create a columns array with Header and accessor, and Cell properties that return an input field with the value and onChange props
  5. create a data array with the same properties as the columns array
  6. create a table component and pass the columns and data arrays to the useTable hook
  7. destructuring the getTableProps, getTableBodyProps, headerGroups, rows, and prepareRow from the useTable hook
  8. render the table with the destructured props
  9. create a table header and table body with the destructured props
When i try to type in the input fields, i couldn't edit or add anything. to fix that i added "type" attribute to the input fields and a "value" attribute with the value from the data array and an "onChange" attribute with the updateMyData function, but the input fields are still not editable.
i stop by here because i am running out of time. i will continue working on it tomorrow.
*/
