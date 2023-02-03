import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import styles from './App.module.css';

import "./global.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/HugoNCastro.png',
      name: 'Hugo N. Castro',
      role: 'Web Developer @Comunix'
    },
    content: [
      { type: 'paragraph', content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit' },
      { type: 'paragraph', content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit' },
      { type: 'link', content: 'hugo.design/bla' }
    ],
    publishedAt: new Date('2023-02-02 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/ahnucl.png',
      name: 'Leonardo Cunha',
      role: 'Web Developer @Comunix'
    },
    content: [
      { type: 'paragraph', content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit' },
      { type: 'paragraph', content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit' },
      { type: 'link', content: 'leonardo.design/ble' }
    ],
    publishedAt: new Date('2023-02-01 22:00:00'),
  },
]

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post 
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}

export default App
