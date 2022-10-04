import { Navbar, NavbarSecondary } from './../../components/navbar/interface/navbar.interface';

export const mockNavbar: Navbar[] = [
  {
    text: 'Instalação',
    href: 'test2Href',
    iconCss: 'test2CssIcon',
    target: '_blank',
    selected: false,
  },
  {
    text: 'test1Text',
    href: 'test1Href',
    iconCss: 'test1CssIcon',
    target: '_blank',
    selected: false,
  },
  {
    text: 'test2Text',
    href: 'test2Href',
    iconCss: 'test2CssIcon',
    target: '_blank',
    selected: false,
  },
];

export const mockNavBarSecondary: NavbarSecondary[] = [
  {
    title: 'testSecondary1',
    items: mockNavbar,
  },
  {
    title: 'testSecondary2',
    items: mockNavbar,
  },
];
