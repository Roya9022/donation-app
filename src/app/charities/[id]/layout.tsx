import { PropsWithChildren } from 'react';

export default function CharityDetailsLayout({ children }: PropsWithChildren) {
  return <div style={{ minHeight: '100vh', backgroundColor: '#fafaf9' }}>{children}</div>;
}
