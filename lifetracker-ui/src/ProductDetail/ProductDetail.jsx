import * as React from "react";
import "./ProductDetail.css";

import { useParams } from "react-router-dom";

export default function ProductDetail({item}) {
    const { id } = useParams();

  return (
    <div id="Buy" className="product-grid">
    </div>
  );
}
