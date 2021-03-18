import React, { Component } from "react";
import "./BusinessList.css";
import Business from "../Business/Business";

class BusinessList extends Component {
  render() {
    return (
      // Every list item rendered by a React component needs to have a unique key.
      <div className="BusinessList">
        {this.props.businesses.map((business) => {
          return <Business business={business} key={business.id} />;
        })}
      </div>
    );
  }
}

export default BusinessList;
