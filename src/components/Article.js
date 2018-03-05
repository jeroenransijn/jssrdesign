import React from 'react'
import Lightbox from 'react-images'

export default class Article extends React.PureComponent {
  state = {
    images: [],
    lightboxIsOpen: false
  }
  componentDidMount() {
    const images = Array.from(this.articleRef.querySelectorAll('img'))

    this.setState(
      {
        images: images.map(image => {
          return { src: image.getAttribute('src') }
        })
      },
      () => {
        images.forEach((image, index) => {
          image.addEventListener('click', () => {
            this.setState({
              lightboxIsOpen: true,
              currentImage: index
            })
          })
        })
      }
    )
  }

  closeLightbox = () => {
    this.setState({
      lightboxIsOpen: false
    })
  }

  gotoPrevLightboxImage = () => {
    this.setState(state => {
      const currentImage = state.currentImage - 1
      if (currentImage >= state.images.length) {
        return {
          isOpen: false
        }
      }
      return {
        currentImage
      }
    })
  }

  gotoNextLightboxImage = () => {
    this.setState(state => {
      const currentImage = state.currentImage + 1
      console.log('currentImage', currentImage)
      if (currentImage < 0) {
        return {
          isOpen: false
        }
      }
      return {
        currentImage
      }
    })
  }

  render() {
    const { children, ...props } = this.props
    return (
      <article className="Article">
        <div
          className="Article-inner"
          ref={ref => {
            this.articleRef = ref
          }}
        >
          {children}
        </div>
        <Lightbox
          images={this.state.images}
          isOpen={this.state.lightboxIsOpen}
          onClose={this.closeLightbox}
          onClickPrev={this.gotoPrevLightboxImage}
          onClickNext={this.gotoNextLightboxImage}
          currentImage={this.state.currentImage}
        />
      </article>
    )
  }
}
