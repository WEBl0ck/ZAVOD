import React from 'react';

import './sidebar.scss';

interface SidebarProps {
  position: 'left' | 'right';
}

function Sidebar({ position }: SidebarProps) {
  return <div className={`sidebar ${position == 'left' ? 'sidebar-left' : 'sidebar-right'}`}></div>;
}

export default Sidebar;
