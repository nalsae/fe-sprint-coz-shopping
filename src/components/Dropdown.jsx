import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import productsList from 'assets/productsList.svg';
import bookmark from 'assets/bookmark.svg';

function Dropdown() {
  return (
    <DropdownWrapper>
      <WelcomeText>김민석님, 안녕하세요!</WelcomeText>
      <LinkToProductsList to="/products/list">
        상품리스트 페이지
      </LinkToProductsList>
      <LinkToBookmark to="/bookmark">북마크 페이지</LinkToBookmark>
    </DropdownWrapper>
  );
}

const LINK_STYLE = css`
  display: flex;
  align-items: center;
  width: 200px;
  height: 50px;
  padding-left: 54px;
  background-position: 26px 15px;
`;

const DropdownWrapper = styled.nav`
  position: absolute;
  top: 70px;
  right: -44px;
  width: 200px;
  display: flex;
  flex-flow: column wrap;
  height: 150px;
  border-radius: 12px;
  background-color: #ffffff;
  font-size: 16px;
  box-shadow: 0px 8px 8px 0px #0000001a;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 130px;
    width: 0;
    height: 0;
    border-left: 9px solid transparent;
    border-right: 9px solid transparent;
    border-bottom: 18px solid transparent;
    border-bottom-color: #ffffff;
    border-top: 0;
    margin-top: -18px;
  }
`;

const WelcomeText = styled.p`
  padding: 13px 0;
  text-align: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const LinkToProductsList = styled(Link)`
  background: no-repeat url(${productsList});
  ${LINK_STYLE};
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const LinkToBookmark = styled(Link)`
  background: no-repeat url(${bookmark});
  ${LINK_STYLE};
`;

export default Dropdown;
