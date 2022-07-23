export interface Navbar {
  href?: string;
  iconCss?: string;
  text: string;
}

export interface NavbarSecondary {
  title: string;
  items: Navbar[];
}
