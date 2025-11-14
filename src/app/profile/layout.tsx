import { PropsWithChildren } from 'react';
import { BottomNavigation } from '@/components/shared';

export default function HomePageLayout({ children }: PropsWithChildren) {
  return (
    <div className="w-full mx-auto min-h-screen flex flex-col">
      {children}
      <div className="w-full mx-auto fixed bottom-0 left-1/2 transform -translate-x-1/2">
        <BottomNavigation />
      </div>
    </div>
  );
}
