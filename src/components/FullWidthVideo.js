import React from 'react'

class FullWidthVideo extends React.Component {
    render(){
        return(
            <div className="video">
            <div class="vimeo-wrapper">
                <iframe src="https://player.vimeo.com/video/240858420?background=1&autoplay=1&loop=1&byline=0&title=0"
                        frameborder="0" 
                        webkitallowfullscreen 
                        mozallowfullscreen 
                        allowfullscreen
                >
                </iframe>
            </div>
            </div>
        )
    }
}

export default ({ }) => (
 <FullWidthVideo 
  />
)