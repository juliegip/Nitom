import { useEffect, useRef, useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  Divider,
  Stack,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Motin_Services } from "@/constants";
import content from "@/constants/content.json";
import { LazyLoadImage } from 'react-lazy-load-image-component';

const NotreOffre = () => {
  const theme = useTheme();
  const belowSM = useMediaQuery(theme.breakpoints.down("sm"));
  const accordionRef = useRef<HTMLDivElement>(null);
  const [selectedAccordion, setSelectedAccordion] = useState<string | null>(
    null
  );

  const handleClick = (panel: string) => {
    setSelectedAccordion(panel === selectedAccordion ? null : panel);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        !accordionRef.current ||
        !accordionRef.current.contains(event.target as Node)
      ) {
        setSelectedAccordion(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <Box ref={accordionRef} component="section" gap={3} id="services" mt={5}>
      <Typography variant="h2" gutterBottom textAlign="center">
        {content.sections.services}
      </Typography>
      <Stack
        direction={belowSM ? "column" : "row"}
        justifyContent="space-around"
        alignItems={belowSM ? "center" : "flex-start"}
        flexGrow={1}
        mt={5}
        spacing={3}
      >
        {Motin_Services?.map((service, index) => (
          <Box
            key={index}
            width={belowSM ? "100%" : "25%"}
            padding={belowSM ? "40px" : "0"}
            sx={{
              backgroundColor:
                belowSM && index % 2 === 0
                  ? theme.palette.primary.lighter
                  : "inherit",
            }}
          >
            <Box minHeight="30vh" mb={4} display="flex" flexDirection="column">
              <LazyLoadImage
                src={service.image}
                alt={service.offre}
                style={{ maxWidth: "100%", height: "auto" }}
              />
              <Typography variant="h3" mt={3} sx={{ minHeight: "4rem" }}>
                {service.offre}
              </Typography>
              <Divider
                sx={{
                  width: "30%",
                  borderBottomWidth: 4,
                  py: "0.5rem",
                  mb: "1rem",
                }}
              />
              <Box>
                {service.contenu?.map((item, innerIndex) => (
                  <Accordion
                    elevation={0}
                    key={innerIndex}
                    expanded={selectedAccordion === `${index}-${innerIndex}`}
                    onChange={() => handleClick(`${index}-${innerIndex}`)}
                    sx={{ width: "100%", minHeight: "5rem", display: "flex", flexDirection: "column", justifyContent: "center" }}
                  >
                    <AccordionSummary
                      sx={{
                        flexDirection: "row-reverse",
                        justifyContent: "space-between",
                        color:
                          selectedAccordion === `${index}-${innerIndex}`
                            ? "secondary.main"
                            : "inherit",
                      }}
                      expandIcon={<ExpandMoreIcon />}
                    >
                      <Typography
                        variant="subtitle1"
                        marginLeft="1rem"
                        sx={{
                          fontWeight:
                            selectedAccordion === `${index}-${innerIndex}`
                              ? 600
                              : "inherit",
                          transition: "font-weight 0.3s",
                        }}
                      >
                        {item.details}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography variant="body2" sx={{ pl: "1.75rem" }}>
                        {item.description}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                ))}
              </Box>
            </Box>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default NotreOffre;
