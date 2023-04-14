import Layout from "@/components/UI/Layout"
import AddPostForm from "@/components/Posts/AddPostForm";
import { useRouter } from "next/router";
import UpdatePostForm from "@/components/Posts/UpdatePostForm";

const NewPost = () => {
    const router = useRouter();

    return (
    <>
      <Layout pathname={router.query.id?"manage":"post"}>
        {router.query.id? <UpdatePostForm/> : <AddPostForm/>}
      </Layout>
    </>
    )
}

export default NewPost;