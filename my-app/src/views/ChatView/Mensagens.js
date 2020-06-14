import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Avatar from '@material-ui/core/Avatar';

let conversations= [
  {
      id: 1,
      users: [
        {
          nome: "adilson",
          id: 1,
          img: "https://external-preview.redd.it/raYbQzQlutYkVEJa0sRTrgJidmDnWB-wLjWbHwG1uIg.png?width=640&crop=smart&auto=webp&s=146a1965b581c86f96f1472229347963e666b13d"
        },
        {
          nome: "ronalsdo",
          id: 2,
          img: "  https://external-preview.redd.it/kYawLvrZdxpjRM_azd24veyXoH8gx6rYN-ryR2KtYVw.jpg?width=640&crop=smart&auto=webp&s=a3f598cc14e2345f17f7f8580fefdd102ab1a6dc"
        }
      ],
      chat: [
          {
              userId: "1",
              mensagem: "Cu",
              hora: "09:30"
          },
          {
              userId: "2",
              mensagem: "buceta",
              hora: "09:32"
          },
          {
              userId: "1",
              mensagem: "cavalo",
              hora: "09:35"
          }
      ] 
  },
  {
      id: 2,
      users: [
          {
              nome: "aaaaa",
              id: 1,
              img: "https://external-preview.redd.it/raYbQzQlutYkVEJa0sRTrgJidmDnWB-wLjWbHwG1uIg.png?width=640&crop=smart&auto=webp&s=146a1965b581c86f96f1472229347963e666b13d"
          },
          {
              nome: "bbb",
              id: 2,
              img: "  https://external-preview.redd.it/kYawLvrZdxpjRM_azd24veyXoH8gx6rYN-ryR2KtYVw.jpg?width=640&crop=smart&auto=webp&s=a3f598cc14e2345f17f7f8580fefdd102ab1a6dc"
          }
      ],
      chat: [
          {
              userId: "1",
              mensagem: "Caaaau",
              hora: "09:30"
          },
          {
              userId: "2",
              mensagem: "bucaaaeta",
              hora: "09:32"
          },
          {
              userId: "1",
              mensagem: "cavaaaaalo",
              hora: "09:35"
          }
      ] 
  },
  {
      id: 3,
      users: [
          {
              nome: "aaaaa",
              id: 3,
              img: "https://external-preview.redd.it/raYbQzQlutYkVEJa0sRTrgJidmDnWB-wLjWbHwG1uIg.png?width=640&crop=smart&auto=webp&s=146a1965b581c86f96f1472229347963e666b13d"
          },
          {
              nome: "bbb",
              id: 2,
              img: "  https://external-preview.redd.it/kYawLvrZdxpjRM_azd24veyXoH8gx6rYN-ryR2KtYVw.jpg?width=640&crop=smart&auto=webp&s=a3f598cc14e2345f17f7f8580fefdd102ab1a6dc"
          }
      ],
      chat: [
          {
              userId: "1",
              mensagem: "Caaaasdaau",
              hora: "09:30"
          },
          {
              userId: "2",
              mensagem: "buasdcaaaeta",
              hora: "09:32"
          },
          {
              userId: "1",
              mensagem: "casdavaaaaalo",
              hora: "09:35"
          }
      ] 
  }
  ]
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
              {data.id === 1 && <ListSubheader className={classes.subheader}>Pandora Chat</ListSubheader>}
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