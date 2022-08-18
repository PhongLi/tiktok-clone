import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);
function AccountItem() {
    return <div className={cx('wrapper')}>
        <img className={cx('avatar') } src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/b4f45ab45c999aac225a7322dc33237f~c5_300x300.webp?x-expires=1660986000&x-signature=LxCZ77oIKi%2FvgGlkN2qVERpmpJY%3D" alt="ava"  />
        <div className={cx('info')}>
            <h4 className={cx('name')}>
                <span>Nguyen Van A</span>
                <FontAwesomeIcon className={cx('icon')} icon={faCheckCircle} />
            </h4>
            <span className={cx('username')}>nguyenvana</span>
        </div>
    </div>;
}

export default AccountItem;
