import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import FullWidthVideo from '../components/FullWidthVideo'

export const VideoPageTemplate = ({ title, videos, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <div>
      <section className="section section--gradient about-page">
        <div className="container about-page-content">
          <div 
            className="columns"
          >
            <div className="column is-10 is-offset-1">

              <div className="section">
                <FullWidthVideo
                  url={'https://player.vimeo.com/video/426112668'}
                />
                <div className="other-videos-wrapper">
                <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                  {title}
                </h2>
                  {videos ? videos.map((url, idx)=>
                    <div className="other-video" key={idx}>
                      <iframe src={url+"?&rel=0"} 
                        title={idx}
                        frameBorder="0" 
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen>
                      </iframe>
                      <br></br>
                    </div>
                  ) : null }
                  <PageContent className="content" content={content} />
                </div>
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
  // console.log(data)

  return (
    <Layout>
      <VideoPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
        videos={post.frontmatter.videos}
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
        videos
      }
    }
  }
`
