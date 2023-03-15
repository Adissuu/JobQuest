import Layout from "@/components/UI/Layout";
import RecruitsList from "@/components/Recruits/RecruitsList";
import RecruitsDescription from "@/components/Recruits/RecruitsDescription";
import { useRouter } from "next/router";
import styles from "../../styles/Jobs/jobs.module.css";

const Recruits2 = () => {
    const router = useRouter();
    
    return (
        <Layout pathname="recruit">
            <h1>RecruitsList with description of individual recruits</h1>
            <div className={styles.jobcontainer}>
                <RecruitsList />
                <RecruitsDescription />
            </div>
        </Layout>
    )
}
export default Recruits2;
