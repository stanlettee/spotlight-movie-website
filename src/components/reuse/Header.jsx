import styles from './styles/Header.module.css'
import { IoIosSearch } from "react-icons/io";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

export const Header = ({ setPage, changeTheme, theme }) => {
    return <div className="container">
            <a className={styles.heading}>Spotlight</a> 
            <button><input type="text"/><IoIosSearch className={styles.icon}/></button>
            <button onClick={() => setPage('home')}>Home</button>
            <button onClick={() => setPage('movies')}>Movies</button>
            <button onClick={() => setPage('shows')}>Shows</button>  
            <button onClick={() => setPage('watchlist')}>Watchlist</button> 
            <button onClick={() => changeTheme()}>{theme === 'dark' ? <MdDarkMode /> : <MdLightMode />}</button> 
            <button onClick={() => setPage('signin')}>Sign In</button>  
            <button onClick={() => setPage('signup')}>Sign Up</button>  
        </div>

}