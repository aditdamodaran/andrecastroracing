import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props
    let { edges: posts } = data.allMarkdownRemark
    posts = posts.map(({ node: post }) => post)

    // Remove any posts without featured images from the index page
    if (this.props.index){
      posts = posts.filter(post => post.frontmatter.featuredimage)
    }

    return (
      <div className="tile is-ancestor image-gallery">
          {/* Vertical LEFT Half */}
          <div className="tile is-6 is-vertical">

            <Link className="tile gallery-tile-half" to={posts[0].fields.slug}>
              <div className="gallery-tile-inner"
                style={{
                  backgroundColor : 'maroon',
                  backgroundImage : `url(${posts[0].frontmatter.featuredimage.childImageSharp.fluid.src})`,
                  backgroundPosition: 'center center',
                  width: '100%',
                  height: '100%',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover'
                }}>
                <div className="overlay">
                </div>
                <div className="overlay-title">
                  {posts[0].frontmatter.title}
                </div>
              </div>
            </Link>

            <Link className="tile gallery-tile-half" to={posts[1].fields.slug}>
              <div className="gallery-tile-inner"
                style={{
                  backgroundColor : 'maroon',
                  backgroundImage : `url(${posts[1].frontmatter.featuredimage.childImageSharp.fluid.src})`,
                  backgroundPosition: 'center center',
                  width: '100%',
                  height: '100%',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover'
                }}>
                <div className="overlay">
                </div>
                <div className="overlay-title">
                  {posts[1].frontmatter.title}
                </div>
              </div>
            </Link>

          </div>
          
          
          {/* Vertical RIGHT Half */}
          <Link 
            className="tile square" to={posts[2].fields.slug}
          >
            <div className="gallery-tile-inner"
              style={{
                backgroundColor : 'maroon',
                backgroundImage : `url(${posts[2].frontmatter.featuredimage.childImageSharp.fluid.src})`,
                backgroundPosition: 'center center',
                width: '100%',
                height: '100%',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
              }}>
              <div className="overlay">
              </div>
              <div className="overlay-title">
                {posts[2].frontmatter.title}
              </div>
            </div>
          </Link>
        
      </div>
    )

  
    

  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default (props) => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 1000, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} index={props.index}/>}
  />
)
