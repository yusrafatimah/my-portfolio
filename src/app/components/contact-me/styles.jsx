import { Box, styled } from '@mui/material';

export const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;

  // @media (max-width: 960px) {
  //   padding: 0px;
  // }
`;

export const Wrapper = styled(Box)`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 0px 0px 100px 0px;
  gap: 12px;
  // @media (max-width: 960px) {
  //   flex-direction: column;
  // }
`;

export const Title = styled(Box)`
  font-size: 46px;
  text-align: center;
  font-weight: 600;
  margin: 0 0 30px 0;
  color: ${({ theme }) => theme.palette.text.primary};
  // @media (max-width: 768px) {
  //   margin-top: 12px;
  //   font-size: 32px;
  // }
`;

export const ContactForm = styled(Box)`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.palette.background.secondary};
  padding: 32px;
  border-radius: 16px;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  margin-top: 28px;
  gap: 12px;
`;

export const ContactInput = styled('input')`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.palette.text.primary};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.palette.text.primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.palette.text.secondary};
  }
  &::placeholder {
    color: white;
    font-size: 16px;
  }
`;

export const ContactInputMessage = styled('textarea')`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.palette.text.primary};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.palette.text.primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.palette.text.secondary};
  }
  &::placeholder {
    color: white;
    font-size: 16px;
  }
`;

export const ContactButton = styled('input')`
  width: 140px;
  height: 40px;
  text-decoration: none;
  text-align: center;
  cursor: pointer;
  background-color: transparent;
  margin-top: 2px;
  border-radius: 50px;
  border: 1.5px solid ${({ theme }) => theme.palette.text.primary};
  color: white;
  font-size: 18px;
  font-weight: 600;
  margin: 30px auto 0 auto;
`;
