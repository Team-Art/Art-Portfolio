import React from 'react';

export default function SignInForm() {
    return(
        <div>
            <form>
                <input
                    type="email"
                    name="email"/>
                <input
                    type="password"
                    name="password"/>
                <button>Let's Go!</button>
            </form>
        </div>
    )
}