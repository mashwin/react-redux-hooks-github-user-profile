import React from "react";
import { useSelector } from "react-redux";
import { Card, Badge } from 'react-bootstrap';


const UserProfile = () => {

    const data = useSelector((state) => state.userProfile.user);
    console.log('user data ', JSON.stringify(data));

    return (
        <Card>
            <Card.Body>
                <Card.Title>{data.login}</Card.Title>
                <Card.Text>
                    <Badge bg="secondary">{data.public_repos}</Badge> Total Repositories
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default UserProfile;