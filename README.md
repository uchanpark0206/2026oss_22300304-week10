Project Structure: 주요 파일 2~3개의 역할

    index.html:기존에 사용하던 틀 열할을 함.<div id="root">에 App.jsx를 담을 그릇을 준비함
    main.jsx:App.jsx을 <div id="root">에 담을 수 있도록 도와줌
    App.jsx:실질적으로 우리가 보는 내용을 담고 있음

React Component: 주요 컴포넌트 1~2개의 역할

    ButtonContainer.jsx:계산기에 보이는 정보를 계싼기의 흐름대로 행과 열로 나열해주고 각 기호와 숫자 버튼과 값들을 연결해줌




Code Analysis: 코드 1개(약 5~15줄)를 선택하여 동작 원리 설명

    import { Container, Col, Row } from 'react-bootstrap'는
    low와 col은 부트스트랩에서 지원하는 함수fh 외부 페키지로 사용하면
    행과 열을 구분해주고 간격을 일정하게 해줌 

    function ButtonCustom({ variant, value, onClick }) {
    return (
        <Button type='button' variant={variant} className='fs-1'    onClick={onClick}>{value}</Button>
        );
    }
    을 통해서  ButtonCustom만 쓰면 색상과 한번 클릭하면 어떤 함수가 발동할지 그리고 그 버튼에 들어갈 값만 넣으면 일정한 폰트의  입력한 값이 들어가는 버튼 알아서 생성해줌

    죽
    <Container className='buttonContainer'>
      <Row> 1번행을 생성
        <Col><ButtonCustom variant={'warning'} value={'AC'} onClick={() => clearClick()} /></Col> 
        :1번행에 1번열에 색이 노란색 이름은 ac 한번 클릭하면 clearClick()이라는 함수를 실행하라는 의미가 도미
        <Col><ButtonCustom variant={'warning'} value={'('} onClick={() => buttonClick('(')} /></Col>
        :1번행에 2번열에 색이 노란색 값은 ac 한번 클릭하면 clearClick()이라는 함수를 실행하라는 의미가 됨
        <Col><ButtonCustom variant={'warning'} value={')'} onClick={() => buttonClick(')')} /></Col>
        :1번행에 3번열에 색이 노란색 값은 ) 한번 클릭하면 clearClick()이라는 함수를 실행하라는 의미가 됨
        <Col><ButtonCustom variant={'warning'} value={'÷'} onClick={() => buttonClick('/')} /></Col>
        :1번행에 4번열에 색이 노란색 값은 ÷ 한번 클릭하면 clearClick()이라는 함수를 실행하라는 의미가 됨
      </Row>

     뒤에 부분도 위와 같은 로직으로 작동함(행과 열 색상과 버튼의 값만 달라짐)

수정 파일명과 변경 전 결과

수정 파일명과 변경 후 결과

원본 urlhttps://github.com/alexiscirmi/react-calculator