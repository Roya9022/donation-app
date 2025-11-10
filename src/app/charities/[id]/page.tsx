import { notFound } from 'next/navigation';
import CharityDetailsContent from '@/components/features/charity-details-content';
import { getCharityById } from 'lib/charities';

interface CharityPageProps {
  params: {
    id: string;
  };
}

export default function CharityDetailsPage({ params }: CharityPageProps) {
  const charity = getCharityById(params.id);

  if (!charity) {
    notFound();
  }

  return <CharityDetailsContent charity={charity} />;
}
