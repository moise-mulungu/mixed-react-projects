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
    // updateMyData,
    cellProps: { updateMyData },
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

What is the advantage of using react-table package?:
  react-table is a lightweight, fast, and flexible library that provides a headless approach to building tables in React. Here are some advantages of using react-table:

    1. Flexibility: react-table is unopinionated about how you render your views and includes no built-in UI. This gives you complete control over the look and feel of your tables.

    2. Performance: react-table is built to be fast. It uses a virtual DOM to only render the rows that are currently visible, which makes it highly efficient for large data sets.

    3. Extensibility: react-table supports plugins and hooks, allowing you to customize its functionality to suit your needs.

    4. Features: Despite its simplicity, react-table supports complex features like sorting, filtering, pagination, inline editing, expandable rows, and more.

    5. Ease of Use: react-table uses hooks, which makes it easy to use and integrate with other hooks-based libraries.

    6. Integration: It can be easily integrated with other libraries like react-virtualized for virtualization, react-dnd for drag and drop, etc.

  Remember, react-table is a headless utility, which means it doesn't render or supply any UI elements. You're in control of all UI components, and you use the hooks provided by react-table to control the state and logic of your tables.

*/

/*
to make the input fields editable, i first read this article: https://akd3257.medium.com/how-to-make-a-table-in-react-with-hooks-aa55dd8829
and then did the following:
1. create an updater function to use with the input fields
2. pass the updater function to the useTable hook
3. create a cellProps object with the updateMyData function
4. pass the cellProps object to the useTable hook
5. add the updateMyData function to the Cell property of the columns array
6. add the updateMyData function to the Cell property of the rows array

*/
