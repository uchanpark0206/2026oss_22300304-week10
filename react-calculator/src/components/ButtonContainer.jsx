import { Container, Col, Row } from 'react-bootstrap'
import ButtonCustom from './ButtonCustom';
import { CalcContext } from '../context/calcContext';
import { useContext } from 'react';

function ButtonContainer() {

  const { buttonClick, equalClick, clearClick } = useContext(CalcContext)

  return (
    <Container className='buttonContainer'>
      <Row>
        <Col><ButtonCustom variant={'light'} value={'cl'} onClick={() => clearClick()} /></Col>
        <Col><ButtonCustom variant={'light'} value={'{'} onClick={() => buttonClick('{')} /></Col>
        <Col><ButtonCustom variant={'light'} value={'}'} onClick={() => buttonClick('}')} /></Col>
        <Col><ButtonCustom variant={'light'} value={'÷'} onClick={() => buttonClick('/')} /></Col>
      </Row>

      <Row>
        <Col><ButtonCustom variant={'dark'} value={'칠'} onClick={() => buttonClick('7')} /></Col>
        <Col><ButtonCustom variant={'dark'} value={'팔'} onClick={() => buttonClick('8')} /></Col>
        <Col><ButtonCustom variant={'dark'} value={'구'} onClick={() => buttonClick('9')} /></Col>
        <Col><ButtonCustom variant={'light'} value={'X'} onClick={() => buttonClick('*')} /></Col>
      </Row>

      <Row>
        <Col><ButtonCustom variant={'dark'} value={'사'} onClick={() => buttonClick('4')} /></Col>
        <Col><ButtonCustom variant={'dark'} value={'오'} onClick={() => buttonClick('5')} /></Col>
        <Col><ButtonCustom variant={'dark'} value={'육'} onClick={() => buttonClick('6')} /></Col>
        <Col><ButtonCustom variant={'light'} value={'-'} onClick={() => buttonClick('-')} /></Col>
      </Row>

      <Row>
        <Col><ButtonCustom variant={'dark'} value={'일'} onClick={() => buttonClick('1')} /></Col>
        <Col><ButtonCustom variant={'dark'} value={'이'} onClick={() => buttonClick('2')} /></Col>
        <Col><ButtonCustom variant={'dark'} value={'삼'} onClick={() => buttonClick('3')} /></Col>
        <Col><ButtonCustom variant={'warning'} value={'+'} onClick={() => buttonClick('+')} /></Col>
      </Row>

      <Row>
        <Col><ButtonCustom variant={'dark'} value={'영'} onClick={() => buttonClick('0')} /></Col>
        <Col><ButtonCustom variant={'light'} value={'.'} onClick={() => buttonClick('.')} /></Col>
        <Col><ButtonCustom variant={'light'} value={'%'} onClick={() => buttonClick('%')} /></Col>
        <Col><ButtonCustom variant={'light'} value={'='} onClick={() => equalClick()} /></Col>
      </Row>

    </Container>
  );
}

export default ButtonContainer