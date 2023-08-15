import { makeStyles } from "@mui/styles";
import {styled} from '@mui/material/styles';
import { Badge } from "@mui/material";

// Style for centering the cards and filter section
export const useStyles = makeStyles((theme)=>({
    cardWrapper: {
        margin: "25px 100px",
        [theme.breakpoints.down('xs')]:{
            margin:'20px 50px'
        }
    },
}))

// style to disply the badge
export const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));

