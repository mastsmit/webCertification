import { css } from 'emotion';

export const userInfoCardHeaderRoot = css`
display:flex;
flex-direction:column;
padding: 2vh 0px 2vh 0px;
.header-total-filter-and-pagination-wrapper{
    display:flex;
    justify-content:space-between;
    align-items:center;
    /* display: block //use media query; */
}
.header-total-wrapper{
    padding: 5px 0px 5px 0px;
    font-size: large;
}
.header-filter-wrapper{
    display:flex;
}
.header-title-wrapper{
    font-size: x-large;
}
.ant-pagination{
    display:flex;
    list-style:none;
    justify-content:flex-end;
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
@media (max-width: 726px){
    .header-total-filter-and-pagination-wrapper{
          display:block;
        }
}
/* .ant-select-item{
    margin: 1.5vh 0px;
    :hover{
        background-color:grey;
    }
    .ant-select-item-option-content{
        padding: 0px 1vw;
        cursor: pointer;
    }
} */
`;