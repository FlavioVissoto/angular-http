export interface Navbar {
  href?: string;
  iconCss?: string;
  text: string;
}

export interface NavBarSecondary {
  title: string;
  items: Navbar[];
}
