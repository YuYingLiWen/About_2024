import {
  AppBar,
  Button,
  ButtonGroup,
  Toolbar,
  Typography,
} from "@mui/material";

function NavigationHeader() {
  return (
    <AppBar position="relative" elevation={1} sx={{}}>
      <Toolbar>
        <ButtonGroup>
          <Button>
            <Typography sx={{ color: "tomato" }}>test 1</Typography>
          </Button>
          <Button>
            <Typography sx={{ color: "tomato" }}>test 2</Typography>
          </Button>
          <Button>
            <Typography sx={{ color: "tomato" }}>test 3</Typography>
          </Button>
        </ButtonGroup>
      </Toolbar>
    </AppBar>
  );
}

export default NavigationHeader;
