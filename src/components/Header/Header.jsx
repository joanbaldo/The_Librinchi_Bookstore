import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext/UserState";
import { UserOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Avatar, notification, Badge } from "antd";
import "./Header.scss"
import { ProductContext } from "../../context/ProductContext/ProductState";

const Header = () => {
  const { token, logout, logoutMessage } = useContext(UserContext)
  const { cart } = useContext(ProductContext)
  const navigate = useNavigate();
  useEffect(() => {
    if (logoutMessage) {
      navigate("/");
      notification.success({
        message: logoutMessage,
      });
    }
  }, [logoutMessage]);

  return (
    <div className="headerContainer">
      <div>
        {/* <img src="../src/assets/The_Librinchi_Bookstore.jpg"> </img> */}
        <img src="../src/assets/The_Librinchi_Bookstore.jpg" alt="" />

      </div>
      <div> <hr /> </div>
      {/* <img id="icon" src="https://img.freepik.com/vector-premium/tienda-online-logo_20448-122.jpg?w=100"></img> */}
      {/* <img id="icon" src="https://img.freepik.com/vector-premium/tienda-online-logo_20448-122.jpg?w=100"></img> */}
      {token ? (
        <div>
          <Link id="l1" className="links" to="/">Home |</Link>
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
          <Link id="l1" className="links" to="/">Home |</Link>
          <Link id="l2" className="links" to="/products/showProducts"> Products |</Link>
          <Link id="l3" className="links" to="/users/createUser"> Sign In |</Link>
          <Link id="l4" className="links" to="/login"> Login </Link>
        </div>
      )}
      <div> <hr /> </div>
    </div>
  );
};

export default Header;