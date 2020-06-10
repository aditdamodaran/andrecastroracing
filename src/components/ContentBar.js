import React from 'react'
import PreviewCompatibleImage from './PreviewCompatibleImage'

class ContentBar extends React.Component {
  render() {
    const props = this.props
    let bg = null
    let tp = null
    let bgp = null
    let pad = null
    let tcob = null
    if (props.background){
        bg = props.background.image
    }
    if (props.textposition){
        tp = props.textposition
        if (tp === 'center'){
        }
    }
    if (props.backgroundposition){
        bgp = props.backgroundposition
    }
    if (props.padding){
        pad = props.padding
    }
    if (props.textCenterOnBg){
        tcob = props.textCenterOnBg
    }
    // console.log(background)
    return (
        <div className="content-bar"
        style={{
            backgroundColor: props.color,
            backgroundImage: bg ? `url(${!!bg.childImageSharp ? bg.childImageSharp.fluid.src : bg})` : 'none',
            backgroundSize: 'cover',
            backgroundPosition: bgp,
            backgroundRepeat: 'no-repeat',
            height: bg ? props.height : 'auto',
            padding: pad ? props.padding : '3% 5% 2% 5%',
            display: tcob ? 'flex' : 'block'
        }}>
            <div className="title-container">
                <h4 className="title">
                    {props.text}<br></br>
                    <span>{props.subtitle ? props.subtitle : null}</span>
                </h4>
                
            </div>
            {tp !== 'center' ? <div className='images'>
                {props.images ? 
                    props.images.map((image, idx) =>
                    <PreviewCompatibleImage 
                        className=""
                        imageInfo={image}
                        key={idx}
                    />
                ) : null}
            </div> : null}
        </div>
    )
  }
}

export default ({
    text, 
    subtitle,
    color, 
    images, 
    background, 
    height, 
    textposition, 
    backgroundposition,
    padding,
    textCenterOnBg
}) => (
 <ContentBar 
    text={text} 
    subtitle={subtitle}
    color={color} 
    images={images} 
    background={background} 
    height={height} 
    textposition={textposition}
    backgroundposition={backgroundposition}
    padding={padding}
    textCenterOnBg={textCenterOnBg}
  />
)
