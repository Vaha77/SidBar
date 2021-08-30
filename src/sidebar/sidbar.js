import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background: #e5e5e5;
`;

export const Sidbar = styled.div`
  display: flex;
  flex-direction: column;
  width: 260px;
  height: 100vh;
  background: #ffffff;
  padding-bottom: 20px;
`;

export const Title = styled.div`
  margin: 17px 24px;
  font-weight: 600;
  font-size: 23px;
  line-height: 25px;
  color: #109cf1;
`;

export const TitleWrapper = styled.div`
  display: flex;
  margin: 24px;
`;
export const SidbarImg = styled.img`
  border-radius: 50%;
  width: 67px;
  height: 67px;
  color: ${(props) => (props.isActive ? "#109CF1;" : " #334D6E;")};
`;

export const Text = styled.div`
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  color: #192a3e;
`;

export const TextWreppr = styled.div`
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 11px;
  line-height: 16px;
  letter-spacing: 0.01em;
  color: #90a0b7;
`;

export const Item = styled.div`
  display: flex;
  margin: 0 24px 0 24px;
  margin-bottom: 20px;
`;

export const Menu = styled.img`
  width: 20px;
  height: 20px;
  padding-right: 17px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: red;
`;

export const ItemText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  letter-spacing: 0.01em;
  color: ${(props) => (props.isActive ? "#109CF1;" : " #334D6E;")};
  cursor: pointer;
`;

export const ItemWrepper = styled.div`
  display: flex;
  margin-top: auto;
  padding-left: 24px;
`;

export const ItemTextWreppee = styled.div`
  display: flex;
  padding: 24px;
`;
