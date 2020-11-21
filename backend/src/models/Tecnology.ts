import {Schema, model, Document} from 'mongoose';

const tecnologySchema = new Schema({
    name: {
        type: String,
        required:true,
        trim: true
    },
    resume: {
        type: String,
        required:true,
        trim: true
    },
    description: {
        type: String,
        required:true,
        trim: true
    },
    url: {
        type: String,
        required:true,
        trim: true
    },
    urlImage: {
        type: String,
        required:true,
        trim: true
    }
}, {timestamps: true, versionKey: false});

export interface ITecnology extends Document{
    name: string;
    description: string;
    url: string;
    urlImage: string;
}

export default model<ITecnology>('Tecnology', tecnologySchema);