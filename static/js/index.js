const app = () => {
  const socket = io('http://localhost:3000');
  const msgInput = document.querySelector('.message-input');
  const msgList = document.querySelector('.messages-list');
  const sendBtn = document.querySelector('.send-btn');
  const usernameInput = document.querySelector('.username-input');
  const messages = [];

  const getMessages = async () => {
    try {
      const { data } = await axios.get('http://localhost:3000');

      console.log(data);

      data.forEach((item) => messages.push(item));
    } catch (error) {
      console.log(error.message);
    }
  };

  getMessages();
};

app();
