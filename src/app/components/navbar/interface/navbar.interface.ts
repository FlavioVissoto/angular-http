export interface Navbar {
  href?: string;
  iconCss?: string;
  text: string;
  target: '_blank' | '_self' | '_parent' | '_top';
}

export interface NavbarSecondary {
  title: string;
  items: Navbar[];
}
