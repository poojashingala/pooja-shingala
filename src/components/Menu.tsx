import React from "react";
import "@awsui/global-styles/index.css";
import { Link } from "@awsui/components-react";


const MenuLateral = () => {
  return (
    <div className="">
      <ul>
        <li>
          <Link href="#">
            <p className="">Plantilla tarjetas</p>
          </Link>
        </li>
        <ul>
          <li>
            <Link href="#">
              <p className="">Lista de plantillas</p>
            </Link>
          </li>
          <li>
            <Link href="#">
              <p className="">crear plantilla</p>
            </Link>
          </li>
        </ul>
        <li>
          <Link href="#">
            <p className="">Plantilla Extension</p>
          </Link>
        </li>
        <ul>
          <li>
            <Link href="#">
              <p className="">Lista de plantillas</p>
            </Link>
          </li>
          <li>
            <Link href="#">
              <p className=""> crear plantilla</p>
            </Link>
          </li>
        </ul>
      </ul>
    </div>
  );
};

export default MenuLateral;
