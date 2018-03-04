import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'emotion'
import Avatar from './Avatar'

export default class Footer extends React.PureComponent {
  render() {
    const { children, ...props } = this.props
    return (
      <footer>
        <div
          className={css`
            margin-top: 12vh;
            margin-bottom: 16vh;
            display: flex;
            align-items: center;
            flex-direction: column;
          `}
        >
          <div>
            <Avatar
              className={css`
                margin-bottom: 12px;
                border-radius: 200px;
                width: 48px;
                height: 48px;
              `}
            />
          </div>
          <p className="typekit-font-sans text-sm text-grey-darkest leading-normal-2 font-light">
            &copy; Jeroen Ransijn
          </p>
        </div>
      </footer>
    )
  }
}
