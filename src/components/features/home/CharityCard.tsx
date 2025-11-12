'use client';

import Image from 'next/image';
import { Card, CardContent, Typography, Chip, Box } from '@mui/material';
import { useRouter } from 'next/navigation';
import type { Charity } from 'lib/charities';
import { colors } from '@/theme';

interface CharityCardProps {
  charity: Charity;
}

const CharityCard: React.FC<CharityCardProps> = ({ charity }) => {
  const router = useRouter();
  const handleClick = () => router.push(`/charities/${charity.id}`);

  return (
    <Card
      onClick={handleClick}
      variant="elevation"
      elevation={0}
      sx={{
        display: 'flex',
        flexDirection: 'row',
        gap: 2,
        p: 2,
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        borderRadius: 4,
        '&:hover': {
          boxShadow: 6,
          transform: 'translateY(-4px)',
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'start',
          gap: 1,
          flexShrink: 0,
        }}
      >
        <Chip
          label={charity.category}
          size="small"
          sx={{
            backgroundColor: colors.primary,
            color: colors.white,
            fontSize: '12px',
            height: { xs: 20, sm: 24 },
            borderRadius: 2.5,
          }}
        />

        <div
          style={{
            position: 'relative',
            width: 120,
            height: 120,
            borderRadius: 2.5,
            overflow: 'hidden',
            backgroundColor: colors.secondaryPale,
          }}
        >
          <Image
            src={`/images/foundations/${charity.image}`}
            alt={charity.title}
            fill
            priority={charity.id <= '6'}
            style={{
              objectFit: 'contain',
            }}
            sizes="(max-width: 600px) 80px, (max-width: 900px) 100px, 120px"
          />
        </div>
      </Box>
      <CardContent
        sx={{
          alignSelf: 'center',
          flex: 1,
          p: 0,
          display: 'flex',
          flexDirection: 'column',
          gap: 1,
          '&:last-child': { pb: 0 },
        }}
      >
        <Typography
          variant="h6"
          sx={{
            color: colors.text.primary,
            fontWeight: 600,
            fontSize: '14px',
            lineHeight: 1.3,
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {charity.title}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: colors.text.secondary,
            fontSize: '12px',
            lineHeight: 1.4,
            display: '-webkit-box',
            WebkitLineClamp: { xs: 2, sm: 3 },
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {charity.description}
        </Typography>
        {/* 
        <Typography
          variant="caption"
          sx={{
            color: colors.primary,
            mt: 'auto',
            fontWeight: 500,
          }}
        >
          Click for details
        </Typography> */}
      </CardContent>
    </Card>
  );
};

export default CharityCard;
