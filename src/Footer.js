import React from "react";
import PropTypes from "prop-types";
import SectionBreak from "@govuk-react/section-break";
import Container from "./ContainerFooter";

const Footer = ({ children }) => (
  <Container>
      <div className="govuk-footer__meta-item govuk-footer__meta-item--grow">
        <span style={{ display: "inline-block", textAlign: "Center" }}>
          <b><font textAlign="center" face="avenir" color="white" size="2">
            Developed by McGill University, Desautels Faculty of Management
            students</font>
            <br />
            <br />
          </b>
          <img alt="" src="./mcgillfooter.jpeg" height="30"/>
          <br></br>
          <br></br>
          <br></br>
          <font textAlign="center" face="avenir" color="white" size="2">
            This website and its contents herein, including all data, mapping,
            and analysis is provided to the public strictly for educational
            purposes. This data relies upon publicly available from Quebec's
            government (and foreign governments), which has been authorized for
            common usage. Reliance on the Website for medical guidance or use of
            the Website for commercial purposes is strictly prohibited. Managers
            of this website are not responsible for source data or for any use
            of these data that goes beyond purely educational purposes.
            <br></br>
            <br></br>
            <br></br>
            <br></br>

          </font>
          <SectionBreak size="XL" visible />
          <br />
          <font face="avenir" color="white" size="2">
            <b>Faculty advisor: &nbsp;</b>
          </font>
          <a href="http://example.com/" className="link" color="white">
            Juan Camilo Serpa
          </a>{" "}
          <font face="avenir" color="white" size="2">
            • <b>Website developed by:</b> Bradley McBain & Brendan Marks
            (McGill Engineering Students) • <b>Content designed by:</b> Ruben
            Alba, Venkatesh Chandra, Jonathan Guzzo, Ramy Hammam, Jessica Zhang,
            Jasmine Jiang, Omar Lafif, Hana Galal, Guillaume Lapierre-Berger,
            Janna Augustin, Bogdan Tanasie, Demi Wei & Katianicia Nafissatou
  
          </font>
        </span>
      </div>
  </Container>
);

export default Footer;
