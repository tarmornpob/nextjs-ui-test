'use client'

import { Input } from "antd"
import TextArea from "antd/es/input/TextArea"
import { FC } from "react"

const InfoItems = () => {
    return (
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
                    <div className="grow w-full p-2 flex rounded-xl justify-center border-[#BEBEBE] border-[1px] border-dashed">
                        <img src="/upload-cloud.svg" width={50} height={50}></img>
                    </div>
                </div>
                <div className="flex flex-wrap flex-col h-full w-[40%] gap-2">
                    <p>Item thumbnail * <span className="text-[#F05338]">( Ratio 1:1)</span></p>
                    <div className="grow w-full p-2 flex rounded-xl justify-center border-[#BEBEBE] border-[1px] border-dashed">
                        <img src="/upload-cloud.svg" width={50} height={50}></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoItems