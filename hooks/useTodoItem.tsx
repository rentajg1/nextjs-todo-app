import { useEffect, useState } from 'react'

//TODOデータの型
type Todo = {
  id: number
  title: string
  content: string
}

export function useTodoItem() {
  const [todos, setTodos] = useState<Todo[]>([])

  // Todoリストを取得
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos') || '[]')
    setTodos(storedTodos)
  }, [])

  //Todoを追加
  const addTodo = (title: string, content: string) => {
    const newTodo = { id: todos.length + 1, title, content }
    const updatedTodos = [...todos, newTodo]
    setTodos(updatedTodos)
    localStorage.setItem('todos', JSON.stringify(updatedTodos))
  }

  return { todos, addTodo }
}
