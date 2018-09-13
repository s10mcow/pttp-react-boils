import { injectGlobal } from 'styled-components';
import generic from './styles/3-generic/generic';
import base from './styles/4-base/base';
import utilities from './styles/5-utilities/utilities';
import objects from './styles/6-objects/objects';
import trumps from './styles/7-trumps/trumps';

//We import the tools based on the itcss architecture pattern
const baseStyles = () => injectGlobal`
    ${generic}
    ${base}
    ${utilities}
    ${objects}
    ${trumps}
`;

export default baseStyles;
