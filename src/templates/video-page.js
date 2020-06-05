import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const VideoPageTemplate = ({ title, image, content, contentComponent }) => {
  const PageContent = contentComponent || Content
  console.log(image)

  return (
    <div>
      <section className="section section--gradient about-page">
        <div className="container about-page-content">
          <div 
            className="columns"
          >
            <div className="column is-10 is-offset-1">

              <div className="section">
                <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                  {title}
                </h2>
                <PageContent className="content" content={content} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

VideoPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const VideoPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <VideoPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
        image={post.frontmatter}
      />
    </Layout>
  )
}

VideoPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default VideoPage

export const videoPageQuery = graphql`
  query VideoPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
