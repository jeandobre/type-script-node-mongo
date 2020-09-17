import { Schema, model } from 'mongoose';

const UserSchema = new Schema({
  email: String,
  firstName: String,
  lastName: String,
}, {
  timestamp: true,
});

export default model('User', UserSchema);
