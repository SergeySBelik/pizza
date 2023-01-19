import React from 'react'
import ContentLoader from 'react-content-loader'

const Sceleton = () => (
  <ContentLoader
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="144" cy="135" r="125" />
    <rect x="28" y="279" rx="0" ry="0" width="243" height="17" />
    <rect x="28" y="313" rx="0" ry="0" width="243" height="68" />
    <rect x="28" y="394" rx="0" ry="0" width="109" height="35" />
    <rect x="173" y="394" rx="0" ry="0" width="97" height="35" />
  </ContentLoader>
)

export default Sceleton
