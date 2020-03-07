import React, { useState, useEffect }from 'react';
import {Link} from 'react-router-dom';

function Results() {

  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    var url = "http://svcs.ebay.com/services/search/FindingService/v1";
    url += "?OPERATION-NAME=findItemsAdvanced";
    url += "&SERVICE-VERSION=1.13.0";
    url += "&SECURITY-APPNAME=PhillipL-Hacktech-PRD-969eab4f9-2d048b4e";
    url += "&RESPONSE-DATA-FORMAT=JSON";
    url += "&REST-PAYLOAD";
    url += "&GLOBAL-ID=EBAY-US";
    url += "&keywords=doom";
    url += "&paginationInput.entriesPerPage=10";

    const data = await fetch(url, {
      "method": "GET"
    })
    
    const items = await data.json();
    const result = items.findItemsAdvancedResponse[0].searchResult[0].item;
    console.log(result[0].title)
    setItems(result);
  };


  return (
    <div>
      <p>Results</p>

      {items.map(item => (
          <h4 key={item.id}>
            <Link to={`/songs/${item.id}`}>{item.title}</Link></h4>
      ))}
    </div>
  );
}

export default Results;


