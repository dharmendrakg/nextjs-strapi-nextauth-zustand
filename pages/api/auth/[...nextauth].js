import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import axios from 'axios';

export default NextAuth({
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: 'faucetworld',
      credentials: {
        email: {
          label: 'email',
          type: 'email',
          placeholder: 'aartidkg@gmail.com',
        },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials, req) {
        const payload = {
          email: credentials.email,
          password: credentials.password,
        };

        const { data, status } = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/local`, {
          identifier: credentials.email,
          password: credentials.password,
        });
        if (status === 200) {
          return {
            id: data.user.id,
            name: data.user.username,
            email: data.user.email,
            confirmed: data.user.confirmed,
            blocked: data.user.blocked,
            jwt: data.jwt,
          };
        }
        return null;
      },
    }),
    // ...add more providers here
  ],
  secret: process.env.JWT_SECRET,
  pages: {
    signIn: '/login',
  },
  callbacks: {
    async jwt({ token, user }) {
      console.log('token', token);
      console.log('user', user);
      if (user) {
        token.accessToken = user.jwt;
      }

      return token;
    },

    async session({ session, token, user }) {
      return session;
    },
  },
  // Enable debug messages in the console if you are having problems
  debug: process.env.NODE_ENV === 'development',
});
