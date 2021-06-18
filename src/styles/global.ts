
import { createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle `
  :root {
    --background: #FBFCFF;
    --blue: #4285F4;
    --border: #F4F5F7;
    --white-100:#FEFEFE;
    --grey-50:#EEEEEE;
    --grey-100:#E9E9E9;
    --grey-400: #7E7E7E;
    --grey-500:#53525D;   

  }

    html{ // o font-size por padrao e 16px //  1 rem = font-size(16px)
    @media (max-width:1080px) {
      font-size: 93.75%; //15px 16*0,9375 = 15
    }

    @media (max-width:720px)  {
      font-size: 87.5%; // 16* 0,875 = 14px
    }
  }

  body {
    background: var(--background);
  }

   body, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    letter-spacing: 0.03em;
  }
 

p {
    letter-spacing: 0.03em;
}




  
  
  
`