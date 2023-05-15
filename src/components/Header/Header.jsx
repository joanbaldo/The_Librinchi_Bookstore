//Importamos react,los hooks de carga y contexto
import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
//Se importan los contextos
import { UserContext } from "../../context/UserContext/UserState";
import { ProductContext } from "../../context/ProductContext/ProductState";
//Importamos la hormiga y a su familia
import { UserOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Avatar, notification, Badge } from "antd";
//Estilos
import "./Header.css"