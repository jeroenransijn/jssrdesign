import React from 'react'
import Link from 'gatsby-link'
import Markdown from 'react-markdown'
import content from 'raw-loader!../data/personas-case-study.md'
import Article from '../components/Article'
import Footer from '../components/Footer'

const PersonasPage = () => (
  <div>
    <Article>
      <Markdown escapeHtml={false} source={content} />
    </Article>
    <Footer />
  </div>
)

export default PersonasPage
