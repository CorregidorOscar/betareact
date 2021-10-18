import style from './CardsCreate.module.css'
import Card from '../Card/Card'

export default function CardsCreate({ characters }) {


    return (<div className={style.cards}>
        {/* la clave por que usamos jsx */}

        {characters.map(character => {
            return <Card name={character.name} status={character.status} species={character.species} image={character.image}></Card>
        })}

    </div>);
}