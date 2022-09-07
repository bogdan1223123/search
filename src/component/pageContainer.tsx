import styled from "@emotion/styled";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }: any) => theme.colors.black};
  min-height: 100vh;

  padding: 0 10vw;
`;
