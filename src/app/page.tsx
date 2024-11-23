import React, { useState } from 'react';
import { Menu, Tabs } from 'antd';
import type { TabsProps } from 'antd';
import TabPane from 'antd/es/tabs/TabPane';
import InfoItems from '@/app/components/Items/info'
import { Suspense } from 'react'

const items: TabsProps['items'] = [
  {
    key: 'default_tab',
    label: 'Default',
    children:  
    <Suspense fallback={<div>Loading...</div>}>
      <InfoItems />
    </Suspense>
  },
  {
    key: 'english_tab',
    label: 'English (EN)',
    children: 'Content of Tab Pane 2',
  },
  {
    key: 'thai_tab',
    label: 'Thai-ไทย (TH)',
    children: 'Content of Tab Pane 3',
  },
];

const App: React.FC = () => {
  

  return (
        <>
        <h1 className="font-bold text-2xl">Item update</h1>
          <div className="shadow p-4 w-full mt-[1rem] rounded-lg">
            <Tabs defaultActiveKey="default_tab" style={{ border: 0 }} items={items}/>
          </div>
        </>
  );
};

export default App;