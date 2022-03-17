import { ChangeEvent, FormEvent, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getUsers } from '../../store/selectors';
import { UserPost } from '../../types/user';
import Sort from '../sort/sort';
import './user.scss';

const formField = {
    name: 'Name',
    username: 'User name',
    email: 'E-mail',
    street: 'Street',
    city: 'City',
    zipcode: 'Zip Code',
    phone: 'Phone',
    website: 'Website',
    comment: 'Comment',
};

type InputProps = {
    value: string;
    error?: boolean;
    regex?: RegExp;
    touched?: boolean;
}

type FormStateProps = { [key: string]: InputProps };

function User(): JSX.Element {
    const { id } = useParams();
    const users = useSelector(getUsers);
    const user = users?.filter((item) => item.id === Number(id))[0];
    const {
        name,
        username,
        address,
        phone,
        website,
        email
    } = user
    const [isReadOnlyState, setIsReadOnly] = useState(true);
    const [formState, setFormState] = useState<FormStateProps>({
        name: {
            value: name,
            error: false,
            regex: /^[^0-9]{1,}$/,
            touched: false,
        },
        username: {
            value: username,
            error: false,
            regex: /^[^0-9]{1,}$/,
            touched: false,
        },
        email: {
            value: email,
            error: false,
            regex: /\w+@\w+\./,
            touched: false,
        },
        street: {
            value: address.street,
            error: false,
            regex: /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]|[a-zA-Zа-яА-Я-.']+[a-zA-Zа-яА-Я']?$/u,
            touched: false,
        },
        city: {
            value: address.city,
            error: false,
            regex: /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u,
            touched: false,
        },
        zipcode: {
            value: address.zipcode,
            error: false,
            regex: /^(\(?\d{1,}\)?[\- ]?)?[\d\- ]{1,}$/,
            touched: false,
        },
        phone: {
            value: phone,
            touched: false,
            error: false,
            regex: /^(\(?\d{1,}\)?[\- ]?)?[\d\- x\d]{1,}$/,
        },
        website: {
            value: website,
            touched: false,
            error: false,
            regex: /[-a-zA-Z0-9@:%_\+.~#?&\/=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&\/=]*)?/gi,
        },
        comment: {
            value: '',
        },
    });

    const isDisabled =
        isReadOnlyState ||
        formState.street.error ||
        formState.city.error ||
        formState.zipcode.error ||
        formState.name.error ||
        formState.username.error ||
        formState.phone.error ||
        formState.email.error;

    const handleChange = ({ target }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = target;
        const rule = formState[name].regex;
        const isFieldValid = rule?.test(value);
        setFormState({
            ...formState,
            [name]: {
                ...formState[name],
                value: value,
                error: !isFieldValid,
                touched: true,
            },
        });
    };

    const onSubmit = (data: UserPost) => {
        const json = JSON.stringify(data)
        console.log(json)
        alert(json)
    };

    return (
        <div className="wrapper">
            <Sort />
            <div className="main__wrapper">
                <div className="header__wrapper">
                    <h1>Профиль пользователя</h1>
                    <button onClick={() => setIsReadOnly(false)}>Редактировать</button>
                </div>
                <form
                    className="form"
                    action="#"
                    method="post"
                    onSubmit={(evt: FormEvent<HTMLFormElement>) => {
                        evt.preventDefault();
                        const data: UserPost = {
                            name: formState.name.value,
                            username: formState.username.value,
                            email: formState.email.value,
                            street: formState.street.value,
                            city: formState.city.value,
                            zipcode: formState.zipcode.value,
                            phone: formState.phone.value,
                            website: formState.website.value,
                            comment: formState.comment.value,
                        };
                        onSubmit(data);
                    }
                    }>
                    <div className="frame">
                        <div className="input__wrapper">
                            <p>{formField.name}</p>
                            <input
                                name="name"
                                readOnly={isReadOnlyState}
                                value={formState.name.value}
                                onChange={handleChange}
                                style={formState.name.error ? { borderColor: "red" } : {}}
                            />
                        </div>
                        <div className="input__wrapper">
                            <p>{formField.username}</p>
                            <input
                                name="username"
                                readOnly={isReadOnlyState}
                                value={formState.username.value}
                                onChange={handleChange}
                                style={formState.username.error ? { borderColor: "red" } : {}}
                            />
                        </div>
                        <div className="input__wrapper">
                            <p>{formField.email}</p>
                            <input
                                name="email"
                                readOnly={isReadOnlyState}
                                value={formState.email.value}
                                onChange={handleChange}
                                style={formState.email.error ? { borderColor: "red" } : {}}
                            />
                        </div>
                        <div className="input__wrapper">
                            <p>{formField.street}</p>
                            <input
                                name="street"
                                readOnly={isReadOnlyState}
                                value={formState.street.value}
                                onChange={handleChange}
                                style={formState.street.error ? { borderColor: "red" } : {}}
                            />
                        </div>
                        <div className="input__wrapper">
                            <p>{formField.city}</p>
                            <input
                                name="city"
                                readOnly={isReadOnlyState}
                                value={formState.city.value}
                                onChange={handleChange}
                                style={formState.city.error ? { borderColor: "red" } : {}}
                            />
                        </div>
                        <div className="input__wrapper">
                            <p>{formField.zipcode}</p>
                            <input
                                name="zipcode"
                                readOnly={isReadOnlyState}
                                value={formState.zipcode.value}
                                onChange={handleChange}
                                style={formState.zipcode.error ? { borderColor: "red" } : {}}
                            />
                        </div>
                        <div className="input__wrapper">
                            <p>{formField.phone}</p>
                            <input
                                name="phone"
                                readOnly={isReadOnlyState}
                                value={formState.phone.value}
                                onChange={handleChange}
                                style={formState.phone.error ? { borderColor: "red" } : {}}
                            />
                        </div>
                        <div className="input__wrapper">
                            <p>{formField.website}</p>
                            <input
                                name="website"
                                readOnly={isReadOnlyState}
                                value={formState.website.value}
                                onChange={handleChange}
                                style={formState.website.error ? { borderColor: "red" } : {}}
                            />
                        </div>
                        <div className="input__wrapper">
                            <p>{formField.comment}</p>
                            <textarea
                                name="comment"
                                readOnly={isReadOnlyState}
                                value={formState.comment.value}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <button
                        className="post"
                        type="submit"
                        disabled={isDisabled}
                    >
                        Отправить
                    </button>
                </form>
            </div>
        </div>
    );
}

export default User;