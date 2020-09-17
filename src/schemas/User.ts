import { Schema, model, Document } from 'mongoose';

interface UserDocument extends Document {
	email?: string,
	firstName?: string,
	lastName?: string
}

const UserSchema = new Schema({
  email: String,
  firstName: String,
  lastName: String,
}, {
  timestamp: true,
});

export default model<UserDocument>('User', UserSchema);
