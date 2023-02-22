import * as dynamoose from 'dynamoose';

dynamoose.aws.ddb.local();

const userSchema = new dynamoose.Schema(
  {
    id: {
      type: String,
      hashKey: true,
    },
    name: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const UserSchema = dynamoose.model('user', userSchema);

export default UserSchema;
