// Contact.js
import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "styled-components";

const ContactContainer = styled(Box)`
  max-width: 600px;
  margin: 50px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
`;

const Contact = () => {
  return (
    <ContactContainer>
      <Typography variant="h4" align="center" gutterBottom>
        Contact Information
      </Typography>
      <Typography variant="h6" gutterBottom>
        Jasvir Singh
      </Typography>
      <Typography variant="body1" gutterBottom>
        Position: Customer Support Manager
      </Typography>
      <Typography variant="body1" gutterBottom>
        Email: jashvirys22hcs@student.mes.ac.in
      </Typography>
      <Typography variant="body1" gutterBottom>
        Phone: 8668260628
      </Typography>
      <Typography variant="body1" gutterBottom>
        Office Hours: Monday to Friday, 9 AM - 5 PM
      </Typography>
      <Typography variant="body1" gutterBottom>
        Address: Rees
      </Typography>
      <Typography variant="body1" gutterBottom>
        Feel free to reach out to me through the contact details above.
      </Typography>
    </ContactContainer>
  );
};

export default Contact;
