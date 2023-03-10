import { readProject } from '@/api/controllers/projectController'

import Page from '@/components/wrappers/Page'
import PageContent from './PageContent'

async function getData(params) {
  const data = await readProject(params)
  return data
}

const ProjectPage = async ({ params }) => {
  const project = await getData(params)

  if (!project) {
    return <Page title="Project Page"></Page>
  }

  const title = (
    <>
      <span className="text-muted">{project.ApprovedRef}</span>{' '}
      <span>{project.ProjectName}</span>
    </>
  )
  return (
    <Page title={title}>
      <PageContent project={project} />
    </Page>
  )
}

export default ProjectPage
