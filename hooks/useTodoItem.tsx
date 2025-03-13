import { useState, useEffect } from 'react'
import {
  Timestamp,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from '@/firebase/firebase';
import { title } from 'process';
import { Content } from 'next/font/google';

//TODOデータの型
type Todo = {
  id: string
  title: string
  content: string
}



export function useTodoItem() {
  const [todos, setTodos] = useState<Todo[]>([])

  // docData(id:string, title:string, content:string): string {
  // }

  // Todoリストを取得
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos') || '[]')
    setTodos(storedTodos)
  }, [])

  //Todoを追加
  const addTodo = async (title: string, content: string) => {
    //const newTodo = { id: (todos.length + 1).toString(), title, content }
    //const updatedTodos = [...todos, newTodo]
    //setTodos(updatedTodos)
    const newId = {id:todos.length + 1};
    const docData ={
      id: (todos.length + 1).toString(),
      title: title,
      content: content
    }
    await setDoc(doc(db,"todos",docData.id), docData)
    //localStorage.setItem('todos', JSON.stringify(updatedTodos))
  }

  //Todoを更新する
  const updateTodo = (id: string, newTitle: string, newContent: string) => {
    //idに該当するデータのtitleとcontentを更新
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, title: newTitle, content: newContent } : todo
    )
    // ローカルストレージの `todos` を削除
    localStorage.removeItem('todos')
    localStorage.setItem('todos', JSON.stringify(updatedTodos))
    setTodos(updatedTodos)
  }

  //Todoを削除する
  const deleteTodo = (id: string) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id)

    // ID を振り直す
    const reindexedTodos = updatedTodos.map((todo, index) => ({
      ...todo,
      id: (index + 1).toString(), // 1 から順に ID を振り直す
    }))
    // ローカルストレージの `todos` を削除
    localStorage.removeItem('todos')
    localStorage.setItem('todos', JSON.stringify(reindexedTodos))
    setTodos(reindexedTodos)
  }

  return { todos, setTodos, addTodo, updateTodo, deleteTodo }
}
function docData(TodoId: { id: string; }, title: string, content: string): any {
  throw new Error('Function not implemented.');
}

