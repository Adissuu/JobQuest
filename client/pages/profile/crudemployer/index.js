import Layout from "@/components/UI/Layout"

const CreateEmployer = () => {

    const EmployerForm = () => {
        return (
            <>
                <div class="w-full max-w-xl mx-auto component flex items-start justify-center overflow-x-hidden py-4">
                    <form action="" method="post">
                        <h1>Creating your recruiter profile</h1>
                        <div className="py-2 mb-5">
                            <div className="mb-4">
                                <label className="block text-gray-700 dark:text-white text-sm mb-2" htmlFor="company">Company</label>
                                <input className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500" type="text" placeholder="JobQuest" autoFocus />
                            </div>
                            <label htmlFor="description" className="block text-gray-700 dark:text-white text-sm mb-2">What are you hiring for?</label>
                            <textarea name="description" id="description" className="w-full px-4 py-3 bg-white dark:text-black-100 border-gray-400 border rounded" cols="" rows=""
                                placeholder="I am searching for..."></textarea>
                            <div className="mb-4 md:mb-0">
                                <label className="block text-gray-700 dark:text-white text-sm mb-2">Upload your company's logo</label>
                                <input type="file" className="appearance-none block w-full bg-gray-200 text-gray-700 dark:text-black-100 border border-gray-200 rounded py-3 px-3 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" />
                            </div>
                        </div>
                        <button className="bg-teal-500 hover:bg-teal-600 text-white py-2 px-3 rounded" type="submit">Create Profile</button>
                    </form>
                </div >
            </>
        )
    }

    return (
        <>
            <Layout>
                <EmployerForm />
            </Layout>
        </>
    )
}

export default CreateEmployer;