import React from 'react'
import PropTypes from 'prop-types'
import { VideoPageTemplate } from '../../templates/video-page'

const VideoPagePreview = ({ entry, widgetFor }) => (
  <VideoPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

VideoPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default VideoPagePreview
