import React, { useContext, useEffect } from 'react'
import { UserContext } from '../../context/UserContext/UserState'
import { Card, Spin, Collapse } from 'antd';
import "./Profile.scss"


const Profile = () => {
    const { Panel } = Collapse;
    const { getUserInfo, user } = useContext(UserContext);
    useEffect(() => {
        getUserInfo();
    }, []);
    if (!user) {
        return <div>
            <p>Datos de acceso incorrectos</p>
            <Spin size="large" />
        </div>
    }

    console.log(user)
    return (
        <div className="profileContainer">
            <Card
                title="Profile"
                // extra={<a href="#">{user.role}</a>}
                style={{
                    width: 300,
                }}
            >
                <img style={{
                    width: 100,
                }} src="../src/assets/U_Xisco.jpg" alt=""></img>
                <p>{user.name}</p>
                <p>{user.email}</p>
            </Card>
            <div className='coll'>

                <Collapse defaultActiveKey={['1']} >
                    <Panel header="Order:1" key="1">
                        <p>{ }</p>
                    </Panel>
                    <Panel header="Order:2" key="2">
                        <p>{ }</p>
                    </Panel>
                    <Panel header="Order:3" key="3">
                        <p>{ }</p>
                    </Panel>
                </Collapse>
            </div>
        </div>
    )
}

export default Profile