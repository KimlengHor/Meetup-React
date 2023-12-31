import { useContext } from "react";
import { Link } from "react-router-dom";
import FavoritesContext from "../store/favorites-context";

import styles from './MainNavigation.module.css';

function MainNavigation() { 

    const favoritesCtx = useContext(FavoritesContext);

    return (
        <header className={styles.header}>
            <h1>React Meetups</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/">All Meetups</Link>
                    </li>
                    <li>
                        <Link to="/new-meetup">Add New Meetup</Link>
                    </li>
                    <li>
                        <Link to="/favorites">My Favorites
                            <span className={ styles.badge }>{ favoritesCtx.totalFavorites }</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default MainNavigation;