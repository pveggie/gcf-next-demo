const projectsEndpoint = `https://api.gcfund.org/v1/projects`

export const fetchJson = async (url) => {
  const res = await fetch(url)
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export const readProjects = () => {
  return fetchJson(projectsEndpoint)
}

export const readProject = (params) => {
  const { id } = params
  return fetchJson(`${projectsEndpoint}/${id}`)
}
