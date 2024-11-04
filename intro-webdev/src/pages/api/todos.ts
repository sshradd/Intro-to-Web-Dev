// /pages/api/todos.ts

import type { NextApiRequest, NextApiResponse } from 'next';
import mongoose, { Schema, model, models } from 'mongoose';

// MongoDB Schema for Todo
const TodoSchema = new Schema({
  id: { type: Number, required: true },
  text: { type: String, required: true },
  isComplete: { type: Boolean, default: false },
});

// Create or use existing model to avoid recompiling error
const TodoModel = models.Todo || model('Todo', TodoSchema);

// MongoDB connection function
async function connectMongoDB() {
  if (mongoose.connections[0].readyState) return;
  await mongoose.connect(process.env.MONGODB_URI as string);
}

// API handler for GET, POST, DELETE, and PUT requests
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connectMongoDB();
  
  if (req.method === 'GET') {
    const todos = await TodoModel.find({});
    res.status(200).json(todos);
  } else if (req.method === 'POST') {
    const { id, text, isComplete } = req.body;
    const newTodo = await TodoModel.create({ id, text, isComplete });
    res.status(201).json(newTodo);
  } else if (req.method === 'DELETE') {
    const { id } = req.body; // Expecting an ID in the request body
    await TodoModel.deleteOne({ id });
    res.status(204).end(); // No content to send back
  } else if (req.method === 'PUT') {
    const { id, isComplete } = req.body; // Expecting ID and new completion status
    const updatedTodo = await TodoModel.findOneAndUpdate(
      { id },
      { isComplete },
      { new: true } // Return the updated document
    );
    res.status(200).json(updatedTodo);
  } else {
    res.setHeader('Allow', ['GET', 'POST', 'DELETE', 'PUT']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
