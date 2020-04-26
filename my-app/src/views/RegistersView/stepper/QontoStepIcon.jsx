import React from 'react'
import clsx from "clsx";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import StepConnector from "./StepConnector";
import Check from '@material-ui/icons/Check';

export const QontoConnector = withStyles({
    alternativeLabel: {
        top: 10,
        left: 'calc(-50% + 16px)',
        right: 'calc(50% + 16px)',
    },
    active: {
        '& $line': {
            borderColor: '#328CC1',
        },
    },
    completed: {
        '& $line': {
            borderColor: '#328CC1',
        },
    },
    line: {
        borderColor: '#eaeaf0',
        borderTopWidth: 3,
        borderRadius: 1,
    },
})(StepConnector);

const useQontoStepIconStyles = makeStyles({
    root: {
        color: '#eaeaf0',
        display: 'flex',
        height: 22,
        alignItems: 'center',
    },
    active: {
        color: '#328CC1',
    },
    circle: {
        width: 8,
        height: 8,
        borderRadius: '50%',
        backgroundColor: 'currentColor',
    },
    completed: {
        color: '#328CC1',
        zIndex: 1,
        fontSize: 18,
    },
});

export function QontoStepIcon(props) {
    const classes = useQontoStepIconStyles();

    return (
        <div
            className={clsx(classes.root, {
                [classes.active]: props.active,
            })}
        >
            {props.completed ? <Check className={classes.completed} /> : <div className={classes.circle} />}
        </div>
    );
}



