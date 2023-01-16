import React from "react"
import ContentLoader from "react-content-loader"
const MyLoader = (props) => (
  <ContentLoader 
    speed={3}
    width={800}
    height={500}
    backgroundColor="#cebaba"
    viewBox="30 60 200 160"
    {...props}
  >
  <rect x="0" y="0" rx="0" ry="0" width="700" height="170"/>
</ContentLoader>
)
export default MyLoader