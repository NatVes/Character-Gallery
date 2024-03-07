import characterData from '../data/characterData.json';
import Character from './Character';

const CharacterGallery = () => {
    const characterList = characterData.map(character =>
        <Character { ...character } key={ character.id }
        name = {character.name}
        imgUrl={character.imgUrl}
        birth = {character.birth}
        death = {character.death}
        realm = {character.realm}
        spouse = {character.spouse}
        race = {character.race} />
    );

    return (
        <div
            className='gallery-container'>
            { characterList }
        </div>
    );
};

export default CharacterGallery;