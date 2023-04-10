import Layout from "@/components/UI/Layout";
import ApplyForm from "@/components/Apply/ApplyForm";

const ApplyPage = () => {
    return <Layout pathname={`apply`}>
    <h1>Apply Page</h1>
    <ApplyForm />
  </Layout>
}

export default ApplyPage;