import React from 'react';
import { SidebarPortal } from '@plone/volto/components';
import MeetingSidebar from './MeetingSidebar';

const Edit = ({ data, onChangeBlock, block, selected }) => {
  return (
        <div className='block'>
          <SidebarPortal selected={selected}>
            <MeetingSidebar data={data} block={block} onChangeBlock={onChangeBlock} />
          </SidebarPortal>
        </div>
  );
};

export default Edit;