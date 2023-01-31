import * as dynamoose from 'dynamoose';
import { v4 as uuidv4 } from 'uuid';

dynamoose.aws.ddb.local();

const userSchema = new dynamoose.Schema(
  {
    id: {
      type: String,
      hashKey: true,
      default: uuidv4(),
    },
    name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    organization: {
      type: String,
      required: false,
      default: 'organization123',
    },
  },
  {
    timestamps: true,
  },
);

const UserSchema = dynamoose.model('user', userSchema);

export default UserSchema;
