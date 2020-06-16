import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import SwipeableViews from "react-swipeable-views";
import Typography from "@material-ui/core/Typography";

const CustomTabs = withStyles({
    root: {
        borderBottom: "1px solid #e8e8e8",
        borderRadius: "5px"
    },
    indicator: {
        height: '4px',
        backgroundColor: "#328CC1"
    }
})(Tabs);

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box p={3}>{children}</Box>}
        </Typography>
    );
}

const CustomTab = withStyles(theme => ({
    root: {
        backgroundColor: "#0B3C5D",
        textTransform: "none",
        minWidth: 200,
        color: "#FFF",
        fontWeight: theme.typography.fontWeightRegular,
        marginRight: theme.spacing(4),
        fontFamily: "Roboto",
        "&:hover": {
            color: "#328CC1",
            opacity: 1
        },
        "&$selected": {
            color: "#FFF",
            fontWeight: theme.typography.fontWeightMedium
        },
        "&:focus": {
            color: "#FFF"
        }
    },
    selected: {}
}))(props => <Tab disableRipple {...props} />);

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    background: {
        backgroundColor: "#0B3C5D"
    }
}));

export default function CustomizedTabs(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <CustomTabs
                className={classes.background}
                value={value}
                onChange={handleChange}
                aria-label="ant example"
                centered
                variant="fullWidth"
            >
                {props.tabs.pages.map((item, i) => {
                    return <CustomTab label={item.title} />;
                })}
            </CustomTabs>
            <SwipeableViews containerStyle={{height: '600px'}} axis="x" index={value} onChangeIndex={handleChange}>
                {props.tabs.pages.map((item, i) => {
                    return (
                        <TabPanel value={value} index={i}>
                            {item.content}
                        </TabPanel>
                    );
                })}
            </SwipeableViews>
        </div>
    );
}
