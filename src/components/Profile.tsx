import { useContext } from "react"
import { ChallengesContext } from "../contexts/ChallengesContext"
import styles from "../styles/components/Profile.module.css"

export function Profile() {
    const { level } = useContext(ChallengesContext)
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/RenatoSTV.png" alt="Profile pic"/>
            <div>
                <strong>Renato Teofilo</strong>
                <p>
                    <img src="icons/level.svg" alt="level"/>
                    Level {level}
                </p>
            </div>
        </div>
    )
}