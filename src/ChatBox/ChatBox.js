import React, { useState } from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import { FaComments } from 'react-icons/fa';
import './Chatbox.css';

const steps = [
  {
    id: '0',
    message: 'Hey Conscious!',
    trigger: '1',
  },
  {
    id: '1',
    message: 'Please enter your username:',
    trigger: '2',
  },
  {
    id: '2',
    user: true,
    trigger: '3',
  },
  {
    id: '3',
    message: "Hi {previousValue}! How can I help you?",
    trigger: '4',
  },
  {
    id: '4',
    options: [
      {
        value: 'googleForms',
        label: 'View Google Forms',
        trigger: 'viewGoogleForms',
      },
      {
        value: 'todayILearned',
        label: 'Today I Learned Chart',
        trigger: 'todayILearned',
      },
    ],
  },
  {
    id: 'viewGoogleForms',
    component: <a href="https://docs.google.com/forms/d/e/1FAIpQLSch9o-Ca0FkMJB0WA9RUk-uYLTbB8w3D3_gs8oUPxaaFSELkg/viewform?embedded=true&pli=1">Click here to view Google Forms</a>,
    end: true,
  },
  {
    id: 'todayILearned',
    component: <a href="/today-i-learned">Check out Today I Learned Chart</a>,
    end: true,
  },
];

const theme = {
  background: 'black',
  headerBgColor: 'grey',
  headerFontSize: '15px',
  botBubbleColor: 'black',
  headerFontColor: 'white',
  botFontColor: 'white',
  userBubbleColor: 'black',
  userFontColor: 'white',
};

const config = {
  floating: false,
};

function ChatBox() {
  const [isOpen, setIsOpen] = useState(false);
  const [rendered, setRendered] = useState(false);

  const toggleChatbot = () => {
    setIsOpen(true);
    setRendered(true);
  };

  return (
    <div className="chatbox-container">
      <ThemeProvider theme={theme}>
        {isOpen && rendered && (
          <div className="chatbox-dialog">
            <ChatBot
              headerTitle="Hyper Verge"
              steps={steps}
              {...config}
            />
          </div>
        )}
        <button className="chatbox-toggle" onClick={toggleChatbot}>
          <FaComments />
        </button>
      </ThemeProvider>
    </div>
  );
}

export default ChatBox;