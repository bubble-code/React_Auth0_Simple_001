import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import JSONPretty from 'react-json-pretty'

export const Profile = () => {
    const { user, isAuthenticated } = useAuth0()
    if (isAuthenticated) {
        const { picture, name, email } = user;
        return (
            isAuthenticated && (

                <div>
                    <img src={picture} alt={name} />
                    <h2>{name}</h2>
                    <p>{email}</p>
                    {/* <JSONPretty data={user} /> */}
                    {/* {JSON.stringify(user, null, 2)} */}
                </div>
            )
        )
    }
    return (
        <></>
    )
}
