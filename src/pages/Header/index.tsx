import { memo, FC, useCallback } from "react";
import {
  AppBar,
  ListItemProps,
  Box,
  Grid,
  ListItem,
  Button,
} from "@material-ui/core";
import ExitToAppOutlinedIcon from "@material-ui/icons/ExitToAppOutlined";

import useStyles from "./styles";
export function ListItemLink(props: ListItemProps<"a", { button?: true }>) {
  return <ListItem button component="a" {...props} />;
}

const HeaderComp: FC = () => {
  const classes = useStyles();

  const handleLogout = useCallback(() => {
    localStorage.clear();
    window.location.href = "/login";
  }, []);

  const menuId = "primary-search-account-menu";
  return (
    <Box className={classes.grow}>
      <AppBar position="static" className={classes.appBar} elevation={0}>
        <Box className={classes.headerLeft}>
          <div className={classes.momoLogo}>
            <h4>Website ADMIN</h4>
          </div>
        </Box>
        <Box className={classes.sectionDesktop}>
          <Grid container alignItems="center">
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                aria-label="logout"
                aria-controls={menuId}
                className={classes.profileBtn}
                onClick={handleLogout}
                endIcon={<ExitToAppOutlinedIcon />}
              >
                Đăng xuất
              </Button>
            </Grid>
          </Grid>
        </Box>
      </AppBar>
    </Box>
  );
};

const Header = memo(HeaderComp);
Header.displayName = "Header";
export default Header;

export interface HeaderProps {
  showSidebar: boolean;
  toggleShowSidebar: VoidFunction;
}
