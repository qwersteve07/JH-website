import React from 'react';
import Container from 'components/container/container';
import Title from 'components/title/title';

const Contact = () => {
  return (
    <Container>
      <Title>聯絡我們</Title>
      <p className="my-6">
        親愛的客戶、瀏覽者您好：您可以在此填寫聯絡資訊。我們在收到您的留言訊息後會儘速請專員主動與您聯繫，謝謝您！
      </p>
      <form className="my-10">
        <div className="my-4 flex max-w-lg flex items-center ">
          <label className="mr-4" for="name">
            姓名
          </label>
          <input
            className="flex-1 appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="請輸入姓名"
          />
        </div>
        <div className="my-4 flex max-w-lg flex items-center ">
          <label className="mr-4" for="phone">
            電話
          </label>
          <input
            className="flex-1 appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
            id="phone"
            type="tel"
            placeholder="請輸入電話"
          />
        </div>
        <div className="my-4 flex max-w-lg flex items-center">
          <label className="mr-4" for="address">
            地址
          </label>
          <input
            className="flex-1 appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
            id="address"
            type="text"
            placeholder="請輸入地址"
          />
        </div>
        <div className="my-4 flex max-w-lg flex items-center">
          <label className="mr-4" for="mail">
            信箱
          </label>
          <input
            className="flex-1 appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
            id="mail"
            type="email"
            placeholder="請輸入信箱"
          />
        </div>
        <div className="my-4 max-w-lg">
          <label className="block mb-3" for="ask">
            諮詢內容
          </label>
          <textarea
            className="h-48 flex-1 appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
            id="ask"
            placeholder="請輸入諮詢內容"
          />
        </div>
        <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded cursor-pointer text-center">
          送出
        </button>
      </form>
    </Container>
  );
};

export default Contact;
