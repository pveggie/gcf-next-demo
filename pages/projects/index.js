import NextLink from 'next/link'

import { readProjects } from '@/api/controllers/projectController'
import { Button, Typography, Box } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'

const ProjectsPage = ({ data }) => {
  console.log(data)

  const columns = [
    { field: 'ProjectsID', headerName: 'ID', width: 70 },
    { field: 'ApprovedRef', headerName: 'Ref', width: 130 },
    { field: 'BoardMeeting', headerName: 'BM', width: 130 },
    { field: 'ProjectName', headerName: 'Name', width: 250 },
    { field: 'Sector', headerName: 'Sector' },
    {
      field: 'Countries',
      headerName: 'Countries',
      width: 250,
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
      width: 200,
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
    <>
      <Typography variant="h1" className={'h1'}>
        Projects
      </Typography>
      <br />
      <br />
      <Box sx={{ height: 550 }}>
        <DataGrid
          rows={data}
          columns={columns}
          getRowId={(row) => row.ProjectsID}
          autoPageSize
        />
      </Box>
    </>
  )
}

export default ProjectsPage

export const getStaticProps = async () => {
  const data = await readProjects()

  return {
    props: { data },
  }
}
