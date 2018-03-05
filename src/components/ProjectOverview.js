import React from 'react'
import PropTypes from 'prop-types'
import Link, { navigateTo } from 'gatsby-link'
import { css } from 'emotion'
import BigProject from './BigProject'
import ArrowRight from './ArrowRight'
import personasImage from '../images/projects/personas/macbook-personas.png'
import blog from '../images/projects/segment-blog.png'
import synapse from '../images/projects/synapse.png'
import bottlesTonightImage from '../images/projects/bottles-tonight/macbook-bottles-tonight.png'
import fxApp from '../images/projects/1fxapp/1fxapp.png'
import absorbedApp from '../images/projects/absorbed/absorbed.png'

// const BigProject = props => {
//   return (
//     <div
//       className={css`
//         margin-bottom: 48px;
//       `}
//       {...props}
//     />
//   )
// }

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
        <div className={'WideContainer'}>
          <BigProject
            date="2017 – Ongoing"
            title="Personas"
            content="Discover what’s most important to each user from a heap of raw data. Then, personalize every interaction in real-time."
            image={personasImage}
            link={
              <Link to="/personas" className="text-all-caps black-link">
                <span>View case study</span> <ArrowRight height={8} />
              </Link>
            }
          />
          <Split>
            <div>
              <img src={blog} />
            </div>
            <div>
              <img src={synapse} />
            </div>
          </Split>
          <BigProject
            date="2016"
            title="BottlesTonight"
            content="Access to Hundreds of Nightclubs. Add your group to guest lists, purchase tickets and reserve VIP."
            image={bottlesTonightImage}
            link={
              <a
                href="https://www.getbottlestonight.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-all-caps black-link"
              >
                <span>View live</span> <ArrowRight height={8} />
              </a>
            }
          />
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
