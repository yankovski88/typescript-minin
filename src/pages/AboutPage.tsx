import React from 'react'
import {useHistory} from 'react-router-dom'


export const AboutPage: React.FC = () => {
    const history = useHistory(); // функциональный роутинг
    return (
        <>
            <h1>Страница информации</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque dolor excepturi illum iure natus nemo qui
                quisquam reiciendis totam veniam.</p>
            <button className="btn" onClick={()=>history.push(`/`)}>Обратно к списку дел</button>
        </>
    )
}
