import React, { useState } from "react";
import CustomButton from "../Components/AuthButton";

const Forgot = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log("Logging in with:", { email });
  };

  const handleGoogleLogin = () => {
    // Add your Google login logic here
    console.log("Logging in with Google");
  };

  //   return (
  //     <Grid container justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
  //       <Grid item xs={10} sm={6} md={4} lg={3}>
  //         <Paper elevation={3} style={{ padding: '20px', textAlign: 'center' }}>
  //           <Typography variant="h5" gutterBottom>
  //             Login
  //           </Typography>
  //           <form onSubmit={handleSubmit}>
  //             <TextField
  //               type="email"
  //               label="Email"
  //               fullWidth
  //               margin="normal"
  //               variant="outlined"
  //               value={email}
  //               onChange={handleEmailChange}
  //               required
  //             />
  //             <TextField
  //               type="password"
  //               label="Password"
  //               fullWidth
  //               margin="normal"
  //               variant="outlined"
  //               value={password}
  //               onChange={handlePasswordChange}
  //               required
  //             />
  //             <Button type="submit" variant="contained" color="primary" fullWidth style={{ marginTop: '20px' }}>
  //               Login
  //             </Button>
  //           </form>
  //           <Typography variant="body2" style={{ marginTop: '10px' }}>
  //             Or login with
  //           </Typography>
  //           <GoogleLogin
  //                 clientId= {clientId}
  //                 onSuccess={(credentialResponse) => {
  //                     console.log(credentialResponse);
  //                 }}
  //                 onError={() => {
  //                     console.log("Google authentication failed");
  //                 }}
  //             />
  //           <Typography variant="body2" style={{ marginTop: '10px' }}>
  //             Don't have an account?{' '}
  //             <Link href="#" onClick={() => console.log('Navigate to sign up page')}>
  //               Sign Up
  //             </Link>
  //           </Typography>
  //         </Paper>
  //       </Grid>
  //     </Grid>
  //   );
  return (
    <>
      <div className="container relative hidden min-h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-3 lg:px-0">
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex lg:col-span-1">
          <div className="absolute inset-0 bg-zinc-900" />
        </div>

        <div className="lg:p-8 lg:col-span-2">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 ">
            <h1 className="text-center font-bold text-2xl">Password Recover</h1>
            <div className="grid gap-2">
              <label htmlFor="email">Email</label>
              <input id="email" type="email" placeholder="m@example.com" />
            </div>
            <CustomButton className="w-full bg-black">Send Email</CustomButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default Forgot;
