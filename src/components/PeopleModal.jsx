import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function PeopleModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      {/* Makes entire container function as button */}
      <Button className="peopleButton" onClick={handleOpen}>
        <div className="peopleListItem">
          <img src={props.imagePath} alt="person"/>
          {props.name}
        </div>
      </Button>
      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography variant="h4" component="h2">
            {props.name}
          </Typography>
          <Typography variant="h6" component="h2">
            {props.tagline}
          </Typography>
          <Typography variant="h6" component="h2">
            {props.title}
          </Typography>
          <img className = "peopleModalImg" src={props.imagePath}/>

          <Typography variant="h6" component="h2">
            RIT Information: 
          </Typography>
          {/* container for people's rit based information */}
          <div className="peopleSubInfo">         
            <Typography variant="subtitle1" component="h2">
              Username: 
              {props.username}
            </Typography>
           {props.office &&
            <Typography variant="subtitle1" component="h2">
              Office: {props.office}
            </Typography>
            }
            {props.interestArea && 
              <Typography variant="subtitle1" component="h2">
              Area of Interest: {props.interestArea}
              </Typography>
            }
          </div>

          {/* container for people's contacts, will only appear if person has one type of contact*/}
          {(props.email || props.phone) &&

            <div>
            <Typography variant="h6" component="h2">
             Contact Info: 
            </Typography>
              <div className="peopleSubInfo">
              
                {props.email && 
                  <Typography variant="subtitle1" component="h2">
                  Email: {props.email}
                  </Typography>
                }
                {props.phone && 
                  <Typography variant="subtitle1" component="h2">
                  Phone: {props.phone}
                  </Typography>
                }
              </div>
            </div>}

          {props.website &&
            <Typography variant="h6" component="h2">
                Website: <a href={props.website} target="_blank">{props.website}</a>          
            </Typography>
          }

          {/* container for socials, will only appear if person has facebook or twitter*/}
         {(props.twitter || props.facebook) &&

          <div>
            <Typography variant="h6" component="h2">
              Socials: 
            </Typography>
            <div className="peopleSubInfo">
              {props.twitter &&
                <Typography variant="subtitle1" component="h2">
                    Twitter: <a href={"https://twitter.com/" + props.twitter} target="_blank">{props.twitter}</a>
                </Typography>
              }
              {props.facebook &&
                <Typography variant="subtitle1" component="h2">
                    Facebook: <a href={"https://facebook.com/" + props.facebook} target="_blank">{props.facebook}</a>
                </Typography>
              }

            </div>
          </div>}

        </Box>
      </Modal>
    </div>
  );
}