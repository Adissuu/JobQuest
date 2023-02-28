import { myRecruits } from "../../public/Recruits/dummy-recruits.js";
import RecruitItem from "@/components/Recruits/RecruitsItem";
import styles from "../../styles/Jobs/jobs.module.css";
import { useRouter } from "next/router.js";
import Link from "next/link.js";

function RecruitsList() {
  const router = useRouter();

  let Recruits = myRecruits();

  let content;
  content = Recruits.map((recruit) => (
    <Link  key={recruit.id} className={styles.jobitem} href={"/recruit/"+recruit.id}>
      <RecruitItem title={recruit.Name} company={recruit.City} />
    </Link>
  ));
  return (
    <section className={`${styles.joblist} ${styles.scrollable}`}>
      {content}
    </section>
  );
}

export default RecruitsList;
