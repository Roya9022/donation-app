'use client';

import Image from 'next/image';
import { Box, Typography, Button, Chip } from '@mui/material';
import { OpenInNew } from '@mui/icons-material';
import type { Charity } from '@/lib/charities';
import { validateCharityUrl } from '@/lib/charities';
import text from '@/content/text.json';
import DetailsHeader from '../header';
import { StyledDetailsContainer, classes } from './styles';

interface CharityDetailsContentProps {
  charity: Charity;
}

const CharityDetailsContent: React.FC<CharityDetailsContentProps> = ({ charity }) => {
  const isDonationLinkValid = validateCharityUrl(charity.donateLink);
  const isWebsiteLinkValid = validateCharityUrl(charity.website);

  return (
    <StyledDetailsContainer>
      <DetailsHeader title={charity.title} charityId={charity.id} />
      <Box className={classes.scrollableContent}>
        <Box className={classes.imageBox}>
          <Image
            src={`/images/foundations/${charity.image}`}
            alt={charity.title}
            fill
            style={{ objectFit: 'contain' }}
            priority
          />
        </Box>
        <Box className={classes.chipContainer}>
          <Chip label={charity.category} className={classes.chip} />
        </Box>
        <Typography variant="h4" className={classes.cardTitle}>
          {charity.title}
        </Typography>
        <Typography variant="body1" className={classes.description}>
          {charity.description}
        </Typography>
      </Box>
      <Box className={classes.buttonContainer}>
        {isDonationLinkValid ? (
          <Button
            variant="contained"
            size="small"
            href={charity.donateLink}
            target="_blank"
            rel="noopener noreferrer"
            endIcon={<OpenInNew />}
            className={classes.donateButton}
          >
            {text.details.donateNow}
          </Button>
        ) : (
          <Button variant="contained" size="small" disabled className={classes.donateButton}>
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
            className={classes.visitButton}
          >
            {text.details.visitSite}
          </Button>
        )}
        <Typography variant="caption" className={classes.disclaimer}>
          {text.details.disclaimer}
        </Typography>
      </Box>
    </StyledDetailsContainer>
  );
};

export default CharityDetailsContent;
