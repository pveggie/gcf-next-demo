'use client'
import NextLink from 'next/link'
import { Button, Box } from '@mui/material'
import ClientDataGrid from '@/components/modules/ClientDataGrid'

const ProjectsDataGrid = ({ rows }) => {
  const columns = [
    { field: 'ProjectsID', headerName: 'ID', width: 70 },
    { field: 'ApprovedRef', headerName: 'Ref', width: 130 },
    { field: 'BoardMeeting', headerName: 'BM', width: 130 },
    { field: 'ProjectName', headerName: 'Name', width: 250 },
    { field: 'Sector', headerName: 'Sector' },
    {
      field: 'Countries',
      headerName: 'Countries',
      valueGetter: (params) => {
        return params.row.Countries.map((country) => country.CountryName).join(
          ', '
        )
      },
    },
    {
      field: 'Entities',
      headerName: 'Entities',
      width: 200,
      valueGetter: (params) => {
        return params.row.Entities.map((entity) => entity.Acronym).join(', ')
      },
    },
    {
      field: 'buttonLink',
      headerName: 'Details',
      width: 80,
      sortable: false,
      valueGetter: (params) => {
        const id = params.row.ProjectsID
        return `/projects/${id}`
      },
      renderCell: ({ value }) => {
        return (
          <Button className="text-center" as={NextLink} href={value}>
            View
          </Button>
        )
      },
    },
  ]

  return (
    <Box sx={{ height: 500 }}>
      <ClientDataGrid
        rows={rows}
        columns={columns}
        getRowId={(row) => row.ProjectsID}
        autoPageSize
      />
    </Box>
  )
}

export default ProjectsDataGrid
