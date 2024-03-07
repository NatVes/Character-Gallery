import PropTypes from 'prop-types'

const Character = ({ name, imgUrl, birth, death, realm, spouse, race }) => {
    return (
        <div className="card-container">
            <img src={ imgUrl } alt={ name } />
            <div className="card-body">
                <h2>{ name }</h2>
                <ul>
                    <li>
                    Date of Birth: {birth}
                    </li>
                    <li>
                    Date of Death: {death}
                    </li>
                    <li>
                    Race: {race}
                    </li>
                    <li>
                    Realm: {realm}
                    </li>
                    <li>
                    Spouse: {spouse}
                    </li>
                </ul>
            </div>
        </div>
    );
};

// Character.propTypes = {
//     family: PropTypes.string,
//     fullName: PropTypes.string,
//     imageUrl: PropTypes.string,
//     title: PropTypes.string,
// }

export default Character;