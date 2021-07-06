import React, { ReactElement } from 'react';
import { Box } from 'rebass/styled-components';
import styled from 'ui/themes/styled';
import media from 'styled-media-query';
import { ChevronLeft } from 'react-feather';
import { NavLink, useHistory } from 'react-router-dom';
import { Burger, Menu } from 'ui/modules/Burger';
import Avatar from 'ui/elements/Avatar';
import { Image } from 'rebass';
import { logo_small_url } from 'mn-constants';

export interface SidebarProps {
  SidebarBox: ReactElement;
  HeaderBox: ReactElement;
  SearchBox: ReactElement;
  userImage: string;
  userLink: string;
  username: string;
  name: string;
  signout(): any;
}

export const WithSidebar: React.FC<SidebarProps> = ({
  SidebarBox,
  HeaderBox,
  SearchBox,
  children,
  userImage,
  userLink,
  username,
  name,
  signout
}) => {
  const [open, setOpen] = React.useState(false);
  const history = useHistory();
  return (
    <Page>
      <SearchBar>
        <Icon onClick={() => history.goBack()}>
          <ChevronLeft size="20" />
        </Icon>
        {SearchBox}
      </SearchBar>
      <Header>{HeaderBox}</Header>
      <Wrapper>
        <Panel className="panel_sidebar">
          <Sidebar>{SidebarBox}</Sidebar>
        </Panel>
        <Panel>
          <Content>{children}</Content>
        </Panel>
      </Wrapper>
      <Footer>
        <FootWrapper>
          <Burger open={open} setOpen={setOpen} />
          <Menu
            username={username}
            name={name}
            userImage={userImage}
            signout={signout}
            open={open}
            setOpen={setOpen}
            Side={SidebarBox}
          />
        </FootWrapper>
        <FootWrapper>
          <NavLink to="/">
            <Logo>
              <Image src={logo_small_url} />
            </Logo>
            {/* <Home size="18" /> */}
          </NavLink>
        </FootWrapper>
        <FootWrapper>
          <Bavatar>
            <NavLink to={userLink}>
              <Avatar src={userImage} size="m" />
            </NavLink>
          </Bavatar>
        </FootWrapper>
      </Footer>
    </Page>
  );
};

const Logo = styled(Box)`
  img {
    width: 36px;
    height: 36px;
    border-radius: 36px;
    margin-top: 15px;
  }
`;

const Bavatar = styled(Box)`
  div {
    max-width: 36px;
    height: 36px;
    min-width: 36px;
    margin: 0 auto;
    border-radius: 36px;
    margin-top: 15px;
  }
`;

export const Icon = styled(Box)`
  cursor: pointer;
  height: 40px;
  width: 40px;
  min-width: 40px;
  border-radius: 40px;
  margin-top: 5px;
  display: flex;
  align-items: center;
  &:hover {
    background: ${props => props.theme.colors.lighter};
    svg {
      stroke: ${props => props.theme.colors.primary};
    }
  }
  svg {
    stroke: ${props => props.theme.colors.mediumdark};
    margin: 0 auto;
  }
`;

const SearchBar = styled(Box)`
height: 75px;
line-height: 75px;
text-align: center;
background: ${props => props.theme.colors.appInverse}
border-bottom: ${props => props.theme.colors.border};
display: flex;
align-items: center;
input {
  width: 100%;
  border-radius: 4px;
  max-width: 500px;
  height: 40px;
  margin: 0;
  border: 0;
  background: ${props => props.theme.colors.app};
}
.ais-SearchBox {
  border: 0;
  height: auto;
  margin: 0;
  width: auto;
  margin: 0;
  margin-right: 24px;
  flex:1;
}
${media.greaterThan('medium')`
    display: none;
  `}
`;

const FootWrapper = styled(Box)`
  height: 75px;
  line-height: 75px;
  text-align: center;
`;

const Footer = styled(Box)`
  background: ${props => props.theme.colors.appInverse}
  display: grid;
  border-top: ${props => props.theme.colors.border};
  grid-template-columns: 1fr 1fr 1fr;
  ${media.greaterThan('medium')`
    display: none;
  `}

`;

const Panel = styled(Box)`
  display: grid;
  grid-template-rows: auto;
  height: calc(100vh - 58px);
  &.panel_sidebar {
    ${media.lessThan('medium')`
    display: none;
  `}
  }
  ${media.lessThan('medium')`
  height: calc(100vh - 75px);
  `}
`;

const Page = styled(Box)`
  height: 100vh;
  display: grid;
  ${media.greaterThan('large')`
    grid-template-rows: 50px auto;
    row-gap: 8px;
  `}
  ${media.lessThan('medium')`
    grid-template-rows: 75px 1fr 75px;
  `}
`;

const Wrapper = styled(Box)`
  max-width: 1096px;
  margin: 0 auto;
  display: grid;
  
  ${media.greaterThan('medium')`
  grid-template-rows: auto;
  grid-template-columns: 240px 1fr;
  column-gap: 8px;
  height: calc(100vh - 66px);
  `}
  ${media.lessThan('medium')`
    height: calc(100vh - 150px);
    overflow: overlay;
    grid-template-rows: auto;
    grid-template-columns:1fr;
    column-gap: 0px;
    margin: 0;
  `}
  ${media.lessThan('small')`
    grid-template-rows: auto;
    grid-template-columns:1fr;
    column-gap: 0px;
    margin: 0;
  `}
`;

const Sidebar = styled(Box)`
  overflow: auto;
`;

const Content = styled(Box)`
  // Enable to put the right side scrollbar next to the content
  //overflow: auto;
`;

const Header = styled(Box)`
  ${media.lessThan('medium')`
    display: none;
  `}
`;
