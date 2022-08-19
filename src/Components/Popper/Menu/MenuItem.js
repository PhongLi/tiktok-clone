import classNames from 'classnames/bind';

import styles from './Menu.module.scss';
import Button from '~/Components/Button';

const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
    return (
        <Button leftIcon={data.icon} className={cx('menu-item')} to={data.to} onClick={onClick}>
            {data.title}
        </Button>
    );
}

export default MenuItem;
