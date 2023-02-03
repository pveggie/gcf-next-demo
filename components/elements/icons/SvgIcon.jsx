const SvgIcon = ({ icon }) => {
  const { viewBox, path, innerHtml } = icon

  const [, , width, height] = viewBox.split(' ')
  const relWidth = (parseFloat(width) / parseFloat(height)).toFixed(4)

  return (
    <svg
      className="icon"
      viewBox={viewBox}
      width={`${relWidth}em`}
      height="1em"
      dangerouslySetInnerHTML={innerHtml && { __html: innerHtml }}
    >
      {path && <path d={path}></path>}
    </svg>
  )
}

export default SvgIcon
