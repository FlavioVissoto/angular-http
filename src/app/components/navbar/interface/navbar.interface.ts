export interface Navbar {
  href?: string;
  iconCss?: string;
  text: string;
  target: '_blank' | '_self' | '_parent' | '_top';
  selected: boolean;
}

export interface NavbarSecondary {
  title: string;
  items: Navbar[];
}
