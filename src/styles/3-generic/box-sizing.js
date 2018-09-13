import {css} from 'styled-components';

const boxSizing = css`
    * {
        box-sizing: border-box;
        &::after {
            box-sizing: border-box;
        }
        &::before {
            box-sizing: border-box;
        }
    }
`;

export default boxSizing;