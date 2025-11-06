'use client';

import { Card, CardContent, CardMedia, Typography, Chip, Button } from '@mui/material';
import type { Charity } from 'data/charities';
import { colors } from '@/theme';

interface CharityCardProps {
  charity: Charity;
}

const CharityCard: React.FC<CharityCardProps> = ({ charity }) => {
  return (
    <Card className="flex gap-2 p-1 w-full" variant="outlined">
      {charity.image && (
        <CardMedia
          component="img"
          sx={{ width: 120, borderRadius: 1 }}
          image={charity.image}
          alt={charity.title}
        />
      )}
      <CardContent sx={{ flex: 1 }}>
        <Typography variant="body1" gutterBottom sx={{ color: colors.text.primary }}>
          {charity.title}
        </Typography>
        <Chip
          label={charity.category}
          size="small"
          sx={{ mb: 1, backgroundColor: colors.pastel.purple.light, color: colors.white }}
        />
        <Typography variant="body2" className="mb-1">
          {charity.description}
        </Typography>
        {/* {charity.website && (
          <Button
            variant="contained"
            href={charity.website}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              backgroundColor: colors.primary,
              textTransform: 'none',
            }}
          >
            Visit website →
          </Button>
        )} */}
      </CardContent>
    </Card>
  );
};

export default CharityCard;
