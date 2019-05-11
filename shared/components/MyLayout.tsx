import styled from 'styled-components';

import Header from './Header';

const LayoutStyle = styled.div`
  margin: 20px;
  padding: 20px;
  border: 1px solid #ddd;
`;

const Layout = (props: any) => (
  <LayoutStyle>
    <Header />
    {props.children}
  </LayoutStyle>
);

export default Layout;
