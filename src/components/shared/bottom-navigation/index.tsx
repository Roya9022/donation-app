'use client';

import { ButtonBase } from '@mui/material';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { StyledBottomNavigation, classes } from './styles';
import {
  bottomNavigationTabs as tabs,
  bottomNavigationCheckRouteActive as checkRouteActive,
} from './data';

const BottomNavigation: React.FC = () => {
  const pathname = usePathname() ?? '';

  return (
    <StyledBottomNavigation>
      {tabs.map(item => {
        const isActive = checkRouteActive(pathname, item);
        return (
          <ButtonBase
            component={Link}
            href={item.route}
            aria-current={isActive ? 'page' : undefined}
            className="flex flex-col h-12 gap-2 min-w-24"
            key={item.route}
          >
            <div className={isActive ? classes.iconActive : classes.iconInactive}>{item.icon}</div>
          </ButtonBase>
        );
      })}
    </StyledBottomNavigation>
  );
};
export default BottomNavigation;
