import { useState, useEffect } from 'react'
import { useTodoUseCase } from '../usecases/TodoUseCase'
import { Todo } from '../entities/Todo'

export const useTodoItem = () => {
  const [todos, setTodos] = useState<Todo[]>([])
  const { getTodos, modifyTodo, removeTodo } = useTodoUseCase()

  // Todoリストを取得
  useEffect(() => {
    const loadTodos = async () => {
      const fetchedTodos = await getTodos()
      setTodos(fetchedTodos)
    }
    loadTodos()
  }, [])

  // //Todoを追加
  // const addTodo = async (title: string, content: string) => {
  //   await createTodo(title, content)
  //   setTodos(await getTodos())
  // }

  //Todoを更新する
  const updateTodo = async (
    id: string,
    newTitle: string,
    newContent: string
  ) => {
    await modifyTodo(id, newTitle, newContent)
    setTodos(await getTodos())
  }

  //Todoを削除する
  const deleteTodo = async (id: string) => {
    await removeTodo(id)
    setTodos(await getTodos())
  }

  return { todos, updateTodo, deleteTodo }
}
