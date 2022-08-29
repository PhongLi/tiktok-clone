import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { useState } from 'react';
import PropTypes from 'prop-types';

import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '~/Components/Popper';
import MenuItem from './MenuItem';
import Header from './Header';

const defaultFunc = () => {};

const cx = classNames.bind(styles);

function Menu({ children, items = [], hideOnClick = false, onChange = defaultFunc }) {
    const [history, setHistory] = useState([{ data: items }]);
    // render ra phần tử cuối cùng trong mảng Items
    const current = history[history.length - 1];

    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;
            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };

    // Reset to first page
    const handleResetMenu = () => {
        setHistory((prev) => prev.slice(0, 1));
    };

    const handleBack = () => {
         // setHistory(prev => prev.slice( 0, history.length - 1 ))
         const newHistory = [...history];
         newHistory.splice(newHistory.length - 1, 1);
         setHistory(newHistory);
    }
    return (
        <Tippy
            interactive
            offset={[12, 9]}
            delay={[0, 700]}
            hideOnClick={hideOnClick}
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                        {history.length > 1 && (
                            <Header
                                title={current.title}
                                onBack={handleBack}
                            />
                        )}

                        {/* render list data in menu */}
                        <div className={cx('menu-body')}>{renderItems()}</div>
                    </PopperWrapper>
                </div>
            )}
            onHide={handleResetMenu}
        >
            {children}
        </Tippy>
    );
}

Menu.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
    hideOnClick: PropTypes.bool,
    onChange: PropTypes.func,
};

export default Menu;
