import React from 'react'
import { TTab } from './TabBar'

interface ITabProps {
    setActivePane: React.Dispatch<React.SetStateAction<TTab>>,
    tabName: TTab,
    activePane: TTab
}

const tabStyleClass = (activePane: string, tabName: TTab) => `
        flex justify-center items-center h-[5vh] w-[20vw] 
        border-x-2 border-t-2 border-text text-text 
        hover:cursor-pointer 
        ${activePane === tabName ? 'bg-hover-200 text-black-900' : ''}
        `

const Tab = ({
    setActivePane,
    tabName,
    activePane
}: ITabProps) => {
    return (
        <div onClick={() => setActivePane(tabName)} className={tabStyleClass(activePane, tabName)}>
            <span className=' text-[0.5rem] global-font md:text-lg'>{tabName}</span>
        </div>
    )
}

export default Tab
