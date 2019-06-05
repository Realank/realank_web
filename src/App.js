import React from 'react';
import './App.css';
import { Layout,Row,Col } from 'antd';

const { Header, Footer, Content } = Layout;

function App() {
  return (
    <Layout>
      <Header style={{color:'#fff',fontSize:'20px',fontWeight:'500'}}>Realank</Header>
      <Content>
        <div>
          <div style={{display:'flex',alignItems:'center',justifyContent:'center',height:'800px',fontWeight:'800',fontSize:'100px'}}>
            Hello!
          </div>
        </div>
      </Content>
      <Footer>津ICP备16000854号-1/2</Footer>
    </Layout>
  );
}

export default App;
