import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import styles from './App.module.css';

import "./global.css";

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
      <Sidebar />
        <main>
          <Post
            author='Gustavo Aniel'
            content='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi quisquam aliquid autem eveniet placeat iusto dolores nisi ipsum est pariatur. 
            Corporis earum repudiandae vero illo tenetur reprehenderit doloremque excepturi numquam.'
          />
          <Post
            author='Hugo Naaman Castro'
            content='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi quisquam aliquid autem eveniet placeat iusto dolores nisi ipsum est pariatur. 
            Corporis earum repudiandae vero illo tenetur reprehenderit doloremque excepturi numquam.'
          />
        </main>
      </div>
    </div>
  )
}

export default App
