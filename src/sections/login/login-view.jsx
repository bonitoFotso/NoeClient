import { useState } from 'react';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import LoadingButton from '@mui/lab/LoadingButton';
import { alpha, useTheme } from '@mui/material/styles';
import InputAdornment from '@mui/material/InputAdornment';

import { useRouter } from 'src/routes/hooks';

import { bgGradient } from 'src/theme/css';
import { useAuth } from 'src/provider/AuthProvider';

import Logo from 'src/components/logo';
import Iconify from 'src/components/iconify'; // Importez le hook useAuth

// ----------------------------------------------------------------------

export default function LoginView() {
  const { isLoggedIn, setLoggedIn } = useAuth(); // Utilisez le hook useAuth pour accéder à l'état de connexion

  const theme = useTheme();
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (event) => {
    event.preventDefault(); // Empêcher la soumission par défaut du formulaire

    // Logique de connexion (à remplacer par votre propre logique d'authentification)
    const email = event.target.email.value;
    const password = event.target.password.value;

    // Ici, vous pouvez implémenter la vérification des informations d'identification de l'utilisateur.
    // Si les informations d'identification sont valides, rediriger vers la page d'accueil et mettre à jour l'état de connexion.
    // Par exemple, vous pouvez utiliser une API pour vérifier les informations d'identification.

    if (email === 'admin@admin.com' && password === 'ADMIN') {
      localStorage.setItem('isLoggedIn', true);
      // Si les informations d'identification sont valides, rediriger vers la page d'accueil
      router.push('/');
      // Mettre à jour l'état de connexion dans le composant Router
      setLoggedIn(true);
    } else {
      // Si les informations d'identification sont incorrectes, afficher un message d'erreur ou effectuer une autre action.
      console.log('Identifiants incorrects');
    }
  };

  const renderForm = (
    <form onSubmit={handleLogin}>
      {' '}
      {/* Ajouter onSubmit handler */}
      <Stack spacing={3}>
        <TextField name="email" label="Email address" />

        <TextField
          name="password"
          label="Password"
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                  <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>
      <Stack direction="row" alignItems="center" justifyContent="flex-end" sx={{ my: 3 }}>
        <Link variant="subtitle2" underline="hover">
          Forgot password?
        </Link>
      </Stack>
      <LoadingButton fullWidth size="large" type="submit" variant="contained" color="inherit">
        Login
      </LoadingButton>
    </form>
  );
  // Rediriger automatiquement vers la page d'accueil si l'utilisateur est déjà connecté
  if (isLoggedIn) {
    router.push('/');
    return null;
  }
  return (
    <Box
      sx={{
        ...bgGradient({
          color: alpha(theme.palette.background.default, 0.9),
          imgUrl: '/assets/background/overlay_4.jpg',
        }),
        height: 1,
      }}
    >
      <Logo
        sx={{
          position: 'fixed',
          top: { xs: 16, md: 24 },
          left: { xs: 16, md: 24 },
        }}
      />

      <Stack alignItems="center" justifyContent="center" sx={{ height: 1 }}>
        <Card
          sx={{
            p: 5,
            width: 1,
            maxWidth: 420,
          }}
        >
          <Typography variant="h4">Sign in to NOE</Typography>

          {renderForm}
        </Card>
      </Stack>
    </Box>
  );
}
