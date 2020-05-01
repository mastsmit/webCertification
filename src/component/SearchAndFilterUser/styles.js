import { css } from 'emotion';

export const searchAndFilterUserRoot = css`
.search-label{
    margin:0px 0px 3px 0px;
    color:#1a73e8;
}
.search-credential-text-and-clear-filter-wrapper{
    display:flex;
    justify-content:space-between;
    margin: 0px 0px 10px 0px;
}
.search-by-name,.ant-checkbox-group,.search-by-credentials{
    margin: 0px 0px 10px 0px;
    padding: 4px 4px 8px 4px;
    display:flex;
    background-color:white;
    flex-direction:column;
    .text-styles{
        color:#1a73e8;
        padding-right: '2px';
    }
}
.ant-checkbox-group-item{
    padding: 2px 0px 3px 0px;
}
.search-bar-wrapper{
    padding: 1vh 0px;
}
.ant-checkbox-group{
    margin-top:10px;
}
.ant-btn{
    color: #1a73e8;
    height: 20px;
    cursor:pointer;
    :focus{
        outline:none;
    }
    :hover{
        background-color: rgba(50,0,255,0.05);
        border: 1px solid;
    }
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