import { todo } from 'node:test'
import { useState, useEffect } from 'react'

//TODOデータの型
type Todo = {
  id: number
  title: string
  content: string
}

export function TodoItem() {
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

  //Todoを更新する
  const UpdateTodo = (id: number, newTitle: string, newContent: string) => {
    //idに該当するデータのtitleとcontentを更新
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, title: newTitle, content: newContent } : todo
    )
    setTodos(updatedTodos)
    localStorage.setItem('todos', JSON.stringify(updatedTodos))
  }

  return { todos, addTodo, UpdateTodo }
}
