import React from 'react';
import {PageContentList} from '../helpers/pageContentList'
import PageTemplate from '../components/PageTemplate';
import { useParams } from 'react-router-dom';

import '../styles/Pages.css'
import { ProjectList } from '../helpers/projectsList';

function Page() {
    const { projectId} = useParams();
    const projectItem = ProjectList.find((item) => item.id === projectId);

    if (!projectItem) {
        return <div>Project not found.</div>;
    }

    const pageItem = PageContentList.find((page) => page.id === projectId);

    return (
    
        <div className="pageContent">
        {pageItem ? (
          <PageTemplate key={pageItem.id} content={pageItem.content} />
        ) : (
          <div>No content available for this project.</div>
        )}
      </div>
    );
   
}

export default Page