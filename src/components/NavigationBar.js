import React from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import { AppBar, Tab, Tabs, Typography } from '@material-ui/core'
import { Info, Subject, AccountTree, GitHub, PhotoCamera } from '@material-ui/icons'
import PictureGrid from './PictureGrid'

const StyledTabs = withStyles({
  indicator: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    '& > span': {
      maxWidth: 40,
      width: '100%',
      backgroundColor: '#65837F',
    },
  },
})((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

const StyledTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    color: '#fff',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    '&:focus': {
      opacity: 1,
    },
  },
}))((props) => <Tab disableRipple {...props} />);

const StyledAppBar = withStyles((theme) => ({
    root: {
      backgroundColor: '#142021'
    },
  }))((props) => <AppBar {...props} />);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  padding: {
    padding: theme.spacing(1),
  },
  nav: {
    backgroundColor: '#142021',
  },
}));

export default function NavigationBar() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <div className={classes.nav}>
          <StyledAppBar>
            <StyledTabs value={value} onChange={handleChange} aria-label="styled tabs example" centered>
                <StyledTab label="About Me" icon={<Info />}/>
                <StyledTab label="Resume" icon={<Subject />}/>
                <StyledTab label="Projects" icon={<AccountTree />}/>
                <StyledTab label="GitHub" icon={<GitHub />}/>
                <StyledTab label="Photos" icon={<PhotoCamera />}/>
            </StyledTabs>
          </StyledAppBar>
        <Typography className={classes.padding} />
      </div>
    </div>
  );
}