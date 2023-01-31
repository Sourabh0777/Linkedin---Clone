import React from 'react'
import "./Widgets.css"
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Widgets() {
    const newsArticle = (heading, subtitle)=> (
        <div className="widgets_articles">
            <div className="widgets_articlesLeft">
                <FiberManualRecordIcon/>
            </div>
            <div className="widgets_articlesRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    );
  return (
    <div className='widgets'>
        <div className="widgets_header">
            <h2>Linkdin News</h2>
            <InfoIcon/>
        </div>
        {newsArticle("PAPA Rect is back","Top news- Linkding PRoject is done")}
        {newsArticle("Every thing is workin","Top news- New developer")}
    </div>
  )
}

export default Widgets