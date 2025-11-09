export interface SocialMedia {
  name: string;
  link: string;
  svgIcon: SvgIcon;
}

interface SvgIcon {
  viewBox: string;
  path: string;
}