import { createStyles, Theme, makeStyles } from '@material-ui/core';
// import { colorSecondary } from '../../constants/colors';
const styles = (theme: Theme) =>
  createStyles({
    root: {
      '& .MuiInputBase-root': {
        fontSize: '16px!important',
      },
    },
    label: {
      fontSize: '16px!important',
    },
  });

const useStyles = makeStyles(styles, { classNamePrefix: 'Topup' });
export default useStyles;
