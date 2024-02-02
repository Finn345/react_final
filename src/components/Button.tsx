interface ButtonProps{
    children: React.ReactNode;
    onClick?: ( event: React.MouseEvent<HTMLButtonElement>) => void;
    className?: string
}

export default function Button ( props: ButtonProps){
    return <button onClick={ props.onClick } className={ props.className }>
        { props.children }
    </button>
}