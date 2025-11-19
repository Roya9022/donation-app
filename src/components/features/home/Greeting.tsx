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
    <>
      <Typography variant="h6" fontWeight={600} sx={{ color: colors.secondaryPale }}>
        {displayGreeting}
      </Typography>
      <Typography
        variant="body2"
        fontWeight={600}
        sx={{ color: colors.secondaryTextLight, marginBottom: 1.5 }}
      >
        {text.home.greeting.together}
      </Typography>
    </>
  );
};

export default Greeting;
