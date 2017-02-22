import getMuiTheme from 'material-ui/styles/getMuiTheme';
import * as colors from 'material-ui/styles/colors';
import spacing from 'material-ui/styles/spacing';
import zIndex from 'material-ui/styles/zIndex';
import { fade } from 'material-ui/utils/colorManipulator';

const theme = getMuiTheme({
  spacing,
  zIndex,
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: colors.lightBlue500,
    primary2Color: colors.lightBlue50,
    primary3Color: colors.lightBlue100,
    accent1Color: colors.lightBlue200,
    accent2Color: colors.lightBlue300,
    accent3Color: colors.lightBlue400,
    // textColor: colors.white,
    canvasColor: colors.white,
    borderColor: colors.grey300,
    disabledColor: fade(colors.darkBlack, 0.3),
    pickerHeaderColor: colors.lightBlue500,
  },
  datePicker: {
    selectColor: colors.lightBlue500,
  },
  tabs: {
    backgroundColor: colors.lightBlue300,
    textColor: fade(colors.lightBlue500, 0.7),
    selectedTextColor: colors.lightBlue500,
  },
});

export default theme;
