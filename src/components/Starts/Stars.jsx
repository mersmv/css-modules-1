import style from './Stars.module.scss'
const Stars = ({text}) => {
    console.log(text)
    return (
        <div className={style['points-container']}>
            <div className={style['stars-container']}>
                <img src="./public/images/icon-star.svg" alt="" />
                <img src="./public/images/icon-star.svg" alt="" />
                <img src="./public/images/icon-star.svg" alt="" />
                <img src="./public/images/icon-star.svg" alt="" />
                <img src="./public/images/icon-star.svg" alt="" />
            </div>
            <h2 className={style['points-title']}>Rated 5 stars Review in {text}</h2>
        </div>
    )
}

export default Stars