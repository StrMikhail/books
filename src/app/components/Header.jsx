import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { setCurrentCategory, setCurrentSort } from '../store/search';
import InputSelect from './InputSelect';
import Search from './Search';

const selectCategory = [
    {
        value: 'all',
        title: 'Все',
    },
    {
        value: 'art',
        title: 'Арт',
    },
    {
        value: 'biography',
        title: 'Биография',
    },
    {
        value: 'computers',
        title: 'Компьютеры',
    },
    {
        value: 'history',
        title: 'История',
    },
    {
        value: 'medical',
        title: 'Медицина',
    },
    {
        value: 'poetry',
        title: 'Поэзия',
    },
];
const setelcSort = [
    {
        value: 'relevance',
        title: 'Популярные',
    },
    {
        value: 'newest',
        title: 'Новые',
    },
];

const Header = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const { category, sort } = useSelector((state) => state.search);

    const handleChangeCategoty = (e) => {
        dispatch(setCurrentCategory(e.target.value));
    };

    const handleChangeSort = (e) => {
        dispatch(setCurrentSort(e.target.value));
    };

    return (
        <div className="header">
            <div className="header__content container">
                <span className="header__title">SHBOOKS</span>
                {location.pathname === '/' && (
                    <div className="header__form">
                        <Search />
                        <div className="form__select">
                            <InputSelect
                                select={category}
                                options={selectCategory}
                                handleChange={handleChangeCategoty}
                                id={'category'}
                            />
                            <InputSelect
                                select={sort}
                                handleChange={handleChangeSort}
                                options={setelcSort}
                                id={'sort'}
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Header;
