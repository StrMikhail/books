import React from 'react';
import { Link } from 'react-router-dom';

const BookCard = ({ book }) => {
    const hasImage = ['imageLinks'] in book.volumeInfo;

    return (
        <Link className="book__card">
            <div className="book__content">
                <div className="book__image">
                    {hasImage ? (
                        <img
                            src={
                                book.volumeInfo.imageLinks.thumbnail ||
                                book.volumeInfo.imageLinks.thumbnail
                            }
                            alt="book"
                        />
                    ) : (
                        <span></span>
                    )}

                    <div className="book__info">
                        <span>{book.volumeInfo.title}</span>
                        <p>
                            {book.volumeInfo.authors
                                ? book.volumeInfo.categories
                                : 'Категории не заданы'}
                        </p>
                        <p>
                            {book.volumeInfo.authors
                                ? book.volumeInfo.authors
                                : ' Авторы неизвестны'}
                        </p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default BookCard;
