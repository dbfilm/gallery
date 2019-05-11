import Link from 'next/link';

const linkStyle = {
  marginLeft: 15
};

const Header = () => (
  <div>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/about">
      <a style={linkStyle}>About</a>
    </Link>
    <Link href="/post?id=0">
      <a style={linkStyle}>post</a>
    </Link>
  </div>
);

export default Header;
