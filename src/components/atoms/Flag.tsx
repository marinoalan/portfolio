import styled from "styled-components";

const CountryFlag = styled.span`
  white-space: nowrap;
`;

const FlagSpan = styled.span`
  @media (prefers-color-scheme: dark) {
    -webkit-background-clip: text !important;
    -webkit-text-fill-color: transparent;
  }
`;

const ArgentinaFlagText = styled(FlagSpan)`
  @media (prefers-color-scheme: dark) {
    background: radial-gradient(circle at center, white, #73abde 50%);
  }
`;

const ItalianFlagText = styled(FlagSpan)`
  @media (prefers-color-scheme: dark) {
    background: linear-gradient(to right, #0c9246, #ffffff, #c32e29);
  }
`;

const ArgentinianFlag = () => (
  <CountryFlag>
    <ArgentinaFlagText>Argentinian</ArgentinaFlagText> 🇦🇷
  </CountryFlag>
);

const ItalianFlag = () => (
  <CountryFlag>
    <ItalianFlagText>Italy</ItalianFlagText> 🇮🇹
  </CountryFlag>
);

export { ArgentinianFlag, ItalianFlag };
