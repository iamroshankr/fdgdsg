import React from "react";
import { Box, styled } from "@mui/material";

const Container = styled(Box)`
  padding: 100px;
  background: #FFFFFF;
`;

export default function LoadingSpinner() {
  return (
    <Container className="spinner-container">
      <Box className="loading-spinner"></Box>
    </Container>
  );
}