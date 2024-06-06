import {
  ThemeProvider as MUIThemeProvider,
  responsiveFontSizes,
} from "@mui/material/styles";
import { ThemeProvider } from "../src/theme/ThemeContext";
import { ThemeVariantsProps, theme } from "./theme";
import { router } from "./routes/router";
import { RouterProvider } from "react-router-dom";
import { useMemo, useState, useCallback, useEffect } from "react";
import ReactGA from 'react-ga4';
const TRACKING_ID = "G-KBK8VCJKY4";
import { AnimatePresence } from "framer-motion";
import CookieConsent from "react-cookie-consent";
import { Typography } from "@mui/material";

function App() {
  const [mode, setMode] = useState<ThemeVariantsProps>(
    ThemeVariantsProps.light
  );
  const [cookiesAccepted, setCookiesAccepted] = useState(false);
  const activeTheme = useMemo(() => responsiveFontSizes(theme(mode)), [mode]);
  const handleOnChange = useCallback(
    () =>
      setMode(
        mode === ThemeVariantsProps.light
          ? ThemeVariantsProps.light
          : ThemeVariantsProps.light
      ),
    [mode]
  );

  useEffect(() => {
    if (cookiesAccepted) {
      ReactGA.initialize(TRACKING_ID);
      ReactGA.send({ hitType: "pageview", page: window.location.pathname, pageTitle: document.title });

      const handleClick = (event: MouseEvent) => {
        const target = event.target as HTMLElement;
        if (target.tagName === 'BUTTON') {
          ReactGA.send({ hitType: 'event', eventCategory: 'Button', eventAction: 'click', eventLabel: target.innerText });
        }
      };
    
      document.addEventListener('click', handleClick);
    
      return () => {
        document.removeEventListener('click', handleClick);
      };
    }
  }, [cookiesAccepted])

  return (
    <div className="app">
      <ThemeProvider toggleTheme={handleOnChange}>
        <MUIThemeProvider theme={activeTheme}>
          <AnimatePresence>
            <RouterProvider router={router} />
          </AnimatePresence>
        </MUIThemeProvider>
      </ThemeProvider>
      <CookieConsent
        location="bottom"
        buttonText="Accepter"
        declineButtonText="Continuer sans accepter"
        enableDeclineButton
        cookieName="cookieConsent"
        style={{ background: "#2B373B" }}
        buttonStyle={{ color: "#fff", fontSize: "16px", background: "#c71121"}}
        declineButtonStyle={{ color: "#999", fontSize: "13px", background: "transparent", textDecoration: "underline" }}
        expires={150}
        onAccept={() => {
          setCookiesAccepted(true);
        }}
        onDecline={() => {
          setCookiesAccepted(false);
        }}
      >
        <Typography variant="body2">
        Ce site utilise des cookies pour améliorer votre expérience utilisateur. <br />
        En continuant à naviguer sur ce site, vous acceptez que nous utilisions des cookies.
        </Typography>
      </CookieConsent>
    </div>
  );
}

export default App;