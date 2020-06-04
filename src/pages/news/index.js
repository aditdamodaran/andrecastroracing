import React from 'react'

import Layout from '../../components/Layout'
import News from '../../components/News'
import ContentBar from '../../components/ContentBar'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <ContentBar 
          text={'News'}
          color={'white'}
          textposition={'center'}
          backgroundposition={'center center'}
        />
          <h1
            className="has-text-weight-bold is-size-1"
            style={{
              boxShadow: '0.5rem 0 0 #f40, -0.5rem 0 0 #f40',
              backgroundColor: '#d24b4d',
              color: 'white',
              padding: '1rem 3.5rem',
            }}
          >
            News
          </h1>
        <section className="section">
          <div className="container">
            <div className="content">
              <News />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
