import classNames from 'classnames/bind';

import PropTypes from 'prop-types';
import styles from './Menu.module.scss';
import Button from '~/Components/Button';

const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
    const classes = cx('menu-item', {
        separate: data.separate
    })
    return (
        <Button leftIcon={data.icon} className={classes} to={data.to} onClick={onClick}>
            {data.title}
        </Button>
    );
}

MenuItem.propTypes = {
    data: PropTypes.object.isRequired,
    onClick: PropTypes.func,
}
export default MenuItem;
