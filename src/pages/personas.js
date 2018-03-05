import React from 'react'
import Link from 'gatsby-link'
import Markdown from 'react-markdown'
import BackArrow from 'react-icons/lib/md/keyboard-backspace'
import content from 'raw-loader!../data/personas-case-study.md'
import Article from '../components/Article'
import Footer from '../components/Footer'

const PersonasPage = () => (
  <div>
    <Link to="/" className="Link BackButton">
      <BackArrow /> <span>Home</span>
    </Link>
    <Article>
      <Markdown escapeHtml={false} source={content} />
      <br />
      <br />
      <Link to="/" className="Link">
        <BackArrow /> <span>Home</span>
      </Link>
    </Article>
    <Footer />
  </div>
)

export default PersonasPage
