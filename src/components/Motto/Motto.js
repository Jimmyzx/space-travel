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
