import React from 'react';
import { Link } from 'react-router-dom';

const SearchResults = ({ book }) => {
    const hasImage = ['imageLinks'] in book.volumeInfo;
    return (
        <Link key={book.id} to={book.id} state={{ data: book }} className="serch__item">
            <div className="search__item-content">
                {hasImage ? (
                    <img
                        src={
                            book.volumeInfo.imageLinks.smallThumbnail ||
                            book.volumeInfo.imageLinks.thumbnail
                        }
                        alt="book"
                    />
                ) : (
                    <span></span>
                )}
                <div className="search__item-info">
                    <span>{book.volumeInfo.title}</span>
                    <p>
                        {book.volumeInfo.authors
                            ? book.volumeInfo.categories
                            : 'Категории не заданы'}
                    </p>
                    <p>
                        {book.volumeInfo.authors ? book.volumeInfo.authors : ' Авторы неизвестны'}
                    </p>
                </div>
            </div>
        </Link>
    );
};

export default SearchResults;
