// DEPENDENCIES
import { ConnectButton } from "web3uikit";
import Image from "next/image";
import Link from "next/link";
import {AiOutlineHistory, BsFillBookmarkFill, BsFillPersonFill, FaBox} from "react-icons/all";

// ASSETS
import logo from '../public/images/amazon_logo.png';
import logoFull from '../public/images/amazon_logo_full.png';

// STYLES
const styles = {
    container: 'h-full w-[300px] flex flex-col bg-[#fff] static',
    profile: 'w-full py-16 flex flex-col justify-center items-center rounded-r-3xl bg-gradient-to-t from-[#0d141c] to-[#42667e] mt-[40px] mb-[50px] border-2 border-[#fb9701]',
    profilePicContainer: 'flex rounded-xl items-center justify-center w-full h-full mb-5',
    profilePic: 'rounded-3xl object-cover',
    usernameInput: `bg-transparent border-white border-2 rounded-lg w-[80%] py-2 px-4 text-lg mt-[20px] placeholder:text-white focus:outline-none flex justify-center items-center text-white`,
    username: `flex items-center w-full justify-center`,
    setNickname: `text-lg font-bold flex flex-1 items-center mt-[20px] mb-[20px] text-white`,
    welcome: ` text-md mb-2 font-bold text-2xl text-white`,
    walletAddress: `text-xl flex w-full justify-center font-extrabold mb-4`,
    menu: `flex flex-col w-full h-full px-10 gap-10`,
    menuItem: `flex items-center text-lg font-bold cursor-pointer gap-2`,
    amazonLogo: `mr-4 flex object-cover`,
    companyName: `text-lg font-bold flex flex-1 pl-10 items-center mt-[20px]`,
}

// COMPONENT
function Sidebar() {

    const isAuthenticated = true
    const username = 'Thomas'

    return (
        <div className={styles.container}>
            <div className={styles.profile}>
                {isAuthenticated && (
                    <>
                        <div className={styles.profilePicContainer}>
                            <Image
                                src={`https://avatars.dicebear.com/api/pixel-art/${username}.svg`}
                                alt="Profile"
                                width={100}
                                height={100}
                            />
                        </div>
                        {!username ? (
                            <>
                                <div className={styles.username}>
                                    <input
                                        type="text"
                                        placeholder="Votre Pseudo"
                                        className={styles.usernameInput}
                                        /*value={nickname}
                                        onChange={(e) => setNickname(e.target.value)}*/
                                    />
                                </div>
                                <button
                                    className={styles.setNickname}
                                    // onClick={handleSetUsername}
                                >
                                    Valider le Pseudo
                                </button>
                            </>
                        ) : (
                            <div className={styles.welcome}>
                                Bienvenue {username}
                            </div>
                        )}
                    </>
                )}
                <div className={styles.connectButton}>
                    <ConnectButton />
                </div>
            </div>
            <div className={styles.menu}>
                <Link href="/">
                    <div className={styles.menuItem}>
                        <Image
                            src={logo}
                            alt="Amazon"
                            width={30}
                            height={30}
                            className={styles.amazonLogo}
                        />
                        Mon dashboard
                        <br/> Amazon
                    </div>
                </Link>
                <div className={styles.menuItem}>
                    <FaBox />
                    Collections
                </div>
                <div className={styles.menuItem}>
                    <BsFillBookmarkFill />
                    Enregistrements
                </div>
                <div className={styles.menuItem}>
                    <BsFillPersonFill />
                    Enregistrements
                </div>
                <Link href="/history">
                    <div className={styles.menuItem}>
                        <AiOutlineHistory />
                        Historique
                    </div>
                </Link>
            </div>
            <div className={styles.companyName}>
                <Image
                    src={logoFull}
                    alt="Amazon"
                    width={100}
                    height={100}
                />
            </div>
        </div>
    )
}

export default Sidebar