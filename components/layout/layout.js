import { Fragment } from "react";

import MainHeader from "./main-header";
import Provider from "../../context/AuthContext";
import ToasterContext from "../../context/oasterContext";

function Layout(props) {
  return (
    <Fragment>
      <MainHeader />
      <main>
        <Provider>
          <ToasterContext />
          {props.children}
        </Provider>
      </main>
    </Fragment>
  );
}

export default Layout;
