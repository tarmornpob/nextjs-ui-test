"use client"
import { PictureOutlined, PlusOutlined } from "@ant-design/icons";
import { Breadcrumb, Button, Input, Select, Tabs, TabsProps } from "antd";
import { BreadcrumbItemType } from "antd/es/breadcrumb/Breadcrumb";
import { useState } from "react";

export default function Banners() {

    const [tabActive, setTabActive] = useState<string>('add_new');

    const breadCubItem: BreadcrumbItemType[] = [
       {
            title: 'Application Management',
            className: 'text-[#3C6CE7]'
       },
       {
            title: 'Home',
            className: 'text-[#3C6CE7]'
       },
       {
            title: 'Banner',
            className: 'text-[#3C6CE7]'
       },
       {
            title: 'Add New Banner',
       }
    ]


    const items: TabsProps['items'] = [
        {
        key: 'list',
        label: 'List',
    
        },
        {
        key: 'add_new',
        label: 'Add New Banner',
        }
    ];
  
    return (
        <>
            <div className="flex flex-row flex-wrap gap-2">
                <PictureOutlined style={{fontSize:'24px'}}/>
                <h1 className="font-bold text-2xl">Banners</h1>
                
            </div> 
            <Breadcrumb style={{ margin: '16px 0' }} items={breadCubItem}/>
            <div className="shadow p-4 w-full mt-[1rem] rounded-lg">
                <Tabs defaultActiveKey={tabActive} style={{ border: 0 }} items={items} onChange={(e) => setTabActive(e)}/>
                    {tabActive == 'add_new' ?
                    <div>
                        <h2 className="font-bold text-lg">Banner Info</h2>
                        <div className="grid grid-cols-2 gap-4 mt-[1rem]">
                            <div className="flex flex-col flex-wrap gap-5">
                                <p>Title ( Default) *</p>
                                <Input placeholder="Title" className="p-3"/>
                                <p>Zone</p>
                                <Select size="large" placeholder="Zone1" options={[{ value: 'sample', label: <span>sample</span> }]} />
                                <p>Banner type</p>
                                <Select size="large" placeholder="Promotion" options={[{ value: 'sample', label: <span>sample</span> }]} />
                                <p>Date</p>
                                <div className="grid grid-cols-2 gap-2">
                                    <Input placeholder="12/12/2024" className="p-3 row-span-1"/>
                                    <Input placeholder="12/12/2024" className="p-3 row-span-1"/>

                                </div>

                            </div>
                            <div className="flex flex-wrap flex-row justify-evenly items-start relative">
                                <div className="w-[50%] h-[70%]">
                                    <p>Banner image  * </p>
                                    <div className="grow h-[70%] mt-2 p-2 flex rounded-xl relative justify-center border-[#BEBEBE] border-[1px] border-dashed">
                                        <img src="/edit_icon.svg" className="!h-[25px] !w-[25px] absolute right-[1rem] top-[1rem]"/>
                                        <img src="/upload-cloud.svg" width={50} height={50}></img>
                                    </div>
                                </div>
                                <div className="grow w-full absolute bottom-0">
                                    <Input placeholder="เพิ่มลิงค์ (ไม่จำเป็น)" className="p-3"/>

                                </div>
                            </div>
                            
                        </div>
                        
                    </div>
                    : (<></>)}
            </div>
            <div className="flex flex-wrap justify-end flex-row w-full mt-[1rem] gap-2">
                            <Button type="default" className="pl-8 pr-8" style={{background:'#E8E8E8'}} variant='filled'>Reset</Button>

                            <Button type="primary" className="pl-8 pr-8" >Submit</Button>
            </div>
            <div className="mt-[1rem] w-full flex justify-center">
                <div className="w-[30%] h-[11rem] mt-2 p-4 flex rounded-xl relative justify-center border-[#BEBEBE] border-[2px] border-dashed">
                <PlusOutlined style={{fontSize:'34px'}}/>
                </div>
            </div>
        </>
   )
}