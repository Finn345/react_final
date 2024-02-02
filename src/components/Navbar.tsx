import { useState } from "react";
import { Link } from "react-router-dom"
import Button from "./Button";
import { signInWithPopup, signOut } from 'firebase/auth'
import { auth, Providers } from '../config/firebase'

function Navbar(){
    const [isVisible, setIsVisible] = useState(false)

    const dropDownNav = () =>{
        setIsVisible(!isVisible)
    }

    const clicked = () =>{
        setIsVisible(false)
    }

    const signOutOnClick = () => {
        signOut(auth)
        location.reload();
    }

    const signInOnClick = async() => {
        const response = await signInWithPopup(auth, Providers.google);
        if ( response.user ){
            location.reload();
        }
    }


    return(
        <nav className="items-center flex-wrap bg-gradient-to-r from-blue-800 via-black to-green-400">
            <div className="flex items-start">
                <Link to="/" className="font-extrabold font-mono tracking-normal text-gray-200">Space Suits</Link>
            </div>
            <div className="block">
                <button onClick={dropDownNav}
                className="flex-wrap items-center px-4 py-0
                item-center border hover:text-blue-300">
                <i className="fa-solid fa-caret-down"></i>
                </button>
            </div>
            { isVisible?(
                <div className="w-full block flex-grow items-start rounded-xl">
                    <div className="text-md lg:text-grow">
                        <Button className="rounded-xl bg-cyan-900 bg-opacity-65 hover:bg-purple-800">
                            <Link to='/' onClick={ clicked } className="text-white place-content-evenly m-3 hover:text-gray-400">Home</Link>
                        </Button>
                    </div>
                    <div className="text-md lg:text-grow">
                        <Button className="rounded-xl bg-cyan-900 bg-opacity-65 hover:bg-purple-800">
                            <Link to='/about' onClick={ clicked } className="text-white place-content-evenly m-3 hover:text-gray-400">About</Link>
                        </Button>
                    </div>
                    <div className="text-md lg:text-grow">
                            <Button className="rounded-xl bg-cyan-900 bg-opacity-65 hover:bg-purple-800">
                                <Link to='/dashboard' onClick={ clicked } className="text-white place-content-evenly m-3  hover:text-gray-400">Space Suit Data</Link>
                            </Button>
                    </div>
                        {
                            !auth.currentUser?
                            <div className="text-md lg:text-grow">
                            <Button className="rounded-xl bg-cyan-900 bg-opacity-65 hover:bg-purple-800">
                                <div>
                                    <Link to='/' className="text-white place-content-evenly m-3  hover:text-gray-400" onClick={ () => { signInOnClick() }}>
                                        Sign In
                                    </Link>
                                </div>
                            </Button>
                            </div>
                            :
                            <div className="text-md lg:text-grow">
                            <Button className="rounded-xl bg-cyan-900 bg-opacity-65 hover:bg-purple-800">
                                <div>
                                    <Link to='/' className="text-white place-content-evenly m-3  hover:text-gray-400" onClick={ () => { signOutOnClick() }}>
                                        Sign Out
                                    </Link>
                                </div>
                            </Button>
                            </div>
                        }
                </div>
            ):(<></>
            )}
        </nav>
    )
}

export default Navbar

