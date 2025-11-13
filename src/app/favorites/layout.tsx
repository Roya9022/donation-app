import { PropsWithChildren } from 'react';
import { BottomNavigation } from '@/components/features';

export default function FavoritesPageLayout({ children }: PropsWithChildren) {
  return (
    <div style={{ minHeight: '100vh' }} className="w-full mx-auto flex flex-col">
      {children}
      <div className="w-full mx-auto fixed bottom-0 left-1/2 transform -translate-x-1/2">
        <BottomNavigation />
      </div>
    </div>
  );
}
