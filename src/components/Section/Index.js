import React, { useEffect, useState } from 'react';
import Card from '../Card/Index';
import Projeto from '../Projeto/Index';
import { Highlight, Info } from '../Card/styles';
import SubTitle from '../SubTitle/Index';
import Title from '../Title/Index';
import { SectionHeading } from '../Title/styles';
import { Sections } from './styles';
import RedesSociais from '../RedesSociais/Index';
import Habilidades from '../Habilidades/Index';

const Section = ({ profile }) => {
  const [repositorios, setRepositorios] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/${profile.usuarioGithub}/repos`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setRepositorios(data);
      });
  }, []);

  return (
    <>
      <Sections id="about">
        <Title texto="Olá pessoal, sou o" />
        <SectionHeading>
          {profile.nome} <Highlight>{profile.sobrenome}</Highlight>
        </SectionHeading>
        <Info>
          {profile.cidade} - {profile.estado} - {profile.contato} -{' '}
          <Highlight> {profile.email}</Highlight>
        </Info>
        <p>{profile.biografia}</p>
        <div id="contacts">
          <Title texto="Contatos" />
          <SubTitle texto="Em desenvolvimento ACQA" />
        </div>
      </Sections>
      <Sections id="experience">
        <Title texto="Experiência" />
        {profile.experiencia.map((val) => (
          <Card
            key={val.id}
            subTitle={val.cargo}
            subTitleH3={val.empresa}
            date={val.periodo}
            info={val.atividades}
          />
        ))}
      </Sections>
      <Sections id="skills">
        <Title texto="Habilidades" />
        <Habilidades habilidades={profile.habilidades} />
      </Sections>
      <Sections id="projects">
        <Title texto="Projetos" />
        {repositorios.map((repositorio) => (
          <Projeto key={repositorio.id} repositorio={repositorio} />
        ))}
      </Sections>
      <Sections id="redes-sociais">
        <Title texto="Redes Sociais" />
        <RedesSociais
          linkedin={profile.redesSociais.linkedin}
          github={profile.redesSociais.github}
        />
      </Sections>
    </>
  );
};

export default Section;
