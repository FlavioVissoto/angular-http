export interface Navbar {
  href?: string;
  iconCss?: string;
  text: string;
  target: string;
}

export interface NavbarSecondary {
  title: string;
  items: Navbar[];
}
