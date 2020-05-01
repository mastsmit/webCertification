import { css } from 'emotion';

export const userCardCompRoot = css`
.single-user-card{
    background-color: #fff;
    display:flex;
    margin:5px 0px 10px 0px;
    padding:5vh 6vw 5vh 4vw;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.16);
    cursor:pointer;
flex-direction:column;
flex-wrap: wrap;
.user-profile-wrapper{
    display:flex;
    transition: all ease-in-out 200ms;
}
            .user-image-wrapper{
            background-size: cover;
            flex: 0 1 auto;
            margin: 0px 3px 0px 0px;

            }
            .user-name-and-credentials-wrapper{
            flex-direction:column;
            flex-wrap:wrap;
            flex: 1 0 1px;
            }
            .user-name-wrapper{
                font-size: 35px;
                padding: 1vh 5vw 3vh 0vw;
            }
            .user-bio-wrapper{
            min-width:200px;
            }
            .user-credentials-wrapper{
                    display:flex;
                    flex-wrap:wrap;
                    padding: 2vh 8vw 2vh 0vw;
                    .single-credential-tag{
                        margin: 0px 2vw 2vh 0px;
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
    background-color:rgba(50,50,255,0.01);
    transform: translate3d(0,-1px,0);
}
}
`;