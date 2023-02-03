import classNames from 'classnames'

const DefinitionList = ({ className, items }) => {
  return (
    <dl className={classNames('dl--horizontal', className)}>
      {items.map((item) => {
        return (
          <div key={item.title}>
            <dt>{item.title}</dt>
            <dd>{item.definition}</dd>
          </div>
        )
      })}
    </dl>
  )
}

export default DefinitionList
