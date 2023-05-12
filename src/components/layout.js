import * as React from "react";
import { Link } from "gatsby";
import { Burger, Menu } from "./Nav";
import { useOnClickOutside } from "./Nav/hooks";
import { ThemeProvider } from 'styled-components';
import { theme } from "./Nav/Style";

const Layout = ({ location, title, children }) => {
  const [open, setOpen] = React.useState(false);
  const node = React.useRef();
  useOnClickOutside(node, () => setOpen(false));
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }
  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <div  className="header-wrapper">
      <ThemeProvider theme={theme}>
        <>
          <div class='menu-wrapper' ref={node}>
            <Burger open={open} setOpen={setOpen} />
            <Menu open={open} setOpen={setOpen} />
          </div>
        </>
      </ThemeProvider>
      
      <div class="header-wrapper">
        <header className="global-header">{header}</header>
      </div>
      </div>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
