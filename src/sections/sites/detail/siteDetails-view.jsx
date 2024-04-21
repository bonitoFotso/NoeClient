import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { useRouter } from 'src/routes/hooks';

import { sites } from 'src/_mock/site';

import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function SiteDetailView() {
  const { id } = useParams(); // Récupère l'ID du site depuis les paramètres d'URL
  const [selectedSite, setSelectedSite] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const site = sites.find((sitel) => sitel.id === parseInt(id, 10)); // Utilisez '==' pour la comparaison
    setSelectedSite(site);
  }, [id]);
  console.log(id);
  const handleBack = () => {
    router.back();
  };
  // Si aucun site correspondant à l'ID n'est trouvé, retournez à la liste des sites
  if (!selectedSite) {
    return (
      <Container>
        <Typography variant="h4">Site Detail</Typography>
        <Typography variant="body1">Site not found.</Typography>
        <Button
          variant="contained"
          color="primary"
          startIcon={<Iconify icon="eva:arrow-back-outline" />}
          onClick={handleBack}
        >
          Back to Sites
        </Button>
      </Container>
    );
  }

  return (
    <Container>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h4">Site Detail</Typography>
        <Button
          variant="contained"
          color="primary"
          startIcon={<Iconify icon="eva:arrow-back-outline" />}
          onClick={handleBack}
        >
          Back to Sites
        </Button>
      </Stack>

      <Card>
        <Typography variant="h6">{selectedSite.name}</Typography>
        <Typography variant="body1">Appareil: {selectedSite.appareil}</Typography>
        <Typography variant="body1">Inspection: {selectedSite.inspection}</Typography>
        <Typography variant="body1">Rapport: {selectedSite.rapport}</Typography>
        <Typography variant="body1">Status: {selectedSite.status}</Typography>
        {/* Ajoutez d'autres détails du site ici */}
      </Card>
    </Container>
  );
}
