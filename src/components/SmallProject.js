import React from 'react'
import PropTypes from 'prop-types'

export default class SmallProject extends React.Component {
  static propTypes = {}

  render() {
    const { children, ...props } = this.props
    return (
      <div className="SmallProject">
        <div className="SmallProject-left">
          <p className="SmallProject-date text-all-caps">{props.date}</p>
          <h2 className="SmallProject-title">{props.title}</h2>
          <p className="SmallProject-content">{props.content}</p>
          {props.link}
        </div>
        <figure
          className={`SmallProject-figure ${props.hasFigurePadding &&
            'figure-padding'}`}
        >
          <img src={props.image} />
        </figure>
      </div>
    )
  }
}
