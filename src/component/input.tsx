import styled from "@emotion/styled";
import debounce from "lodash/debounce";
import { ChangeEvent } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";

interface IProps {
  defaultValue?: string;
}

export const Input = (props: IProps) => {
  const navigate = useNavigate();

  // Записывает значение в query как только пользователь перестает печатать
  const onChange = debounce((value: ChangeEvent<HTMLInputElement>) => {
    navigate({
      pathname: "/",
      search: createSearchParams({
        searchString: value.target?.value,
      }).toString(),
    });
  }, 500);

  return (
    <InputContainer>
      <CustomInput defaultValue={props.defaultValue} onChange={onChange} />
    </InputContainer>
  );
};

export const InputContainer = styled.div`
  display: flex;
  height: fit-content;
  justify-content: center;
  width: 100%;

  margin-top: 48px;

  @media screen and (max-width: 1199px) {
    margin-top: 24px;
  }

  @media screen and (max-width: 767px) {
    margin-top: 16px;
  }
`;

export const CustomInput = styled.input`
  border: 1px solid ${({ theme }: any) => theme.colors.white};
  background-color: ${({ theme }: any) => theme.colors.black};
  color: ${({ theme }: any) => theme.colors.white};
  border-radius: 8px;
  padding: 16px 24px;
  font-size: 16px;

  width: 80vw;

  @media screen and (max-width: 1199px) {
    padding: 12px 16px;
  }

  @media screen and (max-width: 767px) {
    border-radius: 4px;
  }
`;
