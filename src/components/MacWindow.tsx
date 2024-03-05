import styled from '@emotion/styled';

const BUTTON_COLORS = ['#FF605C', '#FFBD44', '#00CA4E'];

export default function MacWindow() {
  return (
    <>
      <MacWindowContainer>
        <MacWindowTitleBar>
          <ButtonContainer>
            {BUTTON_COLORS.map((color) => <CircleButton key={color} color={color} />)}
          </ButtonContainer>
          <MacWindowTitle>fluid-gradient</MacWindowTitle>
        </MacWindowTitleBar>
        <FluidGradientContainer></FluidGradientContainer>
      </MacWindowContainer>
    </>
  );
}

const MacWindowContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  height: 500px;
  width: 70vw;
  background-color: rgb(255,255,255);
  border-radius: 10px;
  border: solid 0.5px #a1a1a176;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
`;

const MacWindowTitleBar = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  align-items: center;
  height: 30px;
  width: inherit;
  background-color: #eeeeee;
  border-radius: 10px 10px 0 0;
  
`

const ButtonContainer = styled.div`
  display: flex;
  gap: 8px;
  margin-left: 10px;
`

const CircleButton = styled.div`
  height:12px;
  width:12px;
  border-radius: 50%;
  background-color: ${props => props.color};
  border: solid 0.5px #a1a1a181;
`;

const MacWindowTitle = styled.p`
  position: absolute;
  left: 50%; 
  transform: translateX(-50%);
  margin: 0;
  font-family: "Fira Code", monospace;
  font-size: 12px;
`

const FluidGradientContainer = styled.div`
  height: 430px;
  width: 64vw;
  background-color: blue;
  margin: 20px auto;
  border-radius: 10px;
`