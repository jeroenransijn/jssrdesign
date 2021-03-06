import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { withPrefix } from 'gatsby-link'
import '../typekit'
import appleTouchIcon from '../images/apple-touch-icon.png'
import favicon32 from '../images/favicon-32x32.png'
import favicon16 from '../images/favicon-16x16.png'

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
    >
      <link rel="apple-touch-icon" sizes="180x180" href={appleTouchIcon} />
      <link rel="icon" type="image/png" href={favicon32} sizes="32x32" />
      <link rel="icon" type="image/png" href={favicon16} sizes="16x16" />
      <link
        rel="mask-icon"
        href={withPrefix('/safari-pinned-tab.svg')}
        color="#5bbad5"
      />
      <meta name="theme-color" content="#ffffff" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1"
      />
      <link
        href="https://cdn.jsdelivr.net/npm/tailwindcss/dist/preflight.min.css"
        rel="stylesheet"
      />
      <link
        href="https://cdn.jsdelivr.net/npm/tailwindcss/dist/utilities.min.css"
        rel="stylesheet"
      />
    </Helmet>
    <div className="clearfix">{children()}</div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default TemplateWrapper
