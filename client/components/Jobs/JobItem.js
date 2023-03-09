import styles from"../../styles/Jobs/jobs.module.css";
import { useRouter } from "next/router";

function JobItem(props) {
    const router = useRouter();

    let titleContent, employerContent;
    
    if (props.title) {
        titleContent=props.title;
    }
    if (props.employer) {
        employerContent=props.employer/*.CompanyName*/;
    }
    return <div>
        <div className={styles.title}>{titleContent}</div>
        <div className={styles.company}>{employerContent}</div>
    </div>
}

export default JobItem;