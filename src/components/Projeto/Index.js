import React from 'react';
import SubTitle from '../SubTitle/Index';
import { Highlight, Info, TagLink } from './styles';

const obterDataFormatada = (date) => {
  const data = new Date(date);
  const dia = data.getUTCDate().toString().padStart(2, '0');
  const mes = (data.getUTCMonth() + 1).toString().padStart(2, '0');
  const ano = data.getUTCFullYear();

  return `${dia}/${mes}/${ano}`;
};

const Projeto = ({ repositorio }) => (
  <div>
    <SubTitle texto={repositorio.full_name} />
    <Info>
      <Highlight>{obterDataFormatada(repositorio.created_at)}</Highlight>
    </Info>
    <TagLink href={repositorio.html_url} rel="noreferrer" target="_blank">
      <p>{repositorio.html_url}</p>
    </TagLink>
  </div>
);

export default Projeto;
