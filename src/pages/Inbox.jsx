import Input from "../components/Input"

const Inbox = () => {

    const prop = [
        {
            label : "Username : ",
            placeholder : "Input your username",
            type : "text"
        },
        {
            label : "Email : ",
            placeholder : "Input your Email",
            type : "email"
        },
    ]

    return (
        <form className="flex flex-col items-center justify-center bg-primary-800 w-12/12 sm:w-8/12 mx-auto h-[55vh] text-secondary rounded-xl">
            <h1 className="text-3xl text-center font-bold">Inbox me</h1>
            <Input prop={prop}/>
            <button className="bg-btn w-10/12 sm:w-4/12 mx-auto mt-10 h-fit p-2 bg-btn text-white rounded shadow-md shadow-btn hover:bg-btn-500">Request Message</button>
        </form>
    )
}

export default Inbox