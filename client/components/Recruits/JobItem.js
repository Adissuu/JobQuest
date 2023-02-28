import styles from"../../styles/Jobs/jobs.module.css";

function JobItem(props) {
    return <div>
        <div className={styles.title}>{props.title}</div>
        <div className={styles.company}>{props.company}</div>
    </div>
}

export default JobItem;