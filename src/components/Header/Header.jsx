//Importamos react,los hooks de carga y contexto
import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
//Se importan los contextos
import { UserContext } from "../../context/UserContext/UserState";
import { ProductContext } from "../../context/ProductContext/ProductState";
//Importamos la hormiga y a su familia
import { UserOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Avatar, notification, Badge } from "antd";

import "./Header.css"

const Header = () => {
  //Guardamos token,logout y logout msg de UserContext
  const { token, logout, logoutMessage } = useContext(UserContext)
  const { cart } = useContext(ProductContext)
  const navigate = useNavigate();
  useEffect(() => {
    //Si hay msg de logout redirige a home y lanza notificación
    if (logoutMessage) {
      navigate("/");
      notification.success({
        message: logoutMessage,
      });
    }
  }, [logoutMessage]);

  return (
  <div className="headerContainer">
  <img id="icon" src="https://img.freepik.com/vector-premium/tienda-online-logo_20448-122.jpg?w=2000"></img>
{token? (
          <div>
          <Link className="links" to="/products/showProducts">Products | </Link>
          <Link className="links" to="/profile">
            <Avatar icon={<UserOutlined />} />
            Profile |
          </Link>
          <Link className="links" to="/cart">
            <Badge className="links" count={cart.length}>
            <ShoppingCartOutlined /> Cart |
            </Badge>
          </Link>
          <span className="links" onClick={() => logout()}> Logout</span>
        </div>
        ) : (
          <div className="navBar">
            <Link className="links" to="/login">Login |</Link>
            <Link className="links" to="/users/createUser">Register |</Link>
            <Link className="links" to="/products/showProducts">Products |</Link>
            <Link className="links" to="/">Home </Link>
          </div>
  )
}
      </div >
    );
  };
export default Header;