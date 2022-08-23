import { useState, forwardRef } from 'react';
import classNames from 'classnames/';
import PropTypes from 'prop-types';

import images from '~/assets/images';
import styles from './Image.module.scss';

const Image = forwardRef(({ src, alt, className, fallBack: customFallback = images.noImage, ...props }, ref) =>{
    const [fallBack, setFallback] = useState('');

    const handleError = () => {
        setFallback(customFallback);
    };
    return (
        <img
            className={classNames(styles.wrapper, className)}
            {...props}
            src={fallBack || src}
            ref={ref}
            alt={alt}
            onError={handleError}
        />
    );
})

Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
    fallBack: PropTypes.string,
}

export default Image;
