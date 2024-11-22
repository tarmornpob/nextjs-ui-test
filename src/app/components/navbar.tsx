"use client"
import React, { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';

import {
  DesktopOutlined,
  FileOutlined,
  HomeOutlined,
  TeamOutlined,
  UserOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  DoubleLeftOutlined,
  DoubleRightOutlined,
  ShoppingOutlined,
  SearchOutlined,
  BorderOutlined,
  GatewayOutlined
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme, Button, Input } from 'antd';

import { Col, Row } from 'antd';
import SubMenu from 'antd/es/menu/SubMenu';

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];


function Navbar({children}:{ children: React.ReactNode}){
    const router = useRouter();
    const pathname = usePathname(); // Add this hook

        
    function getItem(
        label: React.ReactNode,
        key: React.Key,
        icon?: React.ReactNode,
        children?: MenuItem[],
    ): MenuItem {
        return {
            key,
            icon,
            children,
            label,
            onClick: () => router.push(key.toString())
        } as MenuItem;
    }
        
    const items: MenuItem[] = [
        getItem('Dashboard', '/products', <HomeOutlined/>),
        {
            key: 'pos_section',
            label: 'POS SECTION',
            type: 'group', style: { fontWeight: '700',fontSize: '14px' },
            children: [
                { key: '13', label: 'New Sale', icon: <ShoppingOutlined />, style: { fontWeight: 'normal',fontSize: '14px' }},
            ],
        },
        {
            key: 'order_management',
            label: 'ORDER MANAGEMENT',
            type: 'group',
            style: {
                fontWeight:'700',
                color:'#B4B4B4'
            },
            children: [
                { 
                    key: 'orders',
                    label: 'Orders', 
                    icon: <ShoppingOutlined />, 
                    style: { fontWeight: 'normal' }, 
                    children: ['All', 'Scheduled', 'Pending','Accepted', 'Processing', 'Order On The Way', 'Delivered', 'Canceled', 'Payment Failed', 'Refunded', 'Offline Payment'].map((item,i) => { return { key: item.toLocaleLowerCase(), label: '- ' + item} })
                },
                {
                    key: '14',
                    label: 'Order Refunds',
                    icon:  <BorderOutlined />,
                    style: { fontWeight: 'normal' }, 
                    children: [
                        {
                            key: 'refund_request',
                            label:'- Refund Request'
                        }
                    ]
                }
            ],
        },
        {
            key: 'promotion_management',
            label: 'PROMOTION MANAGEMENT',
            type: 'group',
            style: {
                fontWeight:'700',
                color:'#B4B4B4'
            },
            children: [
                { 
                    key: '13',
                    label: 'Campaigns', 
                    icon: <GatewayOutlined />, 
                    style: { fontWeight: 'normal' }, 

                }
            ]
        },
       
        getItem('Option 2', '2', <DesktopOutlined />),
        getItem('User', 'sub1', <UserOutlined />, [
        getItem('Tom', '3'),
        getItem('Bill', '4'),
        getItem('Alex', '5'),
        ]),
        getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
        getItem('Files', '9', <FileOutlined />),
    ];
  
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
        <Layout style={{ minHeight: '100vh' }}>
        <Sider theme='light' collapsed={collapsed} trigger={null}   className="p-0">
            <Row className="p-2">
            {!collapsed && <Col span={12}> <img src="/logo_sidebar.png" alt="Logo Sidebar"/></Col> }
            <Col span={!collapsed ? 12 : 24} className="flex justify-end items-center">

            <Button
            
                type="text"
                icon={collapsed ? <DoubleRightOutlined /> : <DoubleLeftOutlined />}
                onClick={() => setCollapsed(!collapsed)}
                style={{
                fontSize: '16px',
                ...collapsed && { width: '100%'}
                }}
            />
            </Col>
            </Row>
            <Row className="p-2">
            <Col span={24}>
            <Input className="p-3 pb-2 pt-2" placeholder="Search Menu..." prefix={<SearchOutlined />} />
            </Col>
            </Row>
                
            <div className="demo-logo-vertical" />
            <Menu mode="inline" defaultSelectedKeys={[pathname]}  theme="light" style={{border:0}}>
                <Menu.Item icon={<HomeOutlined/>}>Dashboard</Menu.Item>
                <Menu.ItemGroup style={{padding:0}} title={<div className="text-[11px] text-[#B4B4B4] font-bold break-all">POS SECTION</div>}>
                    <Menu.Item key="newsale" icon={ <ShoppingOutlined />}>New Sale</Menu.Item>

                </Menu.ItemGroup>
                <Menu.ItemGroup style={{padding:0}} title={<div className="text-[11px] text-[#B4B4B4] font-bold break-all">ORDER MANAGEMENT</div>}>
                    <SubMenu title="Orders" icon={<ShoppingOutlined/>}>
                    {['All', 'Scheduled', 'Pending', 'Accepted', 'Processing', 'Order On The Way', 'Delivered', 'Canceled', 'Payment Failed', 'Refunded', 'Offline Payment'].map((item, i) => (
                        <Menu.Item key={item.toLowerCase()}>
                            - {item}
                        </Menu.Item>
                    ))}
                    </SubMenu>
                    <SubMenu title={<p style={{fontSize:'12px'}}>Orders Refunds</p>} icon={<ShoppingOutlined/>}>
                        <Menu.Item key="refund_request">
                            - Refund Request
                        </Menu.Item>
                    </SubMenu>

                </Menu.ItemGroup>

                <Menu.ItemGroup style={{padding:0}} title={<div className="text-[11px] text-[#B4B4B4] font-bold break-all">PROMOTION MANAGEMENT</div>}>
                    <SubMenu title="Campaigns" icon={<GatewayOutlined/>}>
                        <Menu.Item key="refund_request">
                            - Basic Campaigns
                        </Menu.Item>
                        <Menu.Item key="refund_request">
                            - Item Campaigns
                        </Menu.Item>
                    </SubMenu>
                </Menu.ItemGroup>

               
            </Menu>
            {/* <Menu theme="light" defaultSelectedKeys={[pathname]} mode="inline" items={items} /> */}
        </Sider>
        <Layout className="!bg-white">
            <Header style={{ padding: 0, background: colorBgContainer }}>
                Header Top
            </Header>
            <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
                
            </Breadcrumb>
            {children}
            </Content>
            <Footer className="!bg-white" style={{ textAlign: 'center' }}>
            ©{new Date().getFullYear()} © 2024. Telehealth thailand All rights reserved.
            </Footer>
        </Layout>
        </Layout>
    );
};

export default Navbar;