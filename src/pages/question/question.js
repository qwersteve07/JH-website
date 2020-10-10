import React from 'react';
import Container from 'components/container/container';
import Title from 'components/title/title';

const Question = () => {
  const questionData = [
    {
      question: '果糖應用範圍有哪些用途',
      answer: (
        <ul className="list-disc list-inside leading-6">
          <li>飲料：碳酸飲料、果汁、茶飲料、運動飲料、機能性飲料。</li>
          <li>乳製品：調味奶、乳酸飲料、酵乳。</li>
          <li>冰品：冰淇淋、冰棒、雪糕。</li>
          <li>甜點：果凍、布丁。</li>
          <li>烘培食品：麵包、蛋糕。</li>
          <li>其他：醬油、健康食品。</li>
        </ul>
      ),
    },
    {
      question: '麥芽糖應用範圍有哪些用途',
      answer: (
        <ul className="list-disc list-inside leading-6">
          <li>糖果，冰品，果醬，果凍，沙琪瑪，豆餡，口香糖，花生糖，蜜餞，核桃糖。</li>
        </ul>
      ),
    },
    {
      question: '葡萄糖應用範圍有哪些用途',
      answer: (
        <ul className="list-disc list-inside leading-6">
          <li>烘培，餅乾</li>
        </ul>
      ),
    },
  ];
  return (
    <Container>
      <Title>常見問題</Title>
      {questionData.map(({ question, answer }) => {
        return (
          <div className="mb-6">
            <div className="text-2xl font-bold my-3">{question}</div>
            <div>{answer}</div>
          </div>
        );
      })}
    </Container>
  );
};

export default Question;
