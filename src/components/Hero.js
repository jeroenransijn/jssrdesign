import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import { css } from 'emotion'
import Twitter from './Twitter'
import LinkedIn from './LinkedIn'
import Avatar from './Avatar'

const A = props => {
  return <a href="#" {...props} className="Link font-normal fancy-underline" />
}

export default class Hero extends React.PureComponent {
  render() {
    const { children, ...props } = this.props
    return (
      <div className="Hero Container">
        <div className="Hero-header">
          <Avatar className="Hero-avatar" />
          <h1 className="Hero-blurb typekit-font-serif text-black">
            I am Jeroen Ransijn, a Product Designer <br />
            <i>&amp;</i> Developer in San&nbsp;Francisco
          </h1>
        </div>
        <div className="Hero-content typekit-font-sans text-grey-darkest  font-light">
          <p className="my-4">
            I’ve been designing and building web and mobile products for the
            past&nbsp;5&nbsp;years. I’m a full-stack designer, specializing in
            user experience, interaction design, visual design and front-end
            development.
          </p>
          <p className="my-4">
            I currently work at{' '}
            <A
              target="_blank"
              href="https://segment.com/"
              rel="noopener noreferrer"
            >
              Segment
            </A>{' '}
            and spearhead the design, development and adoption of our
            open-source design system called{' '}
            <A
              target="_blank"
              href="https://github.com/segmentio/evergreen"
              rel="noopener noreferrer"
            >
              Evergreen
            </A>.
          </p>
          <p className="my-4">
            I also lead the product design of our latest product —{' '}
            <Link to="Personas" className="Link font-normal fancy-underline">
              Personas
            </Link>.
          </p>
          <p style={{ marginTop: 48 }} className="Hero-links">
            <a href="mailto:jssrdesign@gmail.com" className={`Button`}>
              Get in touch
            </a>
            <a
              href="https://twitter.com/Jeroen_Ransijn"
              target="_blank"
              rel="noopener noreferrer"
              className={`black-link text-all-caps`}
            >
              <i>
                <Twitter width={20} height={20} />
              </i>
              <span>Twitter</span>
            </a>
            <a
              href="https://www.linkedin.com/in/jeroenransijn/"
              target="_blank"
              rel="noopener noreferrer"
              className="black-link text-all-caps"
            >
              <i style={{ top: -2, position: 'relative' }}>
                <LinkedIn width={21} height={21} />
              </i>
              <span>LinkedIn</span>
            </a>
          </p>
        </div>
      </div>
    )
  }
}
