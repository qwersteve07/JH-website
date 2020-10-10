import React from 'react';
import Container from 'components/container/container';
import Title from 'components/title/title';
import { Link } from 'react-router-dom';
import { PATH } from 'config/config';

const About = () => {
  return (
    <Container>
      <Title>關於我們</Title>
      <p className="my-8">
        本公司以『天然健康、安全衛生、誠信踏實、以客為尊』為經營方針，秉持專業誠信的態度，結合多方客製化產品，與客戶攜手追求永續經營的理念。有效地提升產能，並嚴格控管產品生產之品質及各項服務工作，以回饋廣大客戶的期望及消費者的支持與愛護。
        <br />
        展望未來，公司對外堅持高品質與服務，對內健全與專業的組織結構，營造和諧成長的公司文化，使公司與客戶一同邁向產業頂端。
      </p>
      <ul className="list-disc list-inside my-8 leading-6">
        <li>【經營理念】天然健康、安全衛生、誠信踏實、以客為尊</li>
        <li>【食品安全政策】品質至上、安全第一、價格公道、服務周到</li>
        <li>
          【未來展望】秉持精益求精，努力不懈的創業精神努力做好各項產品的生產及各項服務工作，以回饋廣大的客戶及消費者的支持與愛護。
        </li>
      </ul>
      <ul className="list-disc list-inside my-8 leading-6">
        <h3 className="text-xl font-bold">公司資訊</h3>
        <li>設立日期 - 西元1977年10月12日</li>
        <li>負責人 - 董事長 李正峰先生</li>
        <li>公司地址 - 台南市麻豆區麻口里麻豆口32之2號</li>
        <li>工廠地址 - 台南市麻豆區麻口里麻豆口32之2號</li>
        <li>公司電話 - (06)570-1126、27、28</li>
        <li>公司傳真 - (06)570-0242</li>
        <li>工廠佔地 - 工廠佔地面積約13000平方米(4000坪)，廠房約9000平方米(2800坪)，年總產能40000噸</li>
      </ul>

      <ul className="list-disc list-inside my-8 leading-6">
        <h3 className="text-xl font-bold">主要產品</h3>
        <li>果糖</li>
        <li>葡萄糖(粉末.精製.結晶)</li>
        <li>麥芽糖(75%及85%)</li>
        <li>轉化液糖</li>
        <Link to={PATH.PRODUCT}>點我查看產品內容</Link>
      </ul>

      <ul className="list-disc list-inside my-8 leading-6">
        <h3 className="text-xl font-bold">歷屆董事長</h3>
        <li>1977年，王輝陽先生上任 第一任董事長</li>
        <li>1977年，李泰山先生上任 第二任董事長</li>
        <li>1977年，黃耀欽先生上任 第三任董事長</li>
        <li>2010年，李正峰先生上任 現任董事長</li>
      </ul>
      <ul className="list-disc list-inside my-8 leading-6">
        <h3 className="text-xl font-bold">歷史沿革</h3>
        <span>前身為信隆興企業，由本公司第一任董事長─王揮陽先生於1969年創立，1971年11月開始生產營運。</span>
        <li>於2012年通過ISO 22000認證，以及導入HACCP食品安全危害分析管制系統。</li>
        <li>擴展食品在市場的通路及服務更多的消費族群，於2015年8月通過清真認證。</li>
        <li>2016年由『晉弘化學工業股份有限公司』，更名為『晉弘實業股份有限公司』。</li>
        <li>2018年ISO 22000系統從2005年版改為2018年版，本公司於2020年08月25日通過ISO 22000轉版驗證。</li>
      </ul>
    </Container>
  );
};

export default About;
