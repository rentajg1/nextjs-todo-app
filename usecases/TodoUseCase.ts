import {
  fetchTodos,
  addTodo,
  updateTodo,
  deleteTodo,
} from '../repositories/TodoRepository'
import { Todo } from '../entities/Todo'

export const useTodoUseCase = () => {
  const getTodos = async (): Promise<Todo[]> => {
    return await fetchTodos()
  }

  const createTodo = async (title: string, content: string): Promise<void> => {
    await addTodo(title, content)
  }

  const modifyTodo = async (
    id: string,
    title: string,
    content: string
  ): Promise<void> => {
    await updateTodo(id, title, content)
  }

  const removeTodo = async (id: string): Promise<void> => {
    await deleteTodo(id)
  }

  return { getTodos, createTodo, modifyTodo, removeTodo }
}
