import {CARDS_INFO} from '../../constants/cards'
import style from './CardsContainer.module.scss'
import Card from "../Card/Card";

const CardsContainer = () =>{
    return(
        <div className={style['cards-container-total']}>
        {CARDS_INFO.map(card =>(
			<Card key={card.id} {...card}></Card>
		))}
        </div>
    )
}

export default CardsContainer