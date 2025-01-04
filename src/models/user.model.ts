import mongoose, { Schema, Document } from 'mongoose';

interface IUser extends Document {
  phoneNumber: string;
  token: string;
  bundleId: string;
}

const UserSchema: Schema = new Schema({
  phoneNumber: { type: String, required: true },
  token: { type: String, required: true },
  bundleId: { type: String, required: true },
});

const User = mongoose.model<IUser>('User', UserSchema);

export default User;