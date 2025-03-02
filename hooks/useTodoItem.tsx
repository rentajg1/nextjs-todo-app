import { useState, useEffect } from 'react'

//TODOデータの型
type Todo = {
  id: string
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
    const newTodo = { id: (todos.length + 1).toString(), title, content }
    const updatedTodos = [...todos, newTodo]
    setTodos(updatedTodos)
    localStorage.setItem('todos', JSON.stringify(updatedTodos))
  }

  //Todoを更新する
  const UpdateTodo = (id: string, newTitle: string, newContent: string) => {
    //idに該当するデータのtitleとcontentを更新
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, title: newTitle, content: newContent } : todo
    )
    // ローカルストレージの `todos` を削除
    localStorage.removeItem('todos')
    localStorage.setItem('todos', JSON.stringify(updatedTodos))
    setTodos(updatedTodos)
  }

  return { todos, setTodos, addTodo, UpdateTodo }
}
