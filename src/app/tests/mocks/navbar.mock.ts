import {
  Navbar,
  NavbarSecondary,
} from './../../components/navbar/interface/navbar.interface';

export const mockNavbar: Navbar[] = [
  {
    text: 'test1Text',
    href: 'test1Href',
    iconCss: 'test1CssIcon',
  },
  {
    text: 'test2Text',
    href: 'test2Href',
    iconCss: 'test2CssIcon',
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
