import { useEffect, useState } from 'react';
import { CircularProgress, Box, Alert, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { LoadingProps } from "@/types/index";

function Loading({ open }: LoadingProps) {
  const [loadingTooLong, setLoadingTooLong] = useState(false);
  const [showProgress, setShowProgress] = useState(open);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (open) {
      setShowProgress(true);
      timer = setTimeout(() => {
        setLoadingTooLong(true);
      }, 5000);
    } else {
      setLoadingTooLong(false);
      setShowProgress(false);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [open]);

  if (!showProgress) {
    return null;
  }

  if (loadingTooLong) {
    return (
      <Alert 
        severity="error"
        sx = {{
          position: "fixed",
          top: 100,
          mx: "auto",
          width: "70%",
          zIndex: 9999,
        }}
        action={
          <IconButton
            aria-label="close"
            color="inherit"
            size="small"
            onClick={() => {
              setLoadingTooLong(false);
              setShowProgress(false);
            }}
          >
            <CloseIcon fontSize="inherit" />
          </IconButton>
        }
      >
        Problème de connexion, le site peut ne pas fonctionner correctement.
      </Alert>
    );
  }

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        zIndex: 9999,
      }}
    >
      <CircularProgress color="secondary" size="100px" />
    </Box>
  );
}

export default Loading;