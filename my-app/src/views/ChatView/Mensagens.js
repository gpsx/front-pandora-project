import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  list: {
    height: '82vh',
    overflowY: 'auto'
  },
  subheader: {
    backgroundColor: theme.palette.background.paper,
    height:'10%'
  },
  appBar: {
    top: 'auto',
    bottom: 0,
  },
  grow: {
    flexGrow: 1,
  },
  fabButton: {
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
  },
}));

export default function Mensagens({changeId, ...props}) {
  const classes = useStyles();

  return (
    <React.Fragment>
        <List className={classes.list}>
          {props.chats.map((data) => 
            (<React.Fragment key={data.id}>
              {data.id === props.chats[0].id && <ListSubheader className={classes.subheader}>Pandora Chat</ListSubheader>}
              <ListItem button onClick={(e) => changeId(data.id)}>
                <ListItemAvatar>
                  <Avatar alt="Profile Picture" src={data.otherUser.img} />
                </ListItemAvatar>
                <ListItemText primary={data.otherUser.name} />
              </ListItem>
            </React.Fragment>)
          )}
        </List>
    </React.Fragment>
  );
}

// chat: (3) [{…}, {…}, {…}]
// id: 1
// users: (2) [{…}, {…}]