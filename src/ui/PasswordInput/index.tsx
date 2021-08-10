import React, { FC, memo } from 'react';
import { InputLabel, IconButton, InputAdornment, OutlinedInput } from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import useStyles from './styles';
interface Props {
  label?: string;
  name?: string;
  value?: any;
  defaultValue?: any;
  onChange?: VoidFunction;
  inputProps?: any;
  showPassword?: boolean;
  setShowPassword?: any;
  error?: string | boolean;
  children?: Array<React.ReactNode>;
  other?: any;
}

const PasswordInputComponent: FC<Props> = ({
  label,
  name,
  value,
  error,
  inputProps,
  onChange,
  showPassword,
  setShowPassword,
  ...other
}: Props) => {
  const classes = useStyles();
  return (
    <>
      <InputLabel htmlFor="password" className={classes.label}>
        {label}
      </InputLabel>
      <OutlinedInput
        {...other}
        className={classes.root}
        id="password"
        type={showPassword ? 'text' : 'password'}
        inputProps={inputProps}
        onChange={onChange}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={(e) => {
                setShowPassword();
              }}
              edge="end">
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        }
        labelWidth={70}
      />
    </>
  );
};

const PasswordInput = memo(PasswordInputComponent);
PasswordInput.displayName = 'PasswordInput';
export default PasswordInput;
