import { findJob, findRecruits } from "../../public/Recruits/dummy-recruits";
import { useRouter } from "next/router.js";
import Link from "next/link.js";
import styles from "../../styles/Jobs/jobs.module.css";

function RecruitsDescription(props) {
    const router = useRouter();

    const Recruit = findRecruits(router.query.id);

    if (!Recruit) return <div>Error message</div>

    return <div className={styles.jobdescription}>
        <Link href={"/recruit/view/"+Recruit.id} className={styles.title}>{Recruit.Name}</Link>
        <div className={styles.company}>{Recruit.City}</div>
        <div>{Recruit.Education}</div>
        <div>{Recruit.Experience}</div>
        <button className={styles.applybtn}>Apply</button>
    </div>
}

export default RecruitsDescription;