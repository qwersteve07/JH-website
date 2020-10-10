import React from 'react';
import Container from 'components/container/container';
import Title from 'components/title/title';
import fructose from 'images/fructose.jpg';
import crystallineGlucose from 'images/crystalline-glucose.jpg';
import maltose75p from 'images/maltose-75.jpg';
import maltose85p25kg from 'images/maltose-85-25.jpg';
import maltose85p30kg from 'images/maltose-85-30.jpg';
import maltose from 'images/maltose.jpg';
import powderedGlucose from 'images/powdered-glucose.jpg';
import refinedGlucose from 'images/refined-glucose.jpg';
import sucrose from 'images/sucrose.jpg';

const About = () => {
  const productsData = [
    {
      name: '果糖',
      weight: '25 kg',
      image: fructose,
      content: (
        <ul className="list-disc list-inside leading-6">
          <h3>廣範應用於</h3>
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
      name: '蔗糖',
      weight: '25 kg',
      image: sucrose,
      content: <h3>待補</h3>,
    },

    {
      name: '麥芽糖漿',
      weight: '25 kg',
      image: maltose,
      content: <h3>待補</h3>,
    },
    {
      name: '精緻葡萄糖',
      weight: '20 kg',
      image: refinedGlucose,
      content: <h3>廣範應用於烘焙及餅乾。</h3>,
    },
    {
      name: '特級結晶葡萄糖',
      weight: '20 kg',
      image: crystallineGlucose,
      content: <h3>待補</h3>,
    },
    {
      name: '粉末葡萄糖',
      weight: '20 kg',
      image: powderedGlucose,
      content: <h3>待補</h3>,
    },
    {
      name: '75%麥芽糖漿',
      weight: '30 kg',
      image: maltose75p,
      content: <h3>廣範應用於糖果，冰品，果醬，果凍，沙琪瑪，豆餡，口香糖，花生糖，蜜餞，核桃糖。</h3>,
    },
    {
      name: '85%麥芽糖漿',
      weight: '30 kg',
      image: maltose85p30kg,
      content: <h3>廣範應用於糖果，冰品，果醬，果凍，沙琪瑪，豆餡，口香糖，花生糖，蜜餞，核桃糖</h3>,
    },
    {
      name: '85%麥芽糖漿',
      weight: '25 kg',
      image: maltose85p25kg,
      content: <h3>待補</h3>,
    },
  ];
  return (
    <Container>
      <Title>產品介紹</Title>
      <div className="grid grid-cols-3 gap-4 my-8">
        {productsData.map(({ name, weight, image, content }) => {
          return (
            <div className="rounded-lg shadow-xs overflow-hidden p-6">
              <img src={image} alt="product" />
              <div className="flex justify-between items-center">
                <div className="text-2xl font-bold my-3">{name}</div>
                <div className="bg-gray-200 px-3 py-1 rounded-full">{weight}</div>
              </div>
              <div className="">{content}</div>
              <div className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-5 cursor-pointer text-center">
                加入詢價
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default About;
