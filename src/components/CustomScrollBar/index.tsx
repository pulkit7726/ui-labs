import React from 'react';
import './scrollbar.css';

interface ScrollBarProps {
  variant: 'basic' | 'mac-os';
  data: any;
}

const ScrollBar = ({ variant = 'basic', data }: ScrollBarProps) => (
  <div title="DivisionTag" className={`container ${variant}`}>
    <h1 title="headings">{data.title}</h1>
    {data.content.map((item: any) => (
      <p title="paragraph" key={item.id}>
        {item.description}
      </p>
    ))}
  </div>
);
export default ScrollBar;
