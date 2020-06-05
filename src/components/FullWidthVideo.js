import React from 'react'

class FullWidthVideo extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        const props = this.props
        return(
            <div className="video">
              <div className="vimeo-wrapper">
                <iframe src={props.url + '?background=1&autoplay=1&loop=1&muted=1'}
                    allow="autoplay; fullscreen"
                    frameBorder="0" 
                    allowFullScreen
                >
                </iframe>
              </div>
            </div>
        )
    }
}

export default ({url}) => (
 <FullWidthVideo 
    url={url}
  />
)