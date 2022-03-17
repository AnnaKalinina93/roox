import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router';
import { ActiveSort } from '../../const';
import { changeSort } from '../../store/action';
import './sort.scss';

function Sort(): JSX.Element {
    const dispatch = useDispatch();
    const location = useLocation();

    const handleCityClick = () => {
        dispatch(changeSort(ActiveSort.City));
    }
    const handleCompanyClick = () => {
        dispatch(changeSort(ActiveSort.Company));
    }
    return (
        <div className="sort__wrapper" style={location.pathname !== '/' ? { height: "100vh" } : {}}>
            <p className="sort-title">Сортировка</p>
            <button className="sort-button" onClick={handleCityClick}>по городу </button>
            <button className="sort-button" onClick={handleCompanyClick}>по компании</button>
        </div>
    );
}

export default Sort;
