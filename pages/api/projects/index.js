import { readProjects } from '@/api/controllers/projectController'

const handler = async (req, res) => {
  console.log(req)
  const data = await readProjects(req)

  return res.status(200).json(data)
}

export default handler
