import { Request, Response, NextFunction } from 'express';
import logging from '../config/logging';

import Book from '../models/book';

const NAMESPACE = 'Sample Controller';

const createBook = (req: Request, res: Response, next: NextFunction) => {

    const author = req.body.author
    const title = req.body.title
    const book = new Book({
        author: author,
        title: title

    })

    return book.save().then(result => {
        return res.status(201).json({
            createdBook: result
        })
    }).catch(err => {
        return res.status(500).json({
            message: err.message,
            error: err
        })
    })

};

const getAllBooks = (req: Request, res: Response, next: NextFunction) => {

    Book.find().exec().then(books => {
        return res.status(200).json({ books: books, count: books.length });
    }).catch(err => {

        return res.status(500).json({
            message: err.message,
            error: err
        })
    })

};

export default { createBook, getAllBooks };
