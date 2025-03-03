## 命名規則

### キャメルケースで宣言

関数名、変数名は一律して全てキャメルケースで宣言する。

状態管理

```

const [word, setWord] = useState<string>('')

```

関数・変数

```

const wordList: string[] = []

const handleClick = () => {}

```

### カスタムフック

```

export function useCustomHooks() {
  const [word, setWord] = useState<string>('')

  const updateWord = (word: string) => {
    setWord(word)
  }

  return { word, setWord, updateWord}
}

```
