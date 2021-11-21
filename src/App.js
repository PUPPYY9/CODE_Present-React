import './App.css';
import Graph_Line from './GraphLine';
import Graph_His from './GraphHis';
import axios from 'axios';
import React, { useState, Button } from 'react'
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import 'antd/dist/antd.css';

//import { Text, TouchableOpacity } from 'react-native';

// function App() {

//   const [collapseds, setCollapsed] = useState(false);
//   const [content, setcontent] = useState(<div></div>);
//   const [image, setImage] = useState("")

//   const toggle = () => {
//     setCollapsed(!collapseds);
//   };
//   return (
//     //   <div className="App">
//     //   <p>Histogram Graph</p>
//     //   <Graph_His />
//     //   <p>################################################################################################################################################################</p>
//     //   <p>Line Graph</p>
//     //   <Graph_Line />
//     //   <p>-------------------------------------------------------------------</p>
//     //  </div>
//   );
// }


// const thedata = require()
function Graph() {
  return (
    <div className="App">
      <p>Histogram Graph</p>
      <Graph_His />
      <p>################################################################################################################################################################</p>
      <p>Line Graph</p>
      <Graph_Line />    
      <p>----------------------------------------------------------------------------------------------------------------------------------------------------------------</p>
    </div>
  );
}


function App() {
  const { Header, Content, Footer, Sider } = Layout;

  const [collapseds, setCollapsed] = useState(false);
  const [content, setcontent] = useState(<div></div>);
  const [image, setImage] = useState("")


  const toggle = () => {
    setCollapsed(!collapseds);
  };

  return (
    <Layout>
      <Graph />
      <Layout>
        {/* <Sider trigger={null} collapsible collapsed={collapseds}> */}
          <div className="logo" />
          <Menu theme="light" mode="inline" defaultSelectedKeys={['1']}>

            <Menu.Item key="1" onClick={
              () => axios.get('http://127.0.0.1:5000/api').then(respons => setImage(respons.data)).then(setcontent(
                <img src={`data:image/jpeg;base64,${image}`} width="600px" />
              ))
            } >
              เปิดรูป
            </Menu.Item>
            {/* <Menu.Item key="2" icon={<VideoCameraOutlined/>}>
            nav 2
          </Menu.Item>
          <Menu.Item key="3" icon={<UploadOutlined />}>
            nav 3
          </Menu.Item> */}
          </Menu>
        {/* </Sider> */}

        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(collapseds ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: toggle,
            })}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            {content}
          </Content>
        </Layout>

      </Layout>

    </Layout >
  );
}



export default App;
