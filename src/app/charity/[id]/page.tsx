import { notFound } from 'next/navigation';
import CharityDetailsContent from '@/components/features/charity-details/content';
import { getCharityById } from '@/lib/charities';

interface CharityPageProps {
  params: { id: string };
}

export default async function CharityDetailsPage({ params }: CharityPageProps) {
  const resolvedParams = await params;
  const charity = getCharityById(resolvedParams.id);

  if (!charity) {
    notFound();
  }

  return <CharityDetailsContent charity={charity} />;
}
