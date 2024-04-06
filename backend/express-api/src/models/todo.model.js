import { Schema, model } from 'mongoose';

const TodoSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      minlength: 3,
      maxLength: 32,
    },
    description: {
      type: String,
      required: false,
      maxLength: 256,
    },
    isDone: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const TodoModel = new model('Todo', TodoSchema);

export default TodoModel;
