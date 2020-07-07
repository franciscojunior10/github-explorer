import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Logo Git Explorer" />
      <Title>Explore repositórios no GitHub</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/33940202?s=460&u=5af5f22d17416b6dd503e9e38163263984e55903&v=4"
            alt="Logo Github"
          />
          <div>
            <strong>franciscojunior10/personal-website-gatsby</strong>
            <p>computer My personal website implemented with Gatsby</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/33940202?s=460&u=5af5f22d17416b6dd503e9e38163263984e55903&v=4"
            alt="Logo Github"
          />
          <div>
            <strong>franciscojunior10/personal-website-gatsby</strong>
            <p>computer My personal website implemented with Gatsby</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/33940202?s=460&u=5af5f22d17416b6dd503e9e38163263984e55903&v=4"
            alt="Logo Github"
          />
          <div>
            <strong>franciscojunior10/personal-website-gatsby</strong>
            <p>computer My personal website implemented with Gatsby</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
