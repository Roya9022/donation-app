import { ReactNode } from 'react';
import {
  HomeRounded as HomeIcon,
  VolunteerActivismRounded as FavoritesIcon,
  AccountCircleRounded as ProfileIcon,
} from '@mui/icons-material';
import { ROUTES } from '@/routes';

export const bottomNavigationCheckRouteActive = (pathname: string, item: IBottomNavigationItem) => {
  if (pathname.endsWith('/')) {
    pathname = pathname.substring(0, pathname.length - 1);
  }
  return pathname.endsWith(item.route);
};

export interface IBottomNavigationItem {
  key: 'home' | 'favorites' | 'profile';
  route: string;
  icon: ReactNode;
}

export const bottomNavigationTabs: IBottomNavigationItem[] = [
  {
    key: 'home',
    icon: <HomeIcon fontSize="medium" />,
    route: ROUTES.HOME,
  },
  {
    key: 'favorites',
    icon: <FavoritesIcon fontSize="medium" />,
    route: ROUTES.FAVORITES,
  },
  {
    key: 'profile',
    icon: <ProfileIcon fontSize="medium" />,
    route: ROUTES.PROFILE,
  },
];
