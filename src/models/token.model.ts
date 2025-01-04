import mongoose, { Schema, Document } from 'mongoose';

interface IToken extends Document {
  value: string;
  isVerified: boolean;
  expiryDate: Date;
}

const TokenSchema: Schema = new Schema({
  value: { type: String, required: true },
  isVerified: { type: Boolean, default: false },
  expiryDate: { type: Date, required: true },
});

const Token = mongoose.model<IToken>('Token', TokenSchema);

export default Token;