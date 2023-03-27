import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import BookCard from '../components/BookCard';
import Loading from '../components/Loading';
import { fetchBooks, fetchMoreBooks } from '../store/books';

const Main = () => {
    const dispatch = useDispatch();
    const { books, loading, page } = useSelector((state) => state.books);
    const { category, sort, search } = useSelector((state) => state.search);

    useEffect(() => {
        console.log('грузим данные');
        dispatch(fetchBooks(category, search, sort, page));
    }, [category, sort, search, page]);

    const handleDowonloadMore = () => {
        dispatch(fetchMoreBooks());
    };

    return (
        <>
            <div className="main">
                <div className="main__content container">
                    {loading ? (
                        <Loading />
                    ) : (
                        <>
                            <div className="main__books">
                                {books.map((book) => (
                                    <BookCard book={book} />
                                ))}
                            </div>
                            {books && (
                                <button className="download" onClick={handleDowonloadMore}>
                                    показать еще
                                </button>
                            )}
                        </>
                    )}
                </div>
            </div>
        </>
    );
};

export default Main;
