import { css } from 'emotion';

export const userInfoCardHeaderRoot = css`
display:flex;
flex-direction:column;
.header-total-filter-and-pagination-wrapper{
    display:flex;
    justify-content:space-between;
    align-items:center;

}
.header-filter-wrapper{
    display:flex;
}
.ant-pagination{
    display:flex;
    list-style:none;
    .ant-pagination-total-text{
        color:red;
    }
    .ant-pagination-prev{
        background-color:white;
        margin:0px 3px;
    }
    .ant-pagination-next{
        background-color:white;
    }
    .ant-pagination-item{
        display:none;
    }

}
`;