import React from 'react'
import PropTypes from 'prop-types'
import { navigateTo } from 'gatsby-link'
import { css } from 'emotion'
import personas from '../images/projects/personas/placeholder.png'
import blog from '../images/projects/segment-blog.png'
import synapse from '../images/projects/synapse.png'
import bottlesTonight from '../images/projects/bottles-tonight/bottles-tonight.png'
import fxApp from '../images/projects/1fxapp/1fxapp.png'
import absorbedApp from '../images/projects/absorbed/absorbed.png'

const BigProject = props => {
  return (
    <div
      className={css`
        margin-bottom: 48px;
      `}
      {...props}
    />
  )
}

const Split = props => {
  return (
    <div
      className={css`
        margin-bottom: 48px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 48px;
      `}
      {...props}
    />
  )
}

export default class ProjectOverview extends React.PureComponent {
  static propTypes = {}

  render() {
    const { children, ...props } = this.props
    return (
      <section className="clearfix">
        <div
          className={css`
            margin-top: 40px;
            margin-left: 80px;
            margin-right: 80px;
          `}
        >
          <BigProject>
            <img src={personas} onClick={() => navigateTo('./personas')} />
          </BigProject>
          <Split>
            <div>
              <img src={blog} />
            </div>
            <div>
              <img src={synapse} />
            </div>
          </Split>
          <BigProject>
            <img src={bottlesTonight} />
          </BigProject>
          <Split>
            <div>
              <img src={fxApp} />
            </div>
            <div>
              <img src={absorbedApp} />
            </div>
          </Split>
        </div>
      </section>
    )
  }
}
