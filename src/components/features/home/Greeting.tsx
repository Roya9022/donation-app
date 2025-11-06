'use client';

import { Typography } from '@mui/material';
import text from '@/content/text.json';
import { colors } from '@/theme/colors';
import { getGreeting } from '@/utils/getGreeting';

const Greeting: React.FC = () => {
  const greeting = getGreeting();

  // TODO: replace username with name from auth
  const userFirstName: string | null = null;
  const displayGreeting = userFirstName ? `${greeting}, ${userFirstName}` : greeting;

  return (
    <div className="px-4 py-4 bg-white rounded-b-[12px]">
      <Typography variant="h6" fontWeight={600} sx={{ color: colors.primary }}>
        {displayGreeting}
      </Typography>
      <Typography variant="body2" fontWeight={600} sx={{ color: colors.text.secondary }}>
        {text.home.greeting.together}
      </Typography>
    </div>
  );
};

export default Greeting;
