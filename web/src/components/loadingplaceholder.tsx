import styled from 'styled-components';

export default styled.div`
  background: transparent
    url(${
      // @ts-expect-error TS(2304): Cannot find name 'resolvePath'.
      resolvePath('images/electricitymap-loading-icon.svg')
    })
    no-repeat center center;
  background-size: 2rem;
  display: inline-block;
  height: ${(props) => props.height || '100%'};
  width: 100%;
`;
