import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const Book = () => {
    let { state } = useLocation();
    const [book, setBook] = useState();

    useEffect(() => {
        if (state) return setBook(state.data);
        // const
    }, []);

    console.log(state);
    return (
        <div className="book">
            <div className="book__content container">
                {book && <div>{book.volumeInfo.title}</div>}
                {!book && <div>Грузи инфу, лошара</div>}
            </div>
        </div>
    );
};

export default Book;
