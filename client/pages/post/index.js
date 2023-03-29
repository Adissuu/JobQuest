import Layout from "@/components/UI/Layout"
import PostForm from "@/components/Posts/PostForm";
import { useRouter } from "next/router";

const NewPost = () => {
    const router = useRouter();

    return (
    <>
      <Layout pathname={router.query.id?"manage":"post"}>
        <PostForm/>
      </Layout>
    </>
    )
}

export default NewPost;