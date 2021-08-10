import { memo, FC } from "react";
import { AppBar, ListItemProps, Box, ListItem } from "@material-ui/core";

import useStyles from "./styles";
export function ListItemLink(props: ListItemProps<"a", { button?: true }>) {
  return <ListItem button component="a" {...props} />;
}

const HeaderLoginComp: FC = () => {
  const classes = useStyles();

  return (
    <Box className={classes.grow}>
      <AppBar position="static" className={classes.appBar} elevation={0}>
        <Box className={classes.headerLeft}>
          <div className={classes.momoLogo}>
            <h4>Website ADMIN</h4>
          </div>
        </Box>
      </AppBar>
    </Box>
  );
};

const HeaderLogin = memo(HeaderLoginComp);
HeaderLogin.displayName = "HeaderLogin";
export default HeaderLogin;

export interface HeaderProps {
  showSidebar: boolean;
  toggleShowSidebar: VoidFunction;
}
