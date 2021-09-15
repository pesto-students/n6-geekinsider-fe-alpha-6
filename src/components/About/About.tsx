import React from 'react';
import { Card } from 'antd';
import { AboutPropTypes } from '.';

const About: React.FC<AboutPropTypes> = ({ children, title }) => {
    return (
        <>
            <h3><b>{title}</b></h3>
            {children?.split(/[\n]+/).map((itm: string, index: number) => <span key={`${itm}-${index}`}>{itm}<br/></span>)}
        </>
    )
}

export default About;