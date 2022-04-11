
import mongoose, { Schema } from 'mongoose'
import IBook from "../interfaces/book";
const BookSchema: Schema = new Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    extraInformation: {
        type: String,
    }
}, {
    timestamps: true
})

BookSchema.post<IBook>('save', function (doc: IBook) {
    this.extraInformatıon = 'Bu bir extra bilgisidir ,save işleminde sonra birde bunu eklemesi istersek bu şekilde bir kullanım sağlanmalıdır'
})

export default mongoose.model<IBook>('Book', BookSchema)