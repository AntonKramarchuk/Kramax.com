import React from 'react';
import {Box, Container} from "@mui/material";
import LogoFooter from "./LogoFooter/LogoFooter";
import NavBarFooter from "./NavBarFooter/NavBarFooter";
import ContactsFooter from "./ContactsFooter/ContactsFooter";

function Footer() {
    return (
        <footer>
            <Box component="div" sx={{
                background: "#2D404C", color: 'text.secondary'
            }}>
                <Container maxWidth="lg">
                  <Box component="div" sx={{height:'100%',display: 'flex', alignItems:'center',justifyContent: 'space-between', padding:'50px 0'}}>
                      <Box component="div" sx={{ display:'flex', flexDirection: 'column'}}>
                          <LogoFooter/>
                          <NavBarFooter/>
                      </Box>
                      <Box component="div">
                          <ContactsFooter/>
                      </Box>

                  </Box>
                </Container>
            </Box>
        </footer>
    );
}

export default Footer;