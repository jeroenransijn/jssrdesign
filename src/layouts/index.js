import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import '../css/index.css'

const description = `
  Jeroen Ransijn — Product Designer & Developer based in San Francisco. Currently working at Segment.
`

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Jeroen Ransijn"
      meta={[
        { name: 'description', content: description },
        {
          name: 'keywords',
          content:
            'product design, design, ux design, ui design, product developer, full stack designer'
        }
      ]}
    />
    <link
      href="https://cdn.jsdelivr.net/npm/tailwindcss/dist/preflight.min.css"
      rel="stylesheet"
    />
    <link
      href="https://cdn.jsdelivr.net/npm/tailwindcss/dist/utilities.min.css"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="https://use.typekit.net/tlw7lpg.css" />
    <div className="clearfix">{children()}</div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default TemplateWrapper
