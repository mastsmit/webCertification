import { css } from 'emotion';

export const appRoot = css`
display: flex;
flex-wrap: wrap;
.search-and-filter-wrapper{
    flex: 0 0 auto;
    min-width: 1px;
    padding: 0px 16px 0px 0px;
}
.header-and-user-info-wrapper{
   display: flex;
   flex-direction: column;
   height: auto;
   flex: 1 0 1px;
   padding: 0px 16px 0px 8px;
}
/* @media (max-width: 550px){
        width: 100%;
} */
`;