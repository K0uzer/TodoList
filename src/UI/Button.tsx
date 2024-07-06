type ButtonProps = {
    className: string
    name: string
    getEvent: () => void
}

const Button = ({ className, name, getEvent }: ButtonProps) => {
    return (
        <button className={className} onClick={getEvent}>
            {name}
        </button>
    )
}

export default Button
