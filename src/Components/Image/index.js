import { useState, forwardRef } from 'react';
import classNames from 'classnames/';

import images from '~/assets/images';
import styles from './Image.module.scss';

function Image({ src,alt, className, fallBack: customFallback = images.noImage, ...props }, ref) {
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
}

export default forwardRef(Image);
