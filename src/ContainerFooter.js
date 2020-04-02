import styled from "styled-components";
import { spacing, typography } from "@govuk-react/lib";
import {
  FOOTER_BACKGROUND,
  FOOTER_BORDER_TOP,
  FOOTER_TEXT
} from "govuk-colours";

const ContainerFooter = styled("footer")(
  typography.font({ size: 16 }),
  spacing.responsivePadding({ size: 7, direction: "top" }),
  spacing.responsivePadding({ size: 5, direction: "bottom" }),
  {
    borderTop: `1px solid ${FOOTER_BORDER_TOP}`,
    color: FOOTER_TEXT,
    background: "#334B63"
  }
);

export default ContainerFooter;
