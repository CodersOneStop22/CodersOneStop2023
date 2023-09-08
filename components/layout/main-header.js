import Link from "next/link";

import classes from "./main-header.module.css";

function MainHeader() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href="/">Miladra OneStop Solutions</Link>
      </div>
      <nav className={classes.navigation}>
        <ul>
          <li>
            <Link href="/courses">Courses</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;
