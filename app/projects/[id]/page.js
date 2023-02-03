import { readProject } from '@/api/controllers/projectController'

import Page from '@/components/wrappers/Page'

async function getData(params) {
  const data = await readProject(params)
  return data
}

const ProjectPage = async ({ params }) => {
  const project = await getData(params)

  console.log(project)

  if (!project) {
    return <Page title="Project Page"></Page>
  }

  const title = (
    <>
      <span className="text-muted">{project.ApprovedRef}</span>{' '}
      <span>{project.ProjectName}</span>
    </>
  )
  return <Page title={title}></Page>
}

export default ProjectPage
