import React, {useState} from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import CardsList from '../Cards/CardsList';
import {tabContent} from '../../cardsData.js'
import './TableStyle.css'

const TableComp = () => {
    const [selectedTab, setSelectedTab] = useState(0);

    return (
        <div className='tabs-container'>
            <Tabs className='tabs' selectedIndex={selectedTab} onSelect={index => setSelectedTab(index)}>
                <TabList className='tabs-list'>
                    {Object.keys(tabContent).map((tab, index) => (
                        <Tab key={index}>{tab}</Tab>
                    ))}
                </TabList>

                {Object.values(tabContent).map((content, index) => (
                    <TabPanel className='tabs-panel' key={index}>
                        <CardsList content={content} />
                    </TabPanel>
                ))}
            </Tabs>
        </div>
    )
}

export default TableComp