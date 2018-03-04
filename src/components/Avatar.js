import React from 'react'
import avatar from '../images/jeroen-ransijn.jpg'

export default class Avatar extends React.PureComponent {
  render() {
    return <img src={avatar} alt="Jeroen Ransijn avatar" {...this.props} />
  }
}
