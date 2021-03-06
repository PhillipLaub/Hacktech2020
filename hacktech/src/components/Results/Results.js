import React, { useState, useEffect } from "react";
import "./Results.css";
// import '../Search/Search';
// import Search from "../Search/Search";



function Results(props) {
  useEffect(() => {
    fetchItems();
  }, [props.search]);

  

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    var url = "http://svcs.ebay.com/services/search/FindingService/v1";
    url += "?OPERATION-NAME=findItemsAdvanced";
    url += "&SERVICE-VERSION=1.13.0";
    url += "&SECURITY-APPNAME=PhillipL-Hacktech-PRD-969eab4f9-2d048b4e";
    url += "&RESPONSE-DATA-FORMAT=JSON";
    url += "&REST-PAYLOAD";
    url += "&GLOBAL-ID=EBAY-US";
    url += "&keywords=";
    if (props.search === "") {
      url += "doom"
    }
    else {url += props.search}
 
    url += props.search;
    url += "&paginationInput.entriesPerPage=12";

    const data = await fetch(url, {
      method: "GET"
    });

    const items = await data.json();
    const result = items.findItemsAdvancedResponse[0].searchResult[0].item;
    console.log(result);
    setItems(result);
  };

  

  return (
    <div>
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4">
          <h4>Results</h4>
        </div>
        <div className="col-md-4"></div>
      </div>

      <div className="row">
        {items.map(item => (
          <div className="col-md-3 margin-b2">
            <div className="item-card hvr-grow">
              <div key={item.id}>
                  <div className="title-box"><h4 className="item-title">
                  <a href={item.viewItemURL[0]}>{item.title}</a>
                </h4></div>
                
                
                <div className="row img-price">
                    <div className="col-md-6  align-self-center">
                         <div className="img-container">
                    <a href={item.viewItemURL[0]}>
                  <img key={item.id} src={item.galleryURL[0]} alt={item.id}/>
                </a>

                </div></div>
                    <div className="col-md-6  align-self-center"><h5>
                  Price: ${item.sellingStatus[0].currentPrice[0].__value__}
                </h5></div>
                </div>
               
               

                
                {/* <h6>Shipping Cost: ${item.shippingInfo[0].shippingServiceCost[0].__value__}0</h6> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Results;
