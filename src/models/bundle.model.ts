import mongoose, { Schema, Document } from 'mongoose';

interface IBundle extends Document {
  name: string;
  duration: string;
  price: number;
}

const BundleSchema: Schema = new Schema({
  name: { type: String, required: true },
  duration: { type: String, required: true },
  price: { type: Number, required: true },
});

const Bundle = mongoose.model<IBundle>('Bundle', BundleSchema);

export default Bundle;