import { useSelector, useDispatch } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';

const FavouritesList = () => {
    const favouriteCompanies = useSelector((state) => state.favouriteCompanies);
    const dispatch = useDispatch();

    const handleRemoveCompany = (companyName) => {
        dispatch({
            type: 'MANAGE_FAVOURITE',
            payload: companyName,
        });
    };

    return (
        <div>
            <h2 className="my-4">Favourite Companies</h2>
            {favouriteCompanies.length === 0 ? (
                <p className="text-center">No favourite companies.</p>
            ) : (
                favouriteCompanies.map((companyName) => (
                    <Row
                        key={companyName}
                        className="mx-0 mt-3 p-3"
                        style={{ border: '1px solid #00000033', borderRadius: 4 }}
                    >
                        <Col xs={8}>
                            <Link to={`/${companyName}`}>{companyName}</Link>
                        </Col>
                        <Col xs={4} className="text-end">
                            <FaHeart
                                className="text-danger"
                                style={{ cursor: 'pointer' }}
                                onClick={() => handleRemoveCompany(companyName)}
                            />
                        </Col>
                    </Row>
                ))
            )}
        </div>
    );
};

export default FavouritesList;
