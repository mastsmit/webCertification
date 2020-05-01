import { css } from 'emotion';

export const userCardCompRoot = css`
.single-user-card{
    background-color: #fff;
    display:flex;
    margin:5px 0px;
    cursor:pointer;
flex-direction:column;
flex-wrap: wrap;
.user-profile-wrapper{
    display:flex;
}
            .user-image-wrapper{
            background-size: cover;
            flex: 0 1 auto;
            }
            .user-name-and-credentials-wrapper{
            flex-direction:column;
            flex-wrap:wrap;
            flex: 1 0 1px;
            }
            .user-name-wrapper{

            }
            .user-bio-wrapper{
            min-width:200px;
            }
            .user-credentials-wrapper{
                    display:flex;
                    flex-wrap:wrap;
                    .single-credential-tag{
                        margin: 0px 2vw 0px 0px;
                        padding: 2px 5px;
                        background-color: #ddeafc;
                        border-width: 0;
                        color: #1a73e8;
                    }
            }
            .last-updated-details{

            }
            .user-image{
            }
:hover{
    background-color:grey;
}
}
`;