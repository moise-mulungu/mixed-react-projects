// SolidarityFundContributionsTable.jsx
import { useState } from 'react'

export default function SolidarityFundContributionsTable() {
  // const [fullName, setFullName] = useState('')
  // const [share, setShare] = useState('')
  // const [sum, setSum] = useState('')
  // const [debt, setDebt] = useState('')
  // const [reimbursement, setReimbursement] = useState('')
  // const [meetingRegNo, setMeetingRegNo] = useState('')
  // const [weeklySum, setWeeklySum] = useState('')
  // const [weekly, setWeekly] = useState('')
  // const [rows, setRows] = useState([])
  const initialRow = {
    fullName: '',
    share: '',
    sum: '',
    debt: '',
    reimbursement: '',
    meetingRegNo: '',
    weeklySum: '',
    weekly: '',
  }

  const [rows, setRows] = useState([initialRow])

  const handleChange = (event, rowIndex, column) => {
    const newRows = [...rows]
    newRows[rowIndex][column] = event.target.value
    setRows(newRows)
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    setRows([...rows, initialRow])
  }

  return (
    <div className="w-full h-full mt-4 mx-4 rounded-lg overflow-hidden shadow-lg">
      <form onSubmit={handleSubmit}>
        {rows.map((row, rowIndex) => (
          <div key={rowIndex}>
            <input
              type="text"
              value={row.fullName}
              onChange={(e) => handleChange(e, rowIndex, 'fullName')}
            />
            <input
              type="number"
              value={row.share}
              onChange={(e) => handleChange(e, rowIndex, 'share')}
            />
            <input
              type="number"
              value={row.sum}
              onChange={(e) => handleChange(e, rowIndex, 'sum')}
            />
            <input
              type="number"
              value={row.debt}
              onChange={(e) => handleChange(e, rowIndex, 'debt')}
            />
            <input
              type="number"
              value={row.reimbursement}
              onChange={(e) => handleChange(e, rowIndex, 'reimbursement')}
            />
            <input
              type="number"
              value={row.meetingRegNo}
              onChange={(e) => handleChange(e, rowIndex, 'meetingRegNo')}
            />
            <input
              type="number"
              value={row.weeklySum}
              onChange={(e) => handleChange(e, rowIndex, 'weeklySum')}
            />
            <input
              type="number"
              value={row.weekly}
              onChange={(e) => handleChange(e, rowIndex, 'weekly')}
            />
          </div>
        ))}

        <button type="submit">Submit</button>
      </form>
      <table className="min-w-full divide-y divide-gray-200 border border-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {[
              'No',
              'Full Name',
              'Share',
              'Sum',
              'Debt',
              'Reimbursement',
              'Meeting Reg. No',
              'Weekly Sum',
              'Weekly',
            ].map((header, idx) => (
              <th
                key={idx}
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider border-r border-gray-200"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {rows.map((row, idx) => (
            <tr key={idx}>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border-r border-gray-200">
                {idx + 1}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border-r border-gray-200">
                {row.fullName}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border-r border-gray-200">
                {row.share}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border-r border-gray-200">
                {row.sum}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border-r border-gray-200">
                {row.debt}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border-r border-gray-200">
                {row.reimbursement}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border-r border-gray-200">
                {row.meetingRegNo}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border-r border-gray-200">
                {row.weeklySum}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border-r border-gray-200">
                {row.weekly}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
