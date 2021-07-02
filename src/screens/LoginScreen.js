import React, { useState } from "react";
import Login from "../components/Login";
import SignUp from "../components/SignUp";
import "../css/login.css";
function LoginScreen() {

    const [tab, setTab] = useState(0)

	return (
		<div className={`${tab===0&& 'loginLogin'} loginContainer`}>
			<div className='headingContainer'>
				<h3 className={`${tab===1 && 'active'} heading`} onClick={() => setTab(0)}>
					Login
				</h3>
				<h3 className="active slash" onClick={() => setTab(0)}>
					|
				</h3>

				<h3 className={`${tab===0 && 'active'} heading`} onClick={() => setTab(1)}>
					Sign Up
				</h3>
			</div>
			{tab === 0 ? <Login /> : <SignUp />}
		</div>
	);
}

export default LoginScreen;
