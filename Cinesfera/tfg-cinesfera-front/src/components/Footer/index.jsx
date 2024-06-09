import { montserratRegular } from '@/assets/Fonts/index'
import Link from 'next/link'
import style from'./style/Footer.module.css'
import Button from '../Buttons'

export const Footer = () => {

    return (
        <>
            <div className={style.footer}>
                <div className={style.column}>
                    <h3 className={style.title}>CineSfera</h3>
                    <section>
                        <p className={style.info}>
                            Stay up to date on the latest features and releases by
                            joining our newsletter.
                        </p>
                        <form className={style.form} action="">
                            <input className={style.formInput} type="text" placeholder="Your Email" />
                            <Button
                                type={'submit'}
                                label={'Subscribe'}
                                styleType='footerButton'
                                onClick={null} />
                            <p className={style.subinfo}>
                                By subscribing, you agree to our Privacy Policy and consent to receive updates from our company
                            </p>
                        </form>
                    </section>
                </div>
                <div className={style.columnLinks}>
                    <table>
                        <thead>
                            <tr>
                                <th className={style.columnTitle}>Links</th>
                                <th className={style.columnTitle}>Follow us</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className={style.columnLinksCell}><Link href="/">Home</Link></td>
                                <td className={style.columnRRSS}>
                                <svg className='{style.svg}' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#ffffff" d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"/></svg>
                                    <Link href="#">Facebook</Link>
                                </td>
                            </tr>
                            <tr>
                                <td><Link href="movies">Movies</Link></td>
                                <td className={style.columnRRSS}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#ffffff" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
                                    <Link href="#">Instagram</Link>
                                </td>
                            </tr>
                            <tr>
                                <td><Link href="series">Series</Link></td>
                                <td className={style.columnRRSS}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#ffffff" d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg>
                                    <Link href="#">Twitter</Link>
                                </td>
                            </tr>
                            <tr>
                                <td><Link href="contact">Contact</Link></td>
                                <td className={style.columnRRSS}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#ffffff" d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"/></svg>
                                    <Link href="#">LinkedIn</Link>
                                </td>
                            </tr>
                            <tr>
                                <td><Link href="/">My profile</Link></td>
                                <td className={style.columnRRSS}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#ffffff" d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"/></svg>
                                    <Link href="#">Youtube</Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <footer className={style.subfooter}>
                <div>
                    <p>2024 CineSfera. All rights reserved</p>
                </div>
                <nav className={style.subfooterNav}>
                    <Link href="#">Privacy Policy</Link>
                    <Link href="#">Terms of service</Link>
                    <Link href="#">Cookies Settings</Link>
                </nav>
            </footer>
        </>
    )
}