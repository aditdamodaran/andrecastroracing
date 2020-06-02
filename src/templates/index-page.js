import React from 'react';
import PropTypes from 'prop-types'

import Layout from '../components/Layout'
import BlogRoll from '../components/BlogRoll'
import ContentBar from '../components/ContentBar'
import Media from 'react-media'
import Parser from 'ua-parser-js'

export const IndexPageTemplate = ({
  image,
  image2,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
  index,
  state
}) => 
{
// const imageURL = useWindowWidth() > 768 ? 
// (!!image.childImageSharp ? image.childImageSharp.fluid.src : image) :
// (!!image2.childImageSharp ? image2.childImageSharp.fluid.src : image2)
// state = getDevice()
// console.log(getDevice)
let parser = new Parser()
let result = parser.getResult().device.type
state = (result === 'mobile') ? 'mobile' : 'desktop'

return (
  <div>
    <div
      style={{
        backgroundImage: `url(${!!image.childImageSharp ? image.childImageSharp.fluid.src : image})`,
        backgroundAttachment: `fixed`,
      }}
    >
    </div>

    <div> {/* Handles React-Media Conditional SSR Rendering*/}
      <Media
        queries={{ medium: "(min-width: 768px)" }}
        defaultMatches={{ medium: state === 'desktop' }}
        render={() => 
          <div 
          className="full-width-image margin-top-0" 
          style={{
            backgroundImage: `url(${!!image.childImageSharp ? image.childImageSharp.fluid.src : image})`,
            backgroundAttachment: `fixed`,
          }}>
          </div>
        }
      />
      <Media
        queries={{ medium: "(max-width: 768px)" }}
        defaultMatches={{ medium: state === 'mobile' }}
        render={() => 
          <div 
          className="full-width-image margin-top-0" 
          style={{
            backgroundImage: `url(${!!image2.childImageSharp ? image2.childImageSharp.fluid.src : image2})`,
            backgroundAttachment: `fixed`,
          }}>
          </div>
        }
      />
    </div>

    <section className="section section--gradient">
      
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                
              
                {/*<div className="content">
                  <div className="tile">
                    <h1 className="title">{mainpitch.title}</h1>
                  </div>
                  <div className="tile">
                    <h3 className="subtitle">{mainpitch.description}</h3>
                  </div>
                </div>*/}

                <div className="columns">
                  <div className="column is-12">
                    {/*<h3 className="has-text-weight-semibold is-size-2">
                      {heading}
                    </h3>*/}
                    <p>{description}</p>
                  </div>
                </div>

                {/*<div className="columns">
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/products">
                      See all products
                    </Link>
                  </div>
                </div>

                <Features gridItems={intro.blurbs} />
                */}



              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <div className="blog-post-tiles">
      <BlogRoll index={index}/>     
    </div>
    
    <section className="partners">
      <ContentBar 
        text={'Partners'} 
        color={'black'}
        images={
          [
            intro.blurbs[0],
            intro.blurbs[1],
            intro.blurbs[2]
          ]
        }
      />
    </section>

  </div>
  
)}


IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  image2: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        image2={frontmatter.image2}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
        index={true}
        state={'desktop'}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        image2 {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 2048, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`
