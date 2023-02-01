import styles from './Post.module.css';
import { Comment } from './Comment'
import { Avatar } from './Avatar';

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://github.com/HugoNCastro.png" />
          <div className={styles.authorInfo}>
            <strong>Hugo Naaman Castro</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time title='11 de Maio de 2022 as 08:13' dateTime='2022-05-11 08:13:30'>
          Publicado há 1h
        </time>
      </header>
      <div className={styles.content}>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit</p>
        <p>Lorem ipsum dolor sit, <a href='#'>amet consectetur adipisicing elit</a></p>
        <p><a href="#">hugo.design/bla</a></p>
        <p>
          <a href='#'>#Lorem ipsum</a>{' '}
          <a href='#'> #dolor sit</a>{' '}
          <a href='#'> #elit</a>{' '}
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          placeholder='Deixe um comentário'
        />
        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        <Comment />
        <Comment />
      </div>
    </article>
  )
}