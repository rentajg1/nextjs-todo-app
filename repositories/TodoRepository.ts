import { db } from '@/firebase/firebase'
import {
  collection,
  getDocs,
  updateDoc,
  doc,
  deleteDoc,
  setDoc,
} from 'firebase/firestore'
import { Todo } from '../entities/Todo'

// Firestoreのコレクション名
const COLLECTION_NAME = 'todos'

// Todoを取得（Read）
export const fetchTodos = async (): Promise<Todo[]> => {
  const querySnapshot = await getDocs(collection(db, COLLECTION_NAME))
  return querySnapshot.docs.map(
    (doc) => ({ id: doc.id, ...doc.data() } as Todo)
  )
}

// Todoを追加（Create）
export const addTodo = async (
  title: string,
  content: string
): Promise<void> => {
  const snapshot = await getDocs(collection(db, COLLECTION_NAME))
  // 既存のID一覧を取得し、数値として扱う
  let ids = snapshot.docs
    .map((doc) => parseInt(doc.id)) // IDを数値に変換
    .filter((id) => !isNaN(id)) // NaNを除外
  // 最大のIDを取得し、+1 したものを新しいIDとする
  let nextId = (ids.length > 0 ? Math.max(...ids) + 1 : 1).toString()
  // 連番のIDを持つドキュメントを作成
  await setDoc(doc(db, COLLECTION_NAME, nextId), {
    title,
    content,
  })
}

// Todoを更新（Update）
export const updateTodo = async (
  id: string,
  newTitle: string,
  newContent: string
): Promise<void> => {
  const todoRef = doc(db, COLLECTION_NAME, id)
  await updateDoc(todoRef, { title: newTitle, content: newContent })
}

// Todoを削除（Delete）
export const deleteTodo = async (id: string): Promise<void> => {
  await deleteDoc(doc(db, COLLECTION_NAME, id))
}
