import React from 'react'
import PropTypes from 'prop-types'

export default class BigProject extends React.Component {
  static propTypes = {}

  render() {
    const { children, ...props } = this.props
    return (
      <div className="BigProject">
        <div className="BigProject-left">
          <p className="BigProject-date text-all-caps">{props.date}</p>
          <h2 className="BigProject-title">{props.title}</h2>
          <p className="BigProject-content">{props.content}</p>
          {props.link}
        </div>
        <figure className="BigProject-figure">
          <img src={props.image} />
        </figure>
      </div>
    )
  }
}
