import React from 'react'

import Layout from '../../components/Layout'
import News from '../../components/News'
import ContentBar from '../../components/ContentBar'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <ContentBar 
          color={'white'}
          textposition={'center'}
          backgroundposition={'center center'}
        />
          <h1
            className="has-text-weight-bold is-size-1"
            style={{
              backgroundColor: '#d24b4d',
              color: 'white',
              textAlign: 'center'
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
