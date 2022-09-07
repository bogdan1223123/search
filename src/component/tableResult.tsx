import styled from "@emotion/styled";

interface IProps {
  data: string[];
}

export const TableResult = (props: IProps) => {
  return (
    <Container>
      <Title>Количество результатов: {props.data.length}</Title>
      <Table>
        {props.data.map((elem) => (
          <Row key={elem}>{elem}</Row>
        ))}
      </Table>
    </Container>
  );
};

const Container = styled.div``;

const Title = styled.h3`
  margin: 8px 0 24px 0;
  font-size: 12px;
  color: ${({ theme }: any) => theme.colors.white};
  text-transform: uppercase;

  @media screen and (max-width: 767px) {
    font-size: 12px;
  }
`;

const Table = styled.p`
  display: flex;
  flex-direction: column;
`;

const Row = styled.span`
  color: ${({ theme }: any) => theme.colors.white};
  font-size: 16px;
  border-bottom: 1px solid ${({ theme }: any) => theme.colors.white};
  padding: 8px 0;

  margin-bottom: 10px;
  cursor: pointer;

  &:hover {
    color: ${({ theme }: any) => theme.colors.primary};
    border-bottom: 1px solid ${({ theme }: any) => theme.colors.primary};
  }
`;
