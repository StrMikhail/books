import React from 'react';

const BookCard = ({ book }) => {
    return (
        <div className="book__card">
            <div className="book__content">
                <div className="book__image">
                    <img
                        src={
                            book.volumeInfo.imageLinks.smallThumbnail !== undefined
                                ? book.volumeInfo.imageLinks.smallThumbnail
                                : book.volumeInfo.imageLinks.thumbnail
                        }
                        alt="book"
                    />

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
        </div>
    );
};

export default BookCard;
