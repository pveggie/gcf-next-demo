'use client'

import dayjs from 'dayjs'
import localizedFormat from 'dayjs/plugin/localizedFormat'

import { Badge, Card, Row, Col } from 'react-bootstrap'

dayjs.extend(localizedFormat)

const PageContent = ({ project }) => {
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
              <dl className="dl--horizontal">
                <div>
                  <dt>Size</dt>
                  <dd>{project.Size}</dd>
                </div>
                <div>
                  <dt>Risk Category</dt>
                  <dd>{project.RiskCategory}</dd>
                </div>
                <div>
                  <dt>Start Date</dt>
                  <dd>{dayjs(project.StartDate).format('ll')}</dd>
                </div>
                <div>
                  <dt>End Date</dt>
                  <dd>{dayjs(project.EndDate).format('ll')}</dd>
                </div>
              </dl>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default PageContent
