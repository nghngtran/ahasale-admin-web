import React, { memo, useEffect, useState } from "react";
import {
  Typography,
  Button,
  Box,
  TextField,
  Container,
  Grid,
  FormControl,
} from "@material-ui/core";
import Spin from "../../ui/Spin";
import PasswordInput from "../../ui/PasswordInput";
import { useLoginForm } from "./utils";
import useStyles from "./styles";
import logo from "../../assets/logo.png";
import { useHistory } from "react-router-dom";
import HeaderLogin from "../HeaderLogin";
export const USERNAME_INVALID = `Vui lòng nhập tài khoản của bạn!`;
export const PASSWORD_INVALID = `Vui lòng nhập mật khẩu của bạn!`;
export const LoginComponent: React.FC = () => {
  const classes = useStyles();
  const { register, handleLogin, errors } = useLoginForm();
  const loading = false;
  const [showPassword, setShowPassword] = useState(false);

  const setShowPasswordInput = () => {
    setShowPassword(!showPassword);
  };
  const { push } = useHistory();
  useEffect(() => {
    if (localStorage.getItem("token") && localStorage.getItem("expiredAt")) {
      push("/dashboard");
    }
  }, [localStorage.getItem("token")]);

  return (
    <Container disableGutters className={classes.container} maxWidth={false}>
      <section className={classes.sectionWrap}>
        <HeaderLogin />
        <main className={classes.content}>
          <Container className={classes.page}>
            <div className={classes.paper}>
              <Box className={classes.root}>
                <Grid container>
                  <Grid item>
                    <a className={classes.momoLogo} href="/">
                      <img src={logo} alt="logo" className={classes.momoLogo} />
                    </a>
                  </Grid>
                  <Grid item>
                    <Typography className={classes.title}>Đăng nhập</Typography>
                  </Grid>
                </Grid>
                <Spin loading={loading}>
                  <form
                    noValidate
                    className={classes.form}
                    onSubmit={handleLogin}
                  >
                    <Box marginBottom={4} marginTop={4}>
                      <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="username"
                        label="Username"
                        autoComplete="username"
                        autoFocus
                        {...register("username", { required: true })}
                        {...showPassword}
                        className={classes.input}
                      />
                      <Typography color="error" className={classes.errorMgs}>
                        {errors.username && USERNAME_INVALID}
                      </Typography>
                    </Box>

                    <FormControl fullWidth variant="outlined">
                      <PasswordInput
                        showPassword={showPassword}
                        label="Mật khẩu"
                        name="password"
                        setShowPassword={setShowPasswordInput}
                        inputProps={register("password", { required: true })}
                      />
                    </FormControl>
                    <Typography color="error" className={classes.errorMgs}>
                      {errors.password && PASSWORD_INVALID}
                    </Typography>
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="primary"
                      className={classes.submit}
                    >
                      Đăng nhập
                    </Button>
                  </form>
                </Spin>
              </Box>
            </div>
          </Container>
        </main>
      </section>
    </Container>
  );
};

const Login = memo(LoginComponent);
Login.displayName = "Login";

export default Login;
