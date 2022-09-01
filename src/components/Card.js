import React from 'react';

import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';

const BootstrapTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.black,
    fontSize: theme.typography.pxToRem(16),
    maxWidth: 220,
  },
}));

export default function Card({ username, position, email, phone, imageUrl }) {
  return (
    <li className="card d-flex flex-column align-center">
      <img width={70} height={70} src={false ? imageUrl : 'img/photo-cover.svg'} alt="avatar"></img>
      <BootstrapTooltip title={username} placement="bottom-start" followCursor>
        <p className="card-name card-title">{username}</p>
      </BootstrapTooltip>
      <div className="card-info">
        <BootstrapTooltip title={position} placement="bottom-start" followCursor>
          <p className="card-title">{position}</p>
        </BootstrapTooltip>
        <BootstrapTooltip title={email} placement="bottom-start" followCursor>
          <p className="card-title">{email}</p>
        </BootstrapTooltip>
        <BootstrapTooltip title={phone} placement="bottom-start" followCursor>
          <p className="card-title">{phone}</p>
        </BootstrapTooltip>
      </div>
    </li>
  );
}
