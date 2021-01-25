import styled from 'styled-components'
import db from '../db.json';
import Widget from '../src/components/Widget/index.js';
import QuizBackground from '../src/components/QuizBackGround/index';
import Footer from '../src/components/Footer/index';
import GitHubCorner from '../src/components/GitHubCorner/index';


/*const BackgroundImages = styled.div`
background-image: url(${db.bg});
flex: 1;
background-size: cover;
background-position: center;
`;*/

export const QuizContainer = styled.div`
width: 100%;
max-width: 350px;
padding-top: 45px;
margin: auto 10%;
@media screen and (max-width: 500px) {
  margin: auto;
  padding: 15px;
}
`;



export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>Star Wars</h1>
          </Widget.Header>

          <Widget.Content>
            <p>Quiz sobre Guerra nas Estrelas</p>
          </Widget.Content>

        </Widget>
        <Widget>
          <Widget.Header>
            <h1>Quiz da Galera</h1>
          </Widget.Header>

          <Widget.Content>
            <p>Vamos Responder?</p>
          </Widget.Content>

        </Widget>
        <Footer />
      </QuizContainer>
     <GitHubCorner projectUrl="https://github.com/zolthan31"/>
    </QuizBackground>
  );
};
