import React from 'react'
import PreviewCompatibleImage from './PreviewCompatibleImage'

class ContentBar extends React.Component {
  render() {
    const props = this.props
    let bg = null
    if (props.background){
        bg = props.background.image
        console.log(bg)
    }
    // console.log(background)
    return (
        <div className="content-bar"
        style={{
            backgroundColor: props.color,
            backgroundImage: bg ? `url(${!!bg.childImageSharp ? bg.childImageSharp.fluid.src : bg})` : 'none',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            height: bg ? props.height : 'auto'
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

export default ({text, color, images, background, height}) => (
 <ContentBar text={text} color={color} images={images} background={background} height={height}/>
)
