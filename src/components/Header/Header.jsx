import Stars from '../Starts/Stars'
import style from './Header.module.scss'

const Header = () => {
    return (
        <div className={style['header-container']}>
            <div className={style['header-intro-container']}>
                <h1 className={style['header-intro-title']}> 10,000+ of our users love our products.</h1>
                <p className={style['header-intro-subtitle']}> We only provide great products combined with excellent customer service. See what our satisfied customers are saying about our services.</p>
            </div>
            <div className={style['rating-container']}>
                <Stars text='Views'/>
                <Stars text='Report Guru'/>
                <Stars text='Best Tech'/>
            </div>
        </div>
    )
}

export default Header