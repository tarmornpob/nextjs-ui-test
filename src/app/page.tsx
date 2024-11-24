"use client"
import React, { useState } from 'react';
import { Button, Card, Checkbox, Divider, Input, Menu, Select, Tabs } from 'antd';
import type { TabsProps } from 'antd';
import TabPane from 'antd/es/tabs/TabPane';
import { Suspense } from 'react'
import { InfoCircleOutlined } from '@ant-design/icons';

const items: TabsProps['items'] = [
  {
    key: 'default_tab',
    label: 'Default',
 
  },
  {
    key: 'english_tab',
    label: 'English (EN)',
    
  },
  {
    key: 'thai_tab',
    label: 'Thai-ไทย (TH)',
  }
];

const App: React.FC = () => {
  const [tabActive, setTabActive] = useState<string>('default_tab');
  

  return (
        <>
        <h1 className="font-bold text-2xl">Item update</h1>
        <div className="shadow p-4 w-full mt-[1rem] rounded-lg">
            <Tabs defaultActiveKey={tabActive} style={{ border: 0 }} items={items} onChange={(e) => setTabActive(e)}/>
              {tabActive && 
                <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-wrap flex-row items-start gap-2">
                    <p>Name ( Default) *</p>
                    <Input placeholder="New item" className="p-3"/>
                    <p>Short description (Default) *</p>
                    <Input style={{height:'100px'}}/>
                </div>
                <div className="flex flex-wrap flex-row justify-left items-start gap-4">
                    <div className="flex flex-wrap flex-col h-full w-[40%] gap-2">
                        <p>Item Image * <span className="text-[#F05338]">( Ratio 1:1)</span></p>
                        <div className="grow w-full p-2 flex rounded-xl relative justify-center border-[#BEBEBE] border-[1px] border-dashed">
                            <img src="/edit_icon.svg" className="!h-[25px] !w-[25px] absolute right-[1rem] top-[1rem]"/>
                            <img src="/upload-cloud.svg" width={50} height={50}></img>
                        </div>
                    </div>
                    <div className="flex flex-wrap flex-col h-full w-[40%] gap-2">
                        <p>Item thumbnail * <span className="text-[#F05338]">( Ratio 1:1)</span></p>
                        <div className="grow w-full p-2 flex rounded-xl relative justify-center border-[#BEBEBE] border-[1px] border-dashed">
                        <img src="/edit_icon.svg" className="!h-[25px] !w-[25px] absolute right-[1rem] top-[1rem]"/>

                            <img src="/upload-cloud.svg" width={50} height={50}></img>
                        </div>
                    </div>
                </div>
            </div>
            }
        </div>
        <div className="shadow p-4 w-full mt-[1rem] rounded-lg">
            <h2 className="font-bold text-lg">Item details</h2>
            <Divider style={{margin: '12px 0px !important'}}/>
              <div className="grid grid-cols-4 gap-4">
                  <div className="flex flex-col flex-wrap gap-2">
                      <p>Store *</p>
                      <Select size="large" placeholder="Select Store" options={[{ value: 'sample', label: <span>sample</span> }]} />
                  </div>
                  <div className="flex flex-col flex-wrap gap-2">
                      <p>Category *</p>
                      <Select size="large" placeholder="Select Category" options={[{ value: 'sample', label: <span>sample</span> }]} />
                  </div>
                  <div className="flex flex-col flex-wrap gap-2">
                      <p>Sub Category <InfoCircleOutlined /></p>
                      <Select size="large" placeholder="Select Sub Category" options={[{ value: 'sample', label: <span>sample</span> }]} />
                  </div>
                  <div className="flex flex-col flex-wrap gap-2">
                      <p>Suitable For</p>
                      <Select size="large" placeholder="Select Condition" options={[{ value: 'sample', label: <span>sample</span> }]} />
                  </div>
                  <div className="flex flex-col flex-wrap gap-2">
                      <p>Unit</p>
                      <Input size="large" placeholder="แผง"/>
                  </div>
                  <div className="flex flex-col flex-wrap gap-2">
                      <p>Maximum Purchase Quantity Limit <InfoCircleOutlined /></p>
                      <Input size="large" placeholder="Ex: 0"/>
                  </div>
                  <div className="flex flex-col flex-wrap gap-2 justify-center items-center">
                      <Checkbox checked={true}>
                          Is Basic Medicine
                      </Checkbox>
                  </div>
                  <div className="flex flex-col flex-wrap gap-2 justify-center items-center">
                      <Checkbox checked={true}>
                          Is prescription required
                      </Checkbox>
                  </div>
              </div>
        </div>
        <div className="shadow p-4 w-full mt-[1rem] rounded-lg">
          <h2 className="font-bold text-lg">Price Information</h2>
            <Divider style={{margin: '12px 0px !important'}}/>
              <div className="grid grid-cols-4 gap-4">
                    <div className="flex flex-col flex-wrap gap-2">
                        <p>Price *</p>
                        <Input size="large" placeholder="1" type="number"/>
                    </div>
                    <div className="flex flex-col flex-wrap gap-2">
                        <p>Total stock</p>
                        <Input size="large" placeholder="Ex: 10" type="number"/>
                    </div>
                    <div className="flex flex-col flex-wrap gap-2">
                        <p>Discount type * <InfoCircleOutlined /></p>
                        <Select size="large" placeholder="Percent (%)" options={[{ value: 'sample', label: <span>sample</span> }]} />
                    </div>
                    <div className="flex flex-col flex-wrap gap-2">
                        <p>Discount (%) *</p>
                        <Input size="large" placeholder="0" type="number"/>
                    </div>
              </div>
          </div>
          <div className="shadow p-4 w-full mt-[1rem] rounded-lg">
          <h2 className="font-bold text-lg">Attribute</h2>
            <Divider style={{margin: '12px 0px !important'}}/>
            <div className="grid grid-cols-1 gap-4">
                    <div className="flex flex-col flex-wrap gap-2">
                        <p>Attribute</p>
                        <Select style={{height:60}} size="large" options={[{ value: 'sample', label: <span>sample</span> }]} />
                    </div>
            </div>
          </div>
          <div className="shadow p-4 w-full mt-[1rem] rounded-lg">
          <h2 className="font-bold text-lg">Tags</h2>
            <Divider style={{margin: '12px 0px !important'}}/>
            <div className="grid grid-cols-1 gap-4">
                    <div className="flex flex-col flex-wrap gap-2">
                        <p>Attribute</p>
                        <Input size="large" className="p-3" placeholder='Search tags'/>
                    </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-end flex-row w-full mt-[1rem] gap-2">
            <Button type="default" className="pl-8 pr-8" style={{background:'#E8E8E8'}} variant='filled'>Reset</Button>

            <Button type="primary" className="pl-8 pr-8" >Submit</Button>
          </div>
        </>
  );
};

export default App;