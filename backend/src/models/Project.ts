import {Schema, model, Document} from 'mongoose';

const ObjectId = Schema.Types.ObjectId;

const projectSchema = new Schema({
    name: {
        type: String,
        required:true,
        trim: true
    },
    descripition: {
        type: String,
        required:true,
        trim: true
    },
    tecnologies: [{
        tecnology: {
            type: ObjectId,
            ref: 'Tecnology'
        }
    }]
}, {timestamps: true});

export interface IProject extends Document{
    name: string,
    description: string,
    tecnologies: []
}

export default model<IProject>('Project', projectSchema);