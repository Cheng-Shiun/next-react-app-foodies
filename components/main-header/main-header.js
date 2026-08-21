import logoImg from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import MainHeaderBackground from "./main-header-background";
import classes from "./main-header.module.css";
import NavLink from "./nav-link";

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link href="/" className={classes.logo}>
          <Image src={logoImg} alt="A plate with food on it" />
          跨界好食
        </Link>

        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink link="/meals">探索美食</NavLink>
            </li>
            <li>
              <NavLink link="/community">美食交流社群</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
