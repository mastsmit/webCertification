import { css } from 'emotion';

export const searchAndFilterUserRoot = css`
.search-label{
    margin:0px 0px 3px 0px;
    color:#1a73e8;
}
.search-by-name,.ant-checkbox-group{
    margin: 0px 0px 4px 6px;
    padding: 4px 4px 8px 4px;
    display:flex;
    background-color:white;
    flex-direction:column;
}
.ant-checkbox-group{
    margin-top:10px;
}
.ant-input{
    width:90%;
    border: 1px solid black;
    :focus{
        outline: -webkit-focus-ring-color auto 3px;
    }
;
}
`;