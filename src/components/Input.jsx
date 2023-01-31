const Input = ({ prop }) => {
    return (
        <>
            {prop.map((item, index) => {
                return (
                    <input key={index} {...item} className="bg-transparent border-b p-4 sm:w-6/12 mx-auto mt-4 focus:outline-none focus:border-b-2 caret-secondary" />
                )
            })}
        </>
    )
}

export default Input