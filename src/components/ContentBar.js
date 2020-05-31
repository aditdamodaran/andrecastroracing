import React from 'react'
import PreviewCompatibleImage from './PreviewCompatibleImage'

class ContentBar extends React.Component {
  render() {
    const props = this.props
    // console.log(props)
    return (
        <div className="content-bar"
        style={{
            backgroundColor: props.color
        }}>
            <div className="title-container">
                <h4 className="title">{props.text}</h4>
            </div>
            <div className='images'>
                {props.images ? 
                    props.images.map((image, idx) =>
                    <PreviewCompatibleImage 
                        className=""
                        imageInfo={image}
                        key={idx}
                    />
                ) : null}
            </div>
        </div>
    )
  }
}

export default ({text, color, images}) => (
 <ContentBar text={text} color={color} images={images}/>
)
