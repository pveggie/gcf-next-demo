'use client'
import classNames from 'classnames'

import { DataGrid } from '@mui/x-data-grid'

const ClientDataGrid = ({ className, ...props }) => {
  return (
    <div className="client-data-grid h-100">
      <DataGrid {...props} />
    </div>
  )
}

export default ClientDataGrid
