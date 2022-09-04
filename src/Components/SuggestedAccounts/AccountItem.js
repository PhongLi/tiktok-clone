import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '~/Components/Popper';

import styles from './SuggestedAccounts.module.scss';
import AccountPreview from './AccountPreview';

const cx = classNames.bind(styles);

function AccountItem() {
    const renderPreview = (props) => (
        <div className={cx('preview')} tabIndex="-1" {...props}>
            <PopperWrapper className={cx('menu-popper')}>{<AccountPreview />}</PopperWrapper>
        </div>
    );

    return (
        <div>
            <Tippy interactive delay={[800, 0]} offset={[0, 0]} placement="bottom-start" render={renderPreview}>
                <div className={cx('account-item')}>
                    <img
                        className={cx('avt')}
                        src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1662364800&x-signature=61GVlVI%2Fa8A8PA8i87vBQ2Y83tQ%3D"
                        alt=""
                    />
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong>phongli</strong>
                            <FontAwesomeIcon className={cx('check-icon')} icon={faCheckCircle} />
                        </p>
                        <p className={cx('name')}>Trần Phi Long</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

AccountItem.propTypes = {};
export default AccountItem;
