import styles from './styles/Header.module.css'
import './styles/Header.module.css'
import { IoIosSearch } from "react-icons/io";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { IoMenu } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { MdPlaylistAddCircle } from "react-icons/md";
import { MdLocalMovies } from "react-icons/md";



export const Header = ({ setPage }) => {
    return <div className="container">
        <div className={styles.box}>
            <div className={styles.headingDiv}>
                <a onClick={() => setPage('home')} className={styles.heading}>SLDb</a> 
            </div>

            <button className={styles.menuButton}><IoMenu className={styles.menu}/><span className={styles.menuSpan}>Menu</span></button>
            <button className={styles.searchButton}><input className={styles.searchBox} type="text"/><FaSearch className={styles.icon}/></button>

            <div className={styles.moviesDiv}>
                <MdLocalMovies />
                <button onClick={() => setPage('movies')}>Movies</button>
                <button onClick={() => setPage('shows')}>Shows</button>
            </div>
            

            <div className={styles.watchlist}>
                <MdPlaylistAddCircle className={styles.watchlistIcon}/>
                <button onClick={() => setPage('watchlist')}>Watchlist</button>
            </div>  
            
             
            {/* <button onClick={() => changeTheme()}>{theme === 'light' ? <MdDarkMode /> : <MdLightMode />}</button>  */}
            <div className={styles.login}>
                <button className={styles.signin} onClick={() => setPage('signin')}>Sign In</button>  
                <button className={styles.signup} onClick={() => setPage('signup')}>Sign Up</button> 
            </div>
        </div>
        </div>

}