import React from 'react';
import { BsLinkedin, BsGithub } from 'react-icons/all';
import { FlexDiv, IconLink } from './styles';

const RedesSociais = ({ linkedin, github }) => (
  <FlexDiv>
    <div>
      <IconLink
        style={{ color: 'black' }}
        href={linkedin}
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsLinkedin />
      </IconLink>
    </div>
    <div>
      <IconLink
        style={{ color: 'black' }}
        href={github}
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsGithub />
      </IconLink>
    </div>
  </FlexDiv>
);

export default RedesSociais;
