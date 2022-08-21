/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
import classNames from "classnames/bind";
import { BiUser, BiLogOut } from "react-icons/bi";
import { AiFillSetting } from "react-icons/ai";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPlus,
    faEllipsisVertical,
    faEarthAsia,
    faCloudUpload,
    faCoins,
} from "@fortawesome/free-solid-svg-icons";
import { faCircleQuestion, faKeyboard } from "@fortawesome/free-regular-svg-icons";

import Button from "~/Components/Button";
import styles from "./Header.module.scss";
import images from "~/assets/images";
import Tippy from "@tippyjs/react/";
import "tippy.js/dist/tippy.css";

import { Menu } from "~/Components/Popper";
import { InboxIcon, MessageIcon  } from "~/Components/Icons";
import Image from "~/Components/Image";
import Search from '../Search'


const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: "English",
        children: {
            title: "Language",
            data: [
                {
                    type: "Languages",
                    code: "en",
                    title: "English",
                },
                {
                    type: "Languages",
                    code: "vi",
                    title: "Tiếng Việt",
                },
            ],
        },
    },
    { icon: <FontAwesomeIcon icon={faCircleQuestion} />, title: "Feedback and help", to: "/feedback" },
    { icon: <FontAwesomeIcon icon={faKeyboard} />, title: "Keyboard shorcuts" },
];

function Header() {

    const currentUser = true;

   

    const handelChangeMenu = (menuItem) => {
        console.log(menuItem);
    };

    const userMenu = [
        {
            icon: <BiUser />,
            title: "View profile",
            to: "/@hoa",
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: "Get Coin",
            to: "/coin",
        },
        {
            icon: <AiFillSetting />,
            title: "Setting",
            to: "/setting",
        },

        ...MENU_ITEMS,
        {
            icon: <BiLogOut />,
            title: "Log out",
            to: "/logout",
            separate: true,
        },
    ];
    return (
        <header className={cx("wrapper")}>
            <div className={cx("inner")}>
                {/* Logo tiktok */}
                <img src={images.logo} alt="logo"></img>

                {/* Search */}
                <Search />

                <div className={cx("actions")}>
                    {currentUser ? (
                        <>
                            <Tippy delay={200} interactive content="Upload video" placement="bottom">
                                <button className={cx("action-btn")}>
                                    <FontAwesomeIcon icon={faCloudUpload} />
                                </button>
                            </Tippy>
                            <Tippy delay={200} interactive content="Messages" placement="bottom">
                                <button className={cx("action-btn")}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={200} interactive content="Inbox" placement="bottom">
                                <button className={cx("action-btn")}>
                                    <InboxIcon />
                                    <span className={cx("badge")}>12</span>
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
                                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/b4f45ab45c999aac225a7322dc33237f~c5_300x300.webp?x-expires=1660986000&x-signature=LxCZ77oIKi%2FvgGlkN2qVERpmpJY%3D"
                                className={cx("user-avatar")}
                                alt="nguyen van a"
                            />
                        ) : (
                            <button className={cx("more-btn")}>
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
