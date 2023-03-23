import style from './Cards.module.scss'
const Card = ({name, src, status, info}) => {
    return (
        <div className={style['card-container']}>
            <div className={style['profile-container']}>
                <img className={style['profile-img']} src={src} alt="" />
                <div className={style['info-container']}>
                    <h2 className={style['info-name']}>{name}</h2>
                    <h3 className={style['info-status']}>{status}</h3>
                </div>
            </div>
            <p className={style['card-text']}>{info}</p>
        </div>
    )
}

export default Card