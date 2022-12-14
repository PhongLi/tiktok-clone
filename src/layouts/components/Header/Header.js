/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
import classNames from 'classnames/bind';
import { AiFillSetting } from 'react-icons/ai';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/';
import {
    faPlus,
    faEllipsisVertical,
    faEarthAsia,
    faCloudUpload,
    faCoins,
    faUser,
    faRightFromBracket,
    faGear,
} from '@fortawesome/free-solid-svg-icons';
import { faCircleQuestion, faKeyboard } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';
import config from '~/config';

import Button from '~/Components/Button';
import styles from './Header.module.scss';
import images from '~/assets/images';
import 'tippy.js/dist/tippy.css';

import { Menu } from '~/Components/Popper';
import { InboxIcon, MessageIcon } from '~/Components/Icons';
import Image from '~/Components/Image';
import Search from '../Search';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'Languages',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'Languages',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    { icon: <FontAwesomeIcon icon={faCircleQuestion} />, title: 'Feedback and help', to: '/feedback' },
    { icon: <FontAwesomeIcon icon={faKeyboard} />, title: 'Keyboard shorcuts' },
];

function Header() {
    const currentUser = true;

    const handelChangeMenu = (menuItem) => {
        console.log(menuItem);
    };

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/@hoa',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get Coin',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Setting',
            to: '/setting',
        },

        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faRightFromBracket} />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* Logo tiktok */}
                <Link to={config.routes.home} className={cx('logo-link')}>
                    <img src={images.logo} alt="logo"></img>
                </Link>

                {/* Search */}
                <Search />

                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy delay={200} interactive content="Upload video" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <FontAwesomeIcon icon={faCloudUpload} />
                                </button>
                            </Tippy>
                            <Tippy delay={200} interactive content="Messages" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={200} interactive content="Inbox" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                    <span className={cx('badge')}>12</span>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        // actions
                        <>
                            <Button type="text" leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                                Upload
                            </Button>
                            <Button type="primary">Login</Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handelChangeMenu}>
                        {currentUser ? (
                            <Image
                                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/1966fcda97fb1bc61ca3625ac98a5714~c5_100x100.jpeg?x-expires=1661335200&x-signature=5paJWjHhVeqbI3rdQ%2F8bixrMf%2FU%3D"
                                className={cx('user-avatar')}
                                alt="nguyen van a"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
