import React from 'react'
import PropTypes from 'prop-types'
import Link, { navigateTo } from 'gatsby-link'
import { css } from 'emotion'
import BigProject from './BigProject'
import SmallProject from './SmallProject'
import ArrowRight from './ArrowRight'
import personasImage from '../images/projects/personas/macbook-personas.png'
import blogImage from '../images/projects/segment-blog/segment-blog-screenshot.png'
import synapseImage from '../images/projects/synapse/synapse-screenshot.png'
import bottlesTonightImage from '../images/projects/bottles-tonight/macbook-bottles-tonight.png'
import fxApp from '../images/projects/1fxapp/1fxapp@2x.jpg'
import absorbedApp from '../images/projects/absorbed/absorbed@2x.jpg'

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
            <SmallProject
              hasFigurePadding
              date="2017 – Ongoing"
              title="Segment Blog"
              content="The Segment Blog hosts many in depth engineering posts that often make it to the front page of Hacker News."
              image={blogImage}
              link={
                <a
                  href="https://segment.com/blog/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-all-caps-small black-link"
                >
                  <span>View live</span> <ArrowRight height={8} />
                </a>
              }
            />
            <SmallProject
              hasFigurePadding
              date="2017"
              title="Synapse 2017"
              content="Segment’s first ever exclusive user conference.
The CEO and Head of Product announce Personas."
              image={synapseImage}
              link={
                <a
                  href="http://synapse.segment.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-all-caps-small black-link"
                >
                  <span>View live</span> <ArrowRight height={8} />
                </a>
              }
            />
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
            <SmallProject
              date="2015"
              title="Absorbed App"
              content="Music visualisation app for iOS and Apple TV. Developers can create visualisations in real-time with OpenGL."
              image={absorbedApp}
              link={
                <a
                  href="http://absorbedapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-all-caps-small black-link"
                >
                  <span>View live</span> <ArrowRight height={8} />
                </a>
              }
            />
            <SmallProject
              date="2015"
              title="1FX iOS App"
              content="Load songs from your music library. Apply 6 powerful music effects that DJs use."
              image={fxApp}
              link={
                <a
                  href="http://1fxapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-all-caps-small black-link"
                >
                  <span>View live</span> <ArrowRight height={8} />
                </a>
              }
            />
          </Split>
        </div>
      </section>
    )
  }
}
