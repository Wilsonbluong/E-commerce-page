import React from "react";
import FooterSignUpForm from "../FooterSignUpForm";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

import {
  FooterContainer,
  FooterLinksContainer,
  FooterLinkItems,
  FooterLink,
  FooterLinkTitle,
  FooterStoreFinder,
  Form,
  FormInput,
  SocialIconLink,
  SocialMediaWrap,
  SocialIcons,
  Download,
  DownloadImgs,
  FooterPrivacy,
  FooterRights,
} from "./styles/Footer";

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterLinksContainer>
          <FooterLinkItems>
            <FooterLinkTitle>ACCOUNT & SERVICES</FooterLinkTitle>
            <FooterLink to="/sign-up">My Account</FooterLink>
            <FooterLink to="/">Join PacSun Rewards</FooterLink>
            <FooterLink to="/">Styled by PacSun</FooterLink>
            <FooterLink to="/">Gift Cards</FooterLink>
            <FooterLink to="/">Afterpay</FooterLink>
            <FooterLink to="/">Coupons & Promotions</FooterLink>
            <FooterLink to="/">Student Discount</FooterLink>
            <FooterLink to="/">FAQs</FooterLink>
            <FooterLink to="/">Contact Us</FooterLink>
            <FooterLink to="/">Returns & Exchanges</FooterLink>
            <FooterLink to="/">Order Status</FooterLink>
            <FooterLink to="/">International Shipping</FooterLink>
          </FooterLinkItems>
          <FooterLinkItems>
            <FooterLinkTitle>COMPANY INFO</FooterLinkTitle>
            <FooterLink to="/">About Us</FooterLink>
            <FooterLink to="/">Store Locator</FooterLink>
            <FooterLink to="/">Careers</FooterLink>
            <FooterLink to="/">Social Responsibility</FooterLink>
            <FooterLink to="/">California Supply Chains Act</FooterLink>
            <FooterLink to="/">Privacy & Cookie Policy</FooterLink>
            <FooterLink to="/">Terms of USe</FooterLink>
            <FooterLink to="/">Affiliate Program</FooterLink>
            <FooterLink to="/">Site Map</FooterLink>
            <FooterLink to="/">Accessibility</FooterLink>
          </FooterLinkItems>
        </FooterLinksContainer>
        <FooterStoreFinder>
          <FooterLinkTitle>find a store</FooterLinkTitle>
          <Form>
            <FormInput name="text" type="text" placeholder="Enter Zip Code" />
          </Form>
        </FooterStoreFinder>
        <FooterSignUpForm />
        <SocialMediaWrap>
          <FooterLinkTitle>connect with us</FooterLinkTitle>
          <SocialIcons>
            <SocialIconLink href="/" target="_blank" aria-label="Facebook">
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink href="/" target="_blank" aria-label="Instagram">
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink href={"/"} target="_blank" aria-label="Youtube">
              <FaYoutube />
            </SocialIconLink>
            <SocialIconLink href="/" target="_blank" aria-label="Twitter">
              <FaTwitter />
            </SocialIconLink>
            <SocialIconLink href="/" target="_blank" aria-label="LinkedIn">
              <FaLinkedin />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
        <Download>
          <FooterLinkTitle>download the app</FooterLinkTitle>
          <DownloadImgs>
            <img src="./images/apple.svg" alt="" />
            <img src="./images/google.svg" alt="" />
          </DownloadImgs>
        </Download>
        <FooterPrivacy>
          Information for California Residents: Visit the Privacy Policy for
          details regarding the categories of personal information collected
          through this website and the business and commercial purpose(s) for
          which the information will be used.
        </FooterPrivacy>
        <FooterRights>
          ©2021 Pacific Sunwear of California, LLC. All rights reserved.
        </FooterRights>
      </FooterContainer>
    </>
  );
};

export default Footer;
