import { styled } from "@stitches/react";

const Container = styled('main', {
  position: 'relative',
  width: '100rem',
  height: '60rem',
  backgroundColor: 'rgba(255, 255, 255, 0.35)',
  backdropFilter: 'blur(200px)',
  filter: 'blur()',
  boxShadow: '0 3rem 5rem rgba(0, 0, 0, 0.25)',
  borderRadius: '9px',
  overflow: 'hidden',
  display: 'flex',
});

export default Container;
