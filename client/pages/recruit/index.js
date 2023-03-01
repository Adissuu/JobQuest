import Layout from "@/components/UI/Layout";
import RecruitsList from "@/components/Recruits/RecruitsList";

const Recruit = () => {
    return (
        <Layout pathname="recruit">
            <h1>Find the perfect profile for your company!</h1>
                <RecruitsList />
        </Layout>
    )
}

export default Recruit;