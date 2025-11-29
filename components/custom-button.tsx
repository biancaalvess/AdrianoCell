"use client"

import type React from "react"
import styled from "styled-components"

interface CustomButtonProps {
  children: React.ReactNode
  onClick?: () => void
  href?: string
  target?: string
  rel?: string
  variant?: "primary" | "secondary"
}

const CustomButton = ({ children, onClick, href, target, rel, variant = "primary" }: CustomButtonProps) => {
  const content = (
    <StyledWrapper variant={variant}>
      <button className="button" onClick={onClick}>
        <div className="blob1" />
        <div className="blob2" />
        <div className="inner">{children}</div>
      </button>
    </StyledWrapper>
  )

  if (href) {
    return (
      <a href={href} target={target} rel={rel}>
        {content}
      </a>
    )
  }

  return content
}

interface StyledWrapperProps {
  variant: "primary" | "secondary"
}

const StyledWrapper = styled.div<StyledWrapperProps>`
  .button {
    cursor: pointer;
    font-size: 1rem;
    border-radius: 12px;
    border: none;
    padding: 2px;
    background: radial-gradient(
      circle 80px at 80% -10%,
      ${(props) => (props.variant === "primary" ? "#c99420" : "#1a1a1a")},
      #000000
    );
    position: relative;
    display: block;
  }

  .button::after {
    content: '';
    position: absolute;
    width: 65%;
    height: 60%;
    border-radius: 120px;
    top: 0;
    right: 0;
    box-shadow: 0 0 20px
      ${(props) => (props.variant === "primary" ? "rgba(201, 148, 32, 0.3)" : "rgba(201, 148, 32, 0.2)")};
    z-index: -1;
  }

  .blob1 {
    position: absolute;
    width: 70px;
    height: 100%;
    border-radius: 12px;
    bottom: 0;
    left: 0;
    background: radial-gradient(
      circle 60px at 0% 100%,
      ${(props) => (props.variant === "primary" ? "rgba(201, 148, 32, 0.3)" : "rgba(201, 148, 32, 0.15)")},
      transparent
    );
    box-shadow: -10px 10px 30px
      ${(props) => (props.variant === "primary" ? "rgba(201, 148, 32, 0.2)" : "rgba(201, 148, 32, 0.1)")};
  }

  .inner {
    padding: 12px 24px;
    border-radius: 10px;
    color: ${(props) => (props.variant === "primary" ? "#000000" : "#c99420")};
    z-index: 3;
    position: relative;
    background: radial-gradient(
      circle 80px at 80% -50%,
      ${(props) => (props.variant === "primary" ? "#c99420" : "rgba(201, 148, 32, 0.1)")},
      ${(props) => (props.variant === "primary" ? "#a67c1f" : "#000000")}
    );
    font-weight: bold;
    text-align: center;
  }

  .inner::before {
    content: '';
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    border-radius: 10px;
    background: radial-gradient(
      circle 60px at 0% 100%,
      ${(props) => (props.variant === "primary" ? "rgba(255, 255, 255, 0.1)" : "rgba(201, 148, 32, 0.05)")},
      transparent
    );
    position: absolute;
  }

  a {
    text-decoration: none;
  }
`

export default CustomButton
