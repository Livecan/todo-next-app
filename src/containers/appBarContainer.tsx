import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

const AppBarContainer: React.FC<React.PropsWithChildren> = (props) => {
  return (
    <AppBar position="static">
      <Toolbar>
        {props.children}
      </Toolbar>
    </AppBar>
  );
};

export default AppBarContainer;
