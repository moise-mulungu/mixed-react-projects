import * as React from 'react'
import { doc, setDoc, collection, getDocs, addDoc } from 'firebase/firestore'
import { db } from './firebase'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import AddIcon from '@mui/icons-material/Add'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/DeleteOutlined'
import SaveIcon from '@mui/icons-material/Save'
import CancelIcon from '@mui/icons-material/Close'
// import { ListItem, ListItemText, List } from '@mui/material'
import {
  DataGrid,
  GridToolbarContainer,
  GridActionsCellItem,
  GridRowModes,
  GridRowEditStopReasons,
} from '@mui/x-data-grid'

import SubmittedData from './submitted-data'

const roles = ['Market', 'Finance', 'Development']

// Function to generate a random trader name
const randomTraderName = () => {
  // Replace this with your custom implementation to generate a random trader name
  // Example:
  return ''
}

// Function to generate a random ID
const randomId = () => {
  // Replace this with your custom implementation to generate a random ID
  // Example:
  return Math.random().toString(36).substring(7)
}

// Function to generate a random date
const randomCreatedDate = () => {
  // Replace this with your custom implementation to generate a random date
  // Example:
  return new Date().toISOString().substring(0, 10)
}

const randomRole = () => {
  return roles[Math.floor(Math.random() * roles.length)]
}

const initialRows = [
  {
    id: randomId(),
    memberNames: randomTraderName(),
    share: 0,
    amount: 0,
    solidarity: 0,
    age: null,
    // joinDate: new Date(),
    joinDate: new Date().toISOString(),
    role: '',
  },
]

const EditToolbar = (props) => {
  const { setRows, setRowModesModel, submittedData, setSubmittedData, rows } = props

  const handleClick = () => {
    const id = randomId()
    setRows((oldRows) => [
      ...oldRows,
      { id, memberNames: '', share: '', amount: '', solidarity: '', age: '', isNew: true },
    ])
    setRowModesModel((oldModel) => ({
      ...oldModel,
      [id]: { mode: GridRowModes.Edit, fieldToFocus: 'memberNames' },
    }))
  }

  const handleSubmitClick = async () => {
    try {
      const dataToSubmit = rows.map((row, index) => ({
        id: index + 1, // Generate unique id for each row
        memberNames: row.memberNames,
        share: row.share,
        amount: row.amount,
        solidarity: row.solidarity,
        age: row.age,
        joinDate: new Date(row.joinDate).toISOString(), // Convert date to ISO string
        role: row.role,
      }))
      console.log('Data to submit:', dataToSubmit)

      const meetingsRef = collection(db, 'meetings')

      // Loop through each row and add it as a document to the "meetings" collection
      dataToSubmit.forEach(async (data) => {
        await addDoc(meetingsRef, data)
      })

      setSubmittedData(dataToSubmit)
    } catch (error) {
      console.error('Error submitting data:', error)
    }
  }

  return (
    <GridToolbarContainer>
      <Button color="primary" startIcon={<AddIcon />} onClick={handleClick}>
        Add record
      </Button>
      <Button
        color="primary"
        startIcon={<SaveIcon />}
        onClick={(event) => {
          event.preventDefault()
          handleSubmitClick()
        }}
      >
        Submit
      </Button>
    </GridToolbarContainer>
  )
}

export default function WeeklyMeetingForm() {
  const [rows, setRows] = React.useState(initialRows)
  const [rowModesModel, setRowModesModel] = React.useState({})
  const [submittedData, setSubmittedData] = React.useState([])
  const [processedData, setProcessedData] = React.useState([])

  const handleRowEditStop = (params, event) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true
    }
  }

  const handleEditClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } })
  }

  const handleSaveClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } })
  }

  const handleDeleteClick = (id) => () => {
    setRows(rows.filter((row) => row.id !== id))
  }

  const handleCancelClick = (id) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    })

    const editedRow = rows.find((row) => row.id === id)
    if (editedRow.isNew) {
      setRows(rows.filter((row) => row.id !== id))
    }
  }

  const processRowUpdate = (newRow) => {
    const updatedRow = { ...newRow, isNew: false }
    setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)))
    return updatedRow
  }

  const handleRowModesModelChange = (newRowModesModel) => {
    setRowModesModel(newRowModesModel)
  }

  const columns = [
    { field: 'memberNames', headerName: 'Member Names', width: 180, editable: true },
    {
      field: 'share',
      headerName: 'Share',
      type: 'number',
      width: 80,
      align: 'left',
      headerAlign: 'left',
      editable: true,
    },
    {
      field: 'amount',
      headerName: 'Amount',
      type: 'number',
      width: 80,
      align: 'left',
      headerAlign: 'left',
      editable: true,
    },
    {
      field: 'solidarity',
      headerName: 'Solidarity',
      type: 'number',
      width: 80,
      align: 'left',
      headerAlign: 'left',
      editable: true,
    },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 80,
      align: 'left',
      headerAlign: 'left',
      editable: true,
    },
    {
      field: 'joinDate',
      headerName: 'Join date',
      type: 'date',
      width: 180,
      editable: true,
      valueGetter: (params) => new Date(params.value),
    },
    {
      field: 'role',
      headerName: 'Department',
      width: 220,
      editable: true,
      type: 'singleSelect',
      valueOptions: ['Market', 'Finance', 'Development'],
    },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Actions',
      width: 100,
      cellClassName: 'actions',
      getActions: ({ id }) => {
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit

        if (isInEditMode) {
          return [
            <GridActionsCellItem
              icon={<SaveIcon />}
              label="Save"
              sx={{
                color: 'primary.main',
              }}
              onClick={handleSaveClick(id)}
            />,
            <GridActionsCellItem
              icon={<CancelIcon />}
              label="Cancel"
              className="textPrimary"
              onClick={handleCancelClick(id)}
              color="inherit"
            />,
          ]
        }

        return [
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Edit"
            className="textPrimary"
            onClick={handleEditClick(id)}
            color="inherit"
          />,
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={handleDeleteClick(id)}
            color="inherit"
          />,
        ]
      },
    },
  ]

  const submittedColumns = [
    { field: 'memberNames', headerName: 'Member Names' },
    { field: 'share', headerName: 'Share' },
    { field: 'amount', headerName: 'Amount' },
    { field: 'solidarity', headerName: 'Solidarity' },
    { field: 'age', headerName: 'Age' },
    { field: 'joinDate', headerName: 'Join date' },
    { field: 'role', headerName: 'Department' },
  ]

  React.useEffect(() => {
    const processedData =
      submittedData?.map((data, index) => ({
        id: index,
        ...data,
      })) || []

    setProcessedData(processedData)
  }, [submittedData])

  return (
    <Box
      sx={{
        height: 500,
        width: '100%',
        '& .actions': {
          color: 'text.secondary',
        },
        '& .textPrimary': {
          color: 'text.primary',
        },
      }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        editMode="row"
        rowModesModel={rowModesModel}
        onRowModesModelChange={handleRowModesModelChange}
        onRowEditStop={handleRowEditStop}
        processRowUpdate={processRowUpdate}
        slots={{
          toolbar: (props) => (
            <EditToolbar {...props} rows={rows} setSubmittedData={setSubmittedData} />
          ),
        }}
        slotProps={{
          toolbar: { setRows, setRowModesModel, submittedData, setSubmittedData },
        }}
      />

      {submittedData && submittedData.length > 0 && (
        <div>
          <h2>Submitted Data</h2>
          <SubmittedData submittedData={submittedData} submittedColumns={submittedColumns} />
        </div>
      )}
    </Box>
  )
}
