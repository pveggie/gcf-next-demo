import { readProjects } from '@/api/controllers/projectController'

import Page from '@/components/wrappers/Page'
import ProjectsDataGrid from '@/components/templates/projects/ProjectsDataGrid'

export const getData = async () => {
  const data = await readProjects()

  return data
}

const ProjectsPage = async ({ data }) => {
  const projects = await getData()

  return (
    <Page title="Projects">
      <ProjectsDataGrid rows={projects} />
    </Page>
  )
}

export default ProjectsPage
