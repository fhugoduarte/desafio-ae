import React from "react";

import { paths } from '../../../util/constants';
import './styles.css';
import MenuItem from './MenuItem';
import MenuTree from './MenuTree';

const menu = () => (
  <ul className='sidebar-menu'>
    <MenuItem path={paths.HOME} label='Início' icon='home' />
    <MenuTree label="Categorias" icon="ticket">
      <MenuItem path={paths.POPULAR} label="Populares" icon="star"/>
      <MenuItem path={paths.LANCAMENTOS} label="Lançamentos" icon="upload"/>
      <MenuItem path={paths.TOPS} label="Top Filmes" icon="trophy"/>
    </MenuTree>
  </ul>
);

export default menu;
