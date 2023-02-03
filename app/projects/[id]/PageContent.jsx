'use client'

import dayjs from 'dayjs'
import localizedFormat from 'dayjs/plugin/localizedFormat'

import { Badge, Card, Row, Col } from 'react-bootstrap'

import DefinitionList from '@/components/modules/DefinitionList'
import ResultAreasChart from '@/components/templates/ResultAreasChart'

dayjs.extend(localizedFormat)

const PageContent = ({ project }) => {
  if (!project) {
    return mull
  }

  return (
    <>
      <Row>
        <Col md={6}>
          <Card>
            <Card.Header>Key Details</Card.Header>
            <Card.Body>
              <div className="mb-3">
                <Badge bg="primary" className="me-2">
                  {project.Theme}
                </Badge>
                <Badge bg="secondary">{project.Sector} Sector</Badge>
              </div>

              <DefinitionList
                items={[
                  {
                    title: 'Size',
                    definition: project.Size,
                  },
                  { title: 'Risk Category', definition: project.RiskCategory },
                  {
                    title: 'Countries',
                    definition: (project.Countries || [])
                      .map((country) => country.CountryName)
                      .join(', '),
                  },
                  {
                    title: 'Start Date',
                    definition: dayjs(project.StartDate).format('ll'),
                  },
                  {
                    title: 'End Date',
                    definition: dayjs(project.EndDate).format('ll'),
                  },
                ]}
              />
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <Card>
            <Card.Header>Result Areas</Card.Header>
            <Card.Body>
              <ResultAreasChart resultAreas={project.ResultAreas || []} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default PageContent
