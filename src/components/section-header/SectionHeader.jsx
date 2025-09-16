import classes from './SectionHeader.module.css'

export default function SectionHeader() {
    return (
        <header className={classes.header}>
            <nav className={classes.header__nav}>
                <img src="/logo.png" alt="логотип велозар" className="header__logo" />
                <ul className="links">
                    <li className="link">
                        <a href="#about" className="link__a">О нас</a>
                    </li>
                    <li className="link">
                        <a href="#services" className="link__a">Услуги</a>
                    </li>
                    <li className="link">
                        <a href="#rent" className="link__a">Аренда</a>
                    </li>
                </ul>
                <button className="header__button">Связаться</button>
            </nav>
            <div className='header__content'>
                <h1 className={classes.header__brand}>Веломастерская “Велозар”</h1>
                <p className="header__description">Мы, мастера веломастерской «Велозар», как раз те самые счастливые люди, которые смогли превратить свое увлечение и хобби в профессию. Мы сами любим кататься и хотим чтобы Ваш двухколесный друг приносил Вам только радость и удовольствие от езды.</p>
                <img src="/mascotte.png" alt="маскот велозар" />
            </div>
        </header>
    )
}