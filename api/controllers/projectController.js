const projectsEndpoint = `https://api.gcfund.org/v1/projects`

export const readProjects = (req) => {
  return fetch(projectsEndpoint).then((res) => res.json())
}
