import { Avatar, Chip, Stack, Typography } from "@mui/material";
import { GridRenderCellParams } from "@mui/x-data-grid";
import { stringAvatar } from "../../../../utils/avatarUtils";

type Subscription = {
  name: string,
  expiresAt: string
}

const SubscriptionCell = (params: GridRenderCellParams) => {
  const subscriptions = params.value;
  return (
    <Stack direction="row" spacing={1}>
      {subscriptions.map(({name, expiresAt}: Subscription) => (
        <Chip 
          component="div"
          key={name} 
          label={(
            <Stack direction="column" style={{textAlign: 'center'}} spacing={0}>
              <Typography variant="caption"><strong>{name}</strong></Typography>
              <Typography variant="caption">{expiresAt}</Typography>
            </Stack>
          )} 
          variant="outlined"
          style={{height: '100%'}}
        />
      ))}
    </Stack>
  )
};

export default SubscriptionCell;
