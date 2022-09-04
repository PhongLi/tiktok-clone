import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import Button from '~/Components/Button';
import styles from './AccountPreview.module.scss';

const cx = classNames.bind(styles);
function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img
                    className={cx('avt')}
                    src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1662364800&x-signature=61GVlVI%2Fa8A8PA8i87vBQ2Y83tQ%3D"
                    alt=""
                />
                <Button type={'primary'} className={cx('follow-btn')}>Follow</Button>
            </div>
            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>phongli</strong>
                    <FontAwesomeIcon className={cx('check-icon')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>Trần Phi Long</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>9.2M </strong>
                    <span className={cx('label')}>Followers</span>
                    <strong className={cx('value')}>923.2M </strong>
                    <span className={cx('label')}>Likes</span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;
