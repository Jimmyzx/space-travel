import styles from "./Motto.module.css";

function Motto() {
  return (
    <div className={styles["motto"]}>
      <span className={styles["motto__text"]}>Space, The Final Frontier</span>
      <span className={styles["motto__emojis"]}>
        <a href="/home">🌎</a>
        <a href="/planets">🪐</a>
        <a href="/spacecrafts">🚀</a>
        <a href="/spacecraft/build">🧑‍🚀</a>        
      </span>
    </div>
  );
}

export default Motto;

// import { useNavigate } from 'react-router-dom';
// import styles from './Motto.module.css';

// function Motto() {
//   const navigate = useNavigate();

//   const handleEmojiClick = (path) => {
//     navigate(path);
//   };

//   return (
//     <div className={styles['motto']}>
//       <span className={styles['motto__text']}>Space, The Final Frontier</span>
//       <span className={styles['motto__emojis']}>
//         <button onClick={() => handleEmojiClick('/home')}>🌎</button>
//         <button onClick={() => handleEmojiClick('/planets')}>🪐</button>
//         <button onClick={() => handleEmojiClick('/spacecrafts')}>🚀</button>
//         <button onClick={() => handleEmojiClick('/spacecraft/build')}>🧑‍🚀</button>
//       </span>
//     </div>
//   );
// }

// export default Motto;
