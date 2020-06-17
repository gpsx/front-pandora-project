import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Avatar from '@material-ui/core/Avatar';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import AvatarOnline from '../../components/AvatarOnline';

const useStyles = makeStyles((theme) => ({
  list: {
    height: '82vh',
    overflowY: 'auto'
  },
  subheader: {
    backgroundColor: theme.palette.background.paper,
    height: '10%'
  },
  grow: {
    flexGrow: 1,
  },
}));

export default function Mensagens({ changeId, ...props }) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <List className={classes.list}>
        {props.chats.map((data) =>
          (<React.Fragment key={data.id}>
            {data.id === props.chats[0].id && <ListSubheader className={classes.subheader}>Pandora Chat</ListSubheader>}
            <ListItem button onClick={(e) => changeId(data.id)}>
              <ListItemAvatar>
                {data.otherUser.online ? (
                  <AvatarOnline><Avatar src={data.otherUser.img} alt="Profile Picture" /></AvatarOnline>
                ) : (
                  <Avatar alt="Profile Picture" src={data.otherUser.img} />
                )}
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