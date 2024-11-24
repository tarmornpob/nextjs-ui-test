"use client"
import React, { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';

import Icon, {
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
  GatewayOutlined,
  PictureOutlined,
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
  DownOutlined,
  SyncOutlined
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme, Button, Input } from 'antd';

import { Col, Row } from 'antd';


const { Header, Content, Footer, Sider } = Layout;

export type MenuItem = Required<MenuProps>['items'][number];


function Navbar({children}:{ children: React.ReactNode}){
    const router = useRouter();
    const pathname = usePathname(); // Add this hook
  
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const menuItemGroupClass = `text-[11px] text-[#B4B4B4] font-bold break-all`;

    const menuNavbar: MenuItem[] = [
        {
          label: 'Dashboard',
          icon: <HomeOutlined />,
          key: 'dashboard'
        },
        {
          type: 'group',
          label: <div className={menuItemGroupClass}>POS SECTION</div>,
          children: [
            {
              label: 'New Sale',
              icon: <ShoppingOutlined />,
              key: 'newsale'
            }
          ]
        },
        {
          type: 'group',
          label: <div className={menuItemGroupClass}>ORDER MANAGEMENT</div>,
          children: [
            {
              label: 'Orders',
              icon: <ShoppingOutlined />,
              key: 'orders',
              children: [
                'All', 'Scheduled', 'Pending', 'Accepted', 'Processing', 
                'Order On The Way', 'Delivered', 'Canceled', 'Payment Failed', 
                'Refunded', 'Offline Payment'
              ].map(item => ({
                label: `- ${item}`,
                key: item.toLowerCase()
              }))
            },
            {
              label: <p style={{fontSize:'12px'}}>Orders Refunds</p>,
              icon: <ShoppingOutlined />,
              key: 'orders-refunds',
              children: [{
                label: '- Refund Request',
                key: 'refund_request'
              }]
            }
          ]
        },
        {
          type: 'group',
          label: <div className={menuItemGroupClass}>PROMOTION MANAGEMENT</div>,
          children: [
            {
              label: 'Campaigns',
              icon: <GatewayOutlined />,
              key: 'campaigns',
              children: [
                {
                  label: '- Basic Campaigns',
                  key: 'basic_campaigns'
                },
                {
                  label: '- Item Campaigns',
                  key: 'item_campaigns'
                }
              ]
            },
            {
              label: 'Banners',
              icon: <PictureOutlined />,
              key: 'banners',
            },
            {
              label: 'Other Banners',
              icon: <PictureOutlined />,
              key: 'other_banners'
            },
            {
              label: 'Coupons',
              icon: <PictureOutlined />,
              key: 'coupons'
            },
            {
              label: 'Cashback',
              icon: <PictureOutlined />,
              key: 'cashback'
            },
            {
              label: 'Push Notification',
              icon: <PictureOutlined />,
              key: 'push_notification'
            }
          ]
        },
        {
          type: 'group',
          label: <div className={menuItemGroupClass}>PRODUCT MANAGEMENT</div>,
          children: [
            {
                label: 'Categories',
                icon: <ShoppingOutlined />,
                key: 'categories',
                children: [
                    'Category', 'Sub Category', 'Bulk Import', 'Bulk Export'
                  ].map(item => ({
                    label: `- ${item}`,
                    key: item.toLowerCase()
                  }))
            },
            {
                label: 'Attributes',
                icon: <ShoppingOutlined />,
                key: 'attributes',
            },
            {
                label: 'Unit',
                icon: <ShoppingOutlined />,
                key: 'unit',
            },
            {
                label: 'Common Conditions',
                icon: <ShoppingOutlined />,
                key: 'common_conditions',
            },
            {
                label: 'Product Setup',
                icon: <ShoppingOutlined />,
                key: 'product_setup',
                children: [
                    'Add New', 'List', 'Product Gallery', 'Review'
                  ].map(item => ({
                    label: `- ${item}`,
                    key: item.toLowerCase()
                  }))
            }
          ]
        }
      ];


        const menuHeader: MenuItem[] = [
            {
            label: 'Dashboard',
            key: 'dashboard',
            icon: <HomeOutlined style={{color:'#3C6CE7'}}/>,
            },
            {
            label: 'Users',
            key: 'users',
            icon: <UserOutlined style={{color:'#3C6CE7'}}/>,
            
            },
            {
                label: 'Transactions & Reports',
                key: 'transactions_reports',
                icon: <FileOutlined style={{color:'#3C6CE7'}}/>,
               
            },
            {
            label: 'Settings',
            key: 'setting',
            type:'submenu',
            expandIcon:<DownOutlined style={{color:'#3C6CE7'}}/>,
            icon: <SettingOutlined style={{color:'#3C6CE7'}}/>,
            
            children: [
                {
                type: 'group',
                label: 'Item 1',
                children: [
                    { label: 'Option 1', key: 'setting:1' },
                    { label: 'Option 2', key: 'setting:2' },
                ],
                },
                {
                type: 'group',
                label: 'Item 2',
                children: [
                    { label: 'Option 3', key: 'setting:3' },
                    { label: 'Option 4', key: 'setting:4' },
                ],
                },
            ],
            },
            {
            key: 'alipay',
            label: 'Dispatch Management',
            icon:<SyncOutlined style={{color:'#3C6CE7'}} />,
           
            },
        ];

      const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
        router.push(e.key.toString())
      };

    return (
        <Layout style={{ minHeight: '100vh' }}>
        <Sider theme='light' collapsed={collapsed} trigger={null} width={300} className="p-0">
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
            <Menu onClick={onClick}  mode="inline" defaultSelectedKeys={[pathname]} style={{border:0}} className="pr-3" theme="light" items={menuNavbar}/>
            {/* <Menu theme="light" defaultSelectedKeys={[pathname]} mode="inline" items={items} /> */}
        </Sider>
        <Layout className="!bg-white p-3">
            <Header className="flex flex-wrap w-full flex-row h-fit rounded-lg shadow p-0" style={{ background: colorBgContainer }}>
                <Menu onClick={onClick} defaultSelectedKeys={[pathname]} mode="horizontal" style={{border: 0, flexWrap: 'wrap', gap:'10px'}} items={menuHeader} />
                <div className="grow flex flex-row flex-wrap justify-evenly items-center">
                    <div className="w-25 h-25 bg-[#E0E6ED] p-2 rounded-3xl">
                        <img src="/moon.svg"/>
                    </div>
                    <div className="w-25 h-25 bg-[#E0E6ED] p-2 rounded-3xl">
                        <img src="/us_flag.svg"/>
                    </div>
                    <div className="w-25 h-25 bg-[#E0E6ED] p-2 rounded-3xl">
                        <img src="/inbox.svg"/>
                    </div>
                    <div className="w-25 h-25 bg-[#E0E6ED] p-2 rounded-3xl">
                        <img src="/bell.svg"/>
                        <div className="text-[#00AB55] leading-[0] w-fit h-fit text-3xl relative top-[-1.7rem] right-[-0.8rem]">•</div>

                    </div>
                    <div className="w-25 h-25 bg-[#E0E6ED] rounded-3xl">
                        <img src="/user-profile.svg"/>
                    </div>
                </div>
            </Header>
            <Content style={{ margin: '1rem 0' }}>
            {/* <Breadcrumb style={{ margin: '16px 0' }}>
                
            </Breadcrumb> */}
            
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