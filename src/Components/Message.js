import * as React from "react";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";

export default function DescriptionAlerts({ severity, children }) {
  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      <Alert severity={severity}>
        <AlertTitle>Error</AlertTitle>
        {children} — <strong>check it out!</strong>
      </Alert>
    </Stack>
  );
}
