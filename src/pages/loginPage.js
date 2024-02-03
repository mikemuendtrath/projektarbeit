
import { InputText } from 'primereact/inputtext';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { Button } from 'primereact/button';
import React from 'react';
import { checkLogin } from '../helper.js/backendConnector';
import { useNavigate } from 'react-router-dom';


export default function LoginPage() {

    const [username, setUsername] = React.useState("")
    const [password, setPassword] = React.useState("")
    const navigate = useNavigate();

    async function handleLogin() {
        var result = await checkLogin();
        var role = 1//muss aus dem result gekesen werden 
        var userID = 123//muss aus dem result gekesen werden 
        if (result) {
            navigate('/projekte',{state:{role:role,userID:userID}});
        }
        else {
            //Bei Fehler
        }
    }

    return (
        <div className="loginWrapper">
            <div className="innerTextInputWrapper">
                <h3>Login</h3>
                <span className="p-float-label customTextBox">
                    <InputText id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                    <label htmlFor="username">Benutzername</label>
                </span>
                <span className="p-float-label customTextBox">
                    <InputText id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <label htmlFor="password">Passwort</label>
                </span>
                <Button className='customButtom' onClick={() => { handleLogin() }}>Einloggen</Button>
            </div>
        </div>
    );
} 