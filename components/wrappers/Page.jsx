const Page = ({ title, children }) => {
  return (
    <>
      <h1 className="page-title mt-5">{title}</h1>
      <hr />
      <div className="page-content">{children}</div>
    </>
  )
}

export default Page
