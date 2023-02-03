import classNames from 'classnames'

import { PieChart } from 'react-minimal-pie-chart'
import { Row, Col } from 'react-bootstrap'

import SvgIcon from '../elements/icons/SvgIcon'
import { resultAreaIcons } from '../elements/icons/resultAreaIcons'

const resultAreasConfig = [
  {
    id: 'raEnergy',
    areaName: 'Energy generation and access',
  },
  {
    id: 'raTransport',
    areaName: 'Transport',
  },
  {
    id: 'raCities',
    areaName: 'Buildings, cities, industries, and appliances',
  },
  {
    id: 'raForests',
    areaName: 'Forest and land use',
  },
  {
    id: 'raLivelihoods',
    areaName: 'Livelihoods of people and communities',
  },
  {
    id: 'raHealth',
    areaName: 'Health, food, and water security',
  },
  {
    id: 'raInfrastructure',
    areaName: 'Infrastructure and built environment',
  },
  {
    id: 'raEcosystems',
    areaName: 'Ecosystems and ecosystem services',
  },
]

const ResultAreasChart = ({ resultAreas }) => {
  const data = resultAreas.map((ra) => {
    const resultAreaConfig = resultAreasConfig.find(
      (k) => k.areaName === ra.Area
    )

    return {
      title: ra.Area,
      value: parseInt(ra.Value),
      color: `var(--${resultAreaConfig.id})`,
      ...resultAreaConfig,
    }
  })

  return (
    <Row>
      <Col xs={6}>
        <PieChart data={data} />
      </Col>
      <Col xs={6}>
        <h3 className="h5">Legend</h3>
        {data.map((area) => {
          return (
            <div key={area.id} className="d-flex align-items-center mb-2">
              <span
                className={classNames(
                  'icon-container',
                  parseInt(area.value) > 0
                    ? `text-white`
                    : 'bg-white text-muted opacity-50'
                )}
                style={{ backgroundColor: `var(--${area.id})` }}
              >
                <SvgIcon icon={resultAreaIcons[area.id]}></SvgIcon>
              </span>
              <span className="text-muted small ms-2">{area.title}</span>
            </div>
          )
        })}
      </Col>
    </Row>
  )
}

export default ResultAreasChart
