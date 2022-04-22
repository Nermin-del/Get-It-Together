import React, {useState} from 'react';

export const AddUser = () => {
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPhone, setUserPhone] = useState('');
    const [newUser, setNewUser] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            name: userName,
            email: userEmail,
            phone: userPhone,
        }
        console.log(data);
    }
    

const onHandleUserName = (e) => {
    setUserName(e.target.value);
}

const onHandleUserEmail = (e) => {
    setUserEmail(e.target.value);
}

const onHandleUserPhone = (e) => {
    setUserPhone(e.target.value);
}

const addNewUser = (e) => {
    e.preventDefault();
    const data = {
        name: userName,
        email: userEmail,
        phone: userPhone,
        index: newUser.length
    }
    localStorage.setItem(userName + data.index, JSON.stringify(data));
    setNewUser([...newUser, data])
}

const getUserFromLocalStorage = (e) => {
    const data = localStorage.getItem(userName);
    console.log(data);
}

const deleteNewUser = (e) => {
    e.preventDefault();
    const oneGoneArray = newUser.slice(0, length - 1);
    setNewUser(oneGoneArray)
}

return (
    <div>
        <h1>Lägg till ny användare</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Användarnamn</label>
                <input onChange={onHandleUserName} value={userName} />
            </div>
            <div>
                <label>Email</label>
                <input onChange={onHandleUserEmail} value={userEmail} />
            </div>
            <div>
                <label>Telefon</label>
                <input onChange={onHandleUserPhone} value={userPhone} />
            </div>

            <button onClick={addNewUser} type='submit'>Lägg till användare</button>

            <button onClick={deleteNewUser} type='submit'>Ta bort sista användare!</button>
        </form>

        <table>
            <tbody>
                {newUser.map((user) => {
                    return (
                        <tr key={user.index}>
                            <th>{user.name}</th>
                            <th>{user.email}</th>
                            <th>{user.phone}</th>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </div>
    );
}