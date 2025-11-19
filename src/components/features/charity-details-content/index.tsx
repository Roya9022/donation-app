'use client';

import Image from 'next/image';
import { Box, Typography, Button, Chip, Container } from '@mui/material';
import { OpenInNew } from '@mui/icons-material';
import type { Charity } from 'lib/charities';
import { validateCharityUrl } from 'lib/charities';
import { colors } from '@/theme';
import text from '@/content/text.json';
import DetailsHeader from '../charity-details-header';

interface CharityDetailsContentProps {
  charity: Charity;
}

const CharityDetailsContent: React.FC<CharityDetailsContentProps> = ({ charity }) => {
  const isDonationLinkValid = validateCharityUrl(charity.donateLink);
  const isWebsiteLinkValid = validateCharityUrl(charity.website);
  //TODO: Find and add more details about charities in data file
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
      }}
    >
      <DetailsHeader title={charity.title} />
      <Box
        sx={{
          flex: 1,
          overflowY: 'auto',
          px: { xs: 2, sm: 3, md: 4 },
          py: 2,
        }}
      >
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            height: { xs: 250, sm: 300, md: 350 },
            borderRadius: 4,
            overflow: 'hidden',
            backgroundColor: colors.secondaryPale,
            mb: 3,
          }}
        >
          <Image
            src={`/images/foundations/${charity.image}`}
            alt={charity.title}
            fill
            style={{ objectFit: 'contain' }}
            priority
          />
        </Box>
        <Box sx={{ mb: 2 }}>
          <Chip
            label={charity.category}
            sx={{
              backgroundColor: colors.primary,
              color: colors.white,
              fontSize: '12px',
              height: { xs: 20, sm: 24 },
              borderRadius: 2.5,
            }}
          />
        </Box>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            mb: 1.5,
            fontSize: '20px',
            color: colors.text.primary,
            lineHeight: 1.2,
          }}
        >
          {charity.title}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            mb: 4,
            color: colors.text.secondary,
            fontSize: '14px',
          }}
        >
          {charity.description}
        </Typography>
      </Box>
      <Box
        sx={{
          px: { xs: 2, sm: 3, md: 4 },
          py: 2,
          backgroundColor: colors.white,
          boxShadow: '0 -4px 12px rgba(0,0,0,0.08)',
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
        }}
      >
        {isDonationLinkValid ? (
          <Button
            variant="contained"
            size="small"
            href={charity.donateLink}
            target="_blank"
            rel="noopener noreferrer"
            endIcon={<OpenInNew />}
            sx={{
              backgroundColor: colors.primary,
              color: colors.white,
              textTransform: 'none',
              fontSize: '16px',
              py: 1.5,
              borderRadius: 3,
              fontWeight: 600,
              boxShadow: 'none',
              '&:hover': {
                backgroundColor: colors.pastel.green.dark,
                boxShadow: 4,
              },
            }}
          >
            {text.details.donateNow}
          </Button>
        ) : (
          <Button
            variant="contained"
            size="small"
            disabled
            sx={{
              textTransform: 'none',
              fontSize: '16px',
              py: 1.5,
              borderRadius: 3,
            }}
          >
            {text.details.linkUnavailable}
          </Button>
        )}
        {isWebsiteLinkValid && (
          <Button
            variant="outlined"
            size="medium"
            href={charity.website}
            target="_blank"
            rel="noopener noreferrer"
            endIcon={<OpenInNew />}
            sx={{
              color: colors.primary,
              borderColor: colors.primary,
              textTransform: 'none',
              fontSize: '16px',
              py: 1.5,
              borderRadius: 3,
              fontWeight: 500,
              borderWidth: '2px',
              '&:hover': {
                borderColor: colors.primary,
                backgroundColor: colors.primaryShadow,
              },
            }}
          >
            {text.details.visitSite}
          </Button>
        )}
        <Typography
          variant="caption"
          sx={{
            mt: 2,
            color: colors.text.disabled,
            lineHeight: 1.5,
          }}
        >
          {text.details.disclaimer}
        </Typography>
      </Box>
    </Box>
  );
};

export default CharityDetailsContent;
