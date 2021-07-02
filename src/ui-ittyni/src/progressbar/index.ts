import styled from ".././../../theme/styled-components";

export const ProfileProgress = styled('progress')`
    &[value]{
        height : 10px;
        width : 100%;
        ::-webkit-progress-bar {
            background-color: #eee;
            border-radius: 1px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25) inset;
        }
        ::-webkit-progress-value {
            background-image:
	            -webkit-linear-gradient( 135deg,
					transparent,
					transparent 33%,
					rgba(0,0,0,.1) 33%,
					rgba(0,0,0,.1) 66%,
					transparent 66%),
                -webkit-linear-gradient( top,
					rgba(255, 255, 255, .25),
					rgba(0,0,0,.2)),
                -webkit-linear-gradient( left, #09c, #ff0);          
            border-radius: 2px; 
            background-size: 35px 20px, 100% 100%, 100% 100%;
         }
    }
    
`