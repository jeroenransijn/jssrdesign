import React from 'react'
import PropTypes from 'prop-types'
import image from '../images/personas-frame-1.png'

export default class ProjectOverview extends React.Component {
  static propTypes = {}

  render() {
    const { children, ...props } = this.props
    return (
      <section className="clearfix">
        <div className="Container ">
          <div className="Project typekit-font-sans">
            <figure className="Project-figure">
              <img src={image} />
            </figure>
            <div className="Project-content">
              <h2>Personas</h2>
              <p>Personas</p>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
