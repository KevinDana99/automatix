import { CopyIcon, EyeCloseIcon, EyeIcon } from "./../../icons/";
import styled from "styled-components";
const maxWidthFormInDesktop = 500;
export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-height: 500px;
  overflow-x: hidden;
  font-family: "Work Sans", "Noto Sans", sans-serif;
  padding-bottom: 50px;
  box-sizing: border-box;
  background-color: #f8f9fa;
  @media (prefers-color-scheme: dark) {
    background-color: transparent;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 0.5rem;
  justify-content: space-between;
  background-color: #f8f9fa;
  @media (prefers-color-scheme: dark) {
    background-color: transparent;
  }
`;

export const BoxContainer = styled.div`
  width: 100%;
  max-width: ${maxWidthFormInDesktop}px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
`;
export const CloseIcon = styled.div`
  color: #0e141b;
  display: flex;
  align-items: center;
  svg {
    width: 24px;
    height: 24px;
    fill: currentColor;
  }
`;

export const Title = styled.h2`
  color: #0e141b;
  font-size: 1.25rem;
  font-weight: bold;
  text-align: center;
  flex: 1;
  padding-right: 3rem;
`;

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1rem;
  padding: 0.75rem;
`;

export const InputWrapper = styled.label`
  width: 100%;
  display: flex;
  flex-direction: column;
  min-width: 10rem;
  flex: 1;
`;

export const InputGroup = styled.div`
  display: flex;
  width: 100%;
  flex: 1;
  align-items: stretch;
  border-radius: 0.75rem;
  background-color: #e7edf3;
  color: black;
`;

export const InputExtra = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-radius: 0.75rem;
  background-color: #e7edf3;
  color: black;
  padding: 0.7rem;
  box-sizing: border-box;
  color: #0e141b;
`;

export const StyledSelect = styled.select`
  width: 100%;
  border-radius: 0.75rem;
  color: #0e141b;
  background-color: #e7edf3;
  border: none;
  padding: 1rem;
  padding-right: 10px;
  font-size: 1rem;
  font-weight: normal;
  line-height: normal;
  box-sizing: border-box;
  placeholder {
    color: #4e7397;
  }
  &:focus {
    outline: none;
    ring: 0;
  }
`;

export const StyledInput = styled.input`
  color: #4e7397;
  flex: 1;
  border-radius: 0.75rem;
  border: none;
  padding: 1rem;
  font-size: 1rem;
  font-weight: normal;
  line-height: normal;
  placeholder {
    color: #4e7397;
  }
  &:focus {
    outline: none;
    ring: 0;
  }

  background-color: #e7edf3;
  @media (prefers-color-scheme: dark) {
    background-color: transparent;
  }
`;
export const StyledInputExtra = styled(StyledInput)`
  padding: 0.3rem;
  box-sizing: border-box;
`;
export const IconWrapper = styled.div`
  color: #4e7397;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e7edf3;
  border-radius: 0.75rem;
  padding-right: 1rem;
  border-left: 0;
  svg {
    width: 24px;
    height: 24px;
    fill: currentColor;
  }
`;

export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem 1rem;
  min-height: 72px;
  justify-content: space-between;
  background-color: #f8f9fa;
`;

export const LabelContainer = styled.div<{ theme: "light" | "dark" }>`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0rem 1rem;
  justify-content: space-between;
  color: ${({ theme }) =>
    theme === "dark"
      ? `
    background-color: transparent;
  color: #f8f9fa;`
      : `
        background-color: #f8f9fa;
  color: #0e141b;
      `};
`;
export const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: inherit;
`;

export const ItemName = styled.p`
  font-size: 1rem;
  font-weight: medium;
  line-clamp: 1;
`;

export const ItemPrice = styled.p`
  color: #4e7397;
  font-size: 0.875rem;
  font-weight: normal;
  line-clamp: 2;
`;

export const ItemQuantity = styled.div`
  flex-shrink: 0;
  p {
    color: #0e141b;
    font-size: 1rem;
    font-weight: normal;
  }
`;

export const PayButton = styled.button`
  margin-top: 30px;
  display: flex;
  min-width: 300px;
  max-width: 480px;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 0.75rem;
  height: 3rem;
  padding: 0 1.25rem;
  background-color: #1980e6;
  color: #f8f9fa;
  font-size: 1rem;
  text-align: center;
  line-height: normal;
  align-self: center;
  cursor: pointer;
  border: none;
  &:active {
    background-color: #0956a3;
  }
`;
export const PayButtonLink = styled.a`
  margin-top: 30px;
  display: flex;
  min-width: 300px;
  max-width: 480px;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 0.75rem;
  height: 3rem;
  padding: 0 1.25rem;
  background-color: #1980e6;
  color: #f8f9fa;
  font-size: 1rem;
  text-align: center;
  line-height: normal;
  align-self: center;
  cursor: pointer;
  border: none;
  text-decoration: none;
  &:active {
    background-color: #0956a3;
  }
`;
export const LogoContainer = styled.div`
  margin-bottom: 50px;
  display: flex;
  justify-content: center;
`;

export const ContainerButton = styled.div`
  width: 100%;
  padding: 0.75rem;
  position: fixed;
  bottom: 0px;
  background-color: orange;
  display: flex;
  justify-content: center;
`;

export const StyledCopyIcon = styled(CopyIcon)`
  svg {
    color: #4e7397 !important;
    fill: #4e7397 !important;
  }
`;

export const StyledEyeIcon = styled(EyeIcon)`
  ${StyledCopyIcon}
`;
export const StyledEyeCloseIcon = styled(EyeCloseIcon)`
  ${StyledCopyIcon}
`;
