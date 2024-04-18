import React from 'react'
import { DataGrid } from '@mui/x-data-grid'

const SubmittedData = ({ submittedData, submittedColumns }) => {
  // Check if submittedColumns is defined and not null, and use an empty array as fallback
  const columns = submittedColumns || []

  // Process submittedData only if it's defined and not null
  const processedData =
    submittedData?.map((data, index) => ({
      id: index,
      ...data,
    })) || []

  return (
    <div>
      <h2>Submitted Data</h2>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid rows={processedData} columns={columns} pageSize={5} />
      </div>
    </div>
  )
}

export default SubmittedData

/*
MM: forDM: i update the components of this project:
  1. CollectorAuthentication: i added a tailwind UI for authentication
  2. displayed the SubmittedData component after the admin authentication
  3. displayed the WeeklyMeetingForm after the collector authentication
Test the code: click on each of the link to check the output, but the SubmittedData component is empty because to return to the admin authentication after filling the weekly-authentication-form requires to reload the page.
MM: forDM: how can i save data to show up in the SubmittedData component even after reloading the page?
*/