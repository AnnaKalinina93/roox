import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getSortUsers, getUsersError, getUsersLoading } from '../../store/selectors';
import Loading from '../loading/loading';
import Sort from '../sort/sort';
import UsersError from '../users-error/users-error';
import './list-users.scss'

function ListUsers(): JSX.Element {
    const usersLoading = useSelector(getUsersLoading);
    const usersError = useSelector(getUsersError);
    const users = useSelector(getSortUsers);
    return (
        <div className="wrapper">
            <Sort />
            <div className="main__wrapper">
                <h1 className="main__title">Список пользователей</h1>
                {usersLoading && !usersError && <Loading />}
                {!usersLoading && usersError && <UsersError />}
                {!usersLoading && users && (
                    <ul>
                        {users.map((user) => (
                            <li key={user.id} className="info__wrapper">
                            <ul className="info__list">
                                <li>
                                    <p className="info__item">
                                        ФИО:
                                    </p>
                                    <p className="info-user">
                                        {user.name}
                                    </p>
                                </li>
                                <li>
                                    <p className="info__item">
                                        город:
                                    </p>
                                    <p className="info-user">
                                        {user.address.city}
                                    </p>
                                </li>
                                <li >
                                    <p className="info__item">
                                        компания:
                                    </p>
                                    <p className="info-user">
                                        {user.company.name}
                                    </p>
                                </li>
                            </ul>
                            <Link className="info__link" to={`/user/${user.id}`}>Подробнее</Link>
                        </li>
                        ))}
                        
                    </ul>
                )}
                <p className="all-users">Найдено {users? users.length: 0} пользователей</p>
            </div>
        </div>
    );
}

export default ListUsers;