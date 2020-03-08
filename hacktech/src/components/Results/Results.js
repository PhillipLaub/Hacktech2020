import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Results.css";
import Search from "../Search/Search"

function Results() {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState(search);
  
  useEffect(() => {
    fetchItems();
    setSearch(search)
  }, [search]);



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
          <div className="col-md-3">
            <div className="item-card">
              <div key={item.id}>
                <h4 className="item-title">
                  <a href={item.viewItemURL[0]}>{item.title}</a>
                </h4>
                <div className="img-container">
 <a href={item.viewItemURL[0]}>
                  <img key={item.id} src={item.galleryURL[0]} />
                </a>

                </div>
               

                <h6>
                  Price: ${item.sellingStatus[0].currentPrice[0].__value__}
                </h6>
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
