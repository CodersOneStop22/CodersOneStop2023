import { Fragment } from "react";

import MainHeader from "./main-header";
import Provider from "../../context/AuthContext";
import ToasterContext from "../../context/oasterContext";
import MainFooter from "./main-footer";
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
      <MainFooter />
    </Fragment>
  );
}

export default Layout;
