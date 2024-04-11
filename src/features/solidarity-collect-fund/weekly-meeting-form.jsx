import * as React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import AddIcon from '@mui/icons-material/Add'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/DeleteOutlined'
import SaveIcon from '@mui/icons-material/Save'
import CancelIcon from '@mui/icons-material/Close'
import { ListItem, ListItemText, List } from '@mui/material'
import {
  DataGrid,
  GridToolbarContainer,
  GridActionsCellItem,
  GridRowModes,
  GridRowEditStopReasons,
} from '@mui/x-data-grid'

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
    name: randomTraderName(),
    age: null,
    joinDate: new Date(),
    role: '',
  },
]

const EditToolbar = (props) => {
  const { setRows, setRowModesModel, submittedData, setSubmittedData, rows } = props

  const handleClick = () => {
    const id = randomId()
    setRows((oldRows) => [...oldRows, { id, name: '', age: '', isNew: true }])
    setRowModesModel((oldModel) => ({
      ...oldModel,
      [id]: { mode: GridRowModes.Edit, fieldToFocus: 'name' },
    }))
  }

  const handleSubmitClick = () => {
    // Collect data from rows and set it to submittedData state
    const dataToSubmit = rows.map((row) => ({
      name: row.name,
      age: row.age,
      joinDate: row.joinDate.toISOString(),
      role: row.role,
    }))
    setSubmittedData(dataToSubmit)
  }

  return (
    <GridToolbarContainer>
      <Button color="primary" startIcon={<AddIcon />} onClick={handleClick}>
        Add record
      </Button>
      <Button color="primary" startIcon={<SaveIcon />} onClick={handleSubmitClick}>
        Submit
      </Button>
    </GridToolbarContainer>
  )
}

export default function WeeklyMeetingForm() {
  const [rows, setRows] = React.useState(initialRows)
  const [rowModesModel, setRowModesModel] = React.useState({})
  const [submittedData, setSubmittedData] = React.useState(null)

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
    { field: 'name', headerName: 'Name', width: 180, editable: true },
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

      {submittedData && (
        <div>
          <h2>Submitted Data</h2>
          <List>
            {submittedData.map((data, index) => (
              <ListItem key={index}>
                <ListItemText
                  primary={`Name: ${data.name}`}
                  secondary={`Age: ${data.age}, Join Date: ${data.joinDate}, Department: ${data.role}`}
                />
              </ListItem>
            ))}
          </List>
        </div>
      )}
    </Box>
  )
}

/*
MM: forDM:  i have used the @mui/material package that uses DataGrid component. test the code:
  1. login as a collector (click on the collector authentication)
  2. fill the form(you'll need to submit the form twice, i don't the reason why. but i'll fix it) to open the WeeklyMeetingForm
  3. in the WeeklyMeetingForm, you can edit, add and modify cells data; to edit you can click on the "add-record" button to edit. to submit the data you can click on the "submit" button then the data will display below the table in key:value format.
*/
