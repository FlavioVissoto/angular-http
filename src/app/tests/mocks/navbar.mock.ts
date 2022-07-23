import {
  Navbar,
  NavbarSecondary,
} from './../../components/navbar/interface/navbar.interface';

export const mockNavbar: Navbar[] = [
  {
    text: 'test1Text',
    href: 'test1Href',
    iconCss: 'test1CssIcon',
    target: '_blank',
  },
  {
    text: 'test2Text',
    href: 'test2Href',
    iconCss: 'test2CssIcon',
    target: '_blank',
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
