import { Button, Container, Typography } from "@mui/material";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Index() {
  const { data: session } = useSession();
  if (session) {
    return (
      <Container maxWidth="sm">
        <Typography variant="h4" component="h1" gutterBottom>
          Hello {session?.user?.name}!
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          You are signed in.
        </Typography>
        <Button variant="contained" onClick={() => signOut()}>
          Sign Out
        </Button>
      </Container>
    );
  }
  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" gutterBottom>
        You are not signed in.
      </Typography>
      <Button variant="contained" onClick={()=>signIn()}>Sign In</Button>
    </Container>
  );
}
