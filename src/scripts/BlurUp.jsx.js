import React from 'react';

class BlurUp extends React.Component {
    constructor(props) {
        super(props);

        this.onLoadPlaceholder = this.onLoadPlaceholder.bind(this);
        this.onLoadImage = this.onLoadImage.bind(this);

        this.state = {};
    }

    onLoadPlaceholder() {
        this.setState({
            isPlaceholderLoaded: true,
        });
    }

    onLoadImage() {
        this.setState({
            isImageLoaded: true,
        });
    }

    render() {
        const { url, placeholderURL, aspectRatio } = this.props;
        const { isPlaceholderLoaded, isImageLoaded } = this.state;

        const ratio = aspectRatio.replace(/:/, 'x');

        const placeholderImageContainerClasses = [
            'blur-up__aspect-ratio--object',
            'blur-up__blur',
            'blur-up__animation',
            isImageLoaded ? 'blur-up__animation--fade-out' : null,
        ].join(' ');

        const placeholderImageContainer = isPlaceholderLoaded ?
            <div
                className={placeholderImageContainerClasses}
                style={{
                    backgroundImage: `url(${placeholderURL})`,
                }}
            /> :
            null;

        const image = isPlaceholderLoaded ?
            <img
                src={url}
                onLoad={this.onLoadImage}
                role="presentation"
            /> :
            null;

        const imageContainer = isImageLoaded ?
            <div
                className="blur-up__aspect-ratio--object"
                style={{
                    backgroundImage: `url(${url})`,
                }}
            /> :
            null;

        return (
            <div>
                <span className="blur-up__hidden">
                    <img
                        src={this.props.placeholderURL}
                        onLoad={this.onLoadPlaceholder}
                        role="presentation"
                    />
                    {image}
                </span>
                <div className={`blur-up__aspect-ratio blur-up__aspect-ratio--${ratio}`}>
                    {imageContainer}
                    {placeholderImageContainer}
                </div>
                {this.props.children}
            </div>
        );
    }
}

BlurUp.propTypes = {
    url: React.PropTypes.string.isRequired,
    placeholderURL: React.PropTypes.string.isRequired,
    aspectRatio: React.PropTypes.oneOf([
        '16:9',
        '4:3',
        '6:4',
        '8:5',
        '7:5',
        '1:1',
    ]).isRequired,
    children: React.PropTypes.node,
};

export default BlurUp;
