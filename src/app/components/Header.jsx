import React from 'react';
import { useLocation } from 'react-router-dom';
import Input from './Input';
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

    const handleSubmitForm = (e) => {
        e.preventDefault();
        console.log((e.target[0].value = ''));
    };

    return (
        <div className="header">
            <div className="header__content container">
                <span className="header__title">SHBOOKS</span>
                {location.pathname === '/' && (
                    <div className="header__form">
                        <form onSubmit={handleSubmitForm}>
                            <Search />
                        </form>
                        <div className="form__select">
                            <InputSelect options={selectCategory} id={'category'} />
                            <InputSelect options={setelcSort} id={'sort'} />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Header;
