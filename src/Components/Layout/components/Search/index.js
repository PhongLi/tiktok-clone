import HeadlessTippy from '@tippyjs/react/headless';
import axios from 'axios';
import classNames from 'classnames/bind';
import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import * as searchService from '~/apiServices/SearchService';
import { Wrapper as PopperWrapper } from '~/Components/Popper';
import { SearchIcon } from '~/Components/Icons';
import AccountItem from '~/Components/AccountItem';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { useDebounce } from '~/hooks';
import styles from './Search.module.scss';

const cx = classNames.bind(styles);
function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    const debounced = useDebounce(searchValue, 500);

    const inputRef = useRef();

    useEffect(() => {
        if (!debounced.trim()) {
            setSearchResults([]);
            return;
        }

        // XMLHttpRequest
        // fetch
        const fetchApi = async () => {
            //before fetch Api
            setLoading(true);

            const result = await searchService.Search(debounced)
            
            //after fetching Api
            setSearchResults(result)
            setLoading(false);
        }
        fetchApi()
    }, [debounced]);

    const handleHideResult = () => {
        setShowResult(false);
    };

    const handleClear = () => {
        inputRef.current.focus();
        setSearchResults([]);
        setSearchValue('');
    };
    return (
        <HeadlessTippy
            interactive
            visible={showResult && searchResults.length > 0}
            render={(attrs) => (
                <div className={cx('search-results')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('search-title')}>Accounts</h4>
                        {searchResults.map((result) => (
                            <AccountItem key={result.id} data={result} />
                        ))}
                    </PopperWrapper>
                </div>
            )}
            onClickOutside={handleHideResult}
        >
            <div className={cx('search')}>
                <input
                    ref={inputRef}
                    value={searchValue}
                    placeholder="Search accounts and videos"
                    spellCheck={false}
                    onChange={(e) => setSearchValue(e.target.value)}
                    onFocus={() => setShowResult(true)}
                />
                {!!searchValue && !loading && (
                    <button className={cx('clear')} onClick={handleClear}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}

                {loading && <FontAwesomeIcon icon={faSpinner} className={cx('loading')} />}

                <button className={cx('search-btn')}>
                    <SearchIcon />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;
