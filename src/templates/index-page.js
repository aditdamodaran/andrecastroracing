import React from 'react';
import PropTypes from 'prop-types'

import Layout from '../components/Layout'
import BlogRoll from '../components/BlogRoll'
import ContentBar from '../components/ContentBar'

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

return (
  <div>

    <div> {/* Handles React-Media Conditional SSR Rendering*/}
      <div 
      className="full-width-image margin-top-0" 
      style={{
        backgroundImage: `url(${!!image.childImageSharp ? image.childImageSharp.fluid.src : image})`
      }}>
      </div>
    </div>

    <section className="section section--gradient">
      
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                

                <div className="about columns">
                  <div 
                    className="about-image column is-5"
                  >
                    <div
                      style={{
                        width: 'auto',
                        height: '100%',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center center',
                        backgroundImage: `url(${!!image2.childImageSharp ? image2.childImageSharp.fluid.src : image2})`
                      }}>
                    >
                    </div>
                  </div>
                  <div 
                    className="about-text column is-7"
                  >
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

    {/*<section className="banner">
      <ContentBar 
        text={''} 
        color={'white'}
        background={intro.blurbs[3]}
        height={'60vw'}
      />
    </section> */}
    
    <div className="blog-post-tiles">
      <BlogRoll index={index}/>     
    </div>
    
    <section className="partners">
      <ContentBar 
        text={'Partners'} 
        color={'black'}
        images={
          [
            intro.partners[0],
            intro.partners[1],
            intro.partners[2]
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
        description
        intro {
          partners {
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
    }
  }
`
