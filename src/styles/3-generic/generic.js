import reset from 'styled-reset';
import normalize from 'styled-normalize';
import boxSizing from './box-sizing';
import {css} from 'styled-components';

const generic = css`
    ${reset}
    ${normalize}
    ${boxSizing}
`;

export default generic;
