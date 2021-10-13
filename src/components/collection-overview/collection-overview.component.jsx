import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CollectionPreview from "../../pages/preview-collection/preview-collection.component";
import "./collection-overview.styles.scss";
import { selectCollectors } from "../../redux/shop/shop.selector";
const CollectionsOverview = ({ collections }) => (
	<div className="collections-overview">
		{collections.map(({ id, ...otherCollectionProps }) => (
			<CollectionPreview key={id} {...otherCollectionProps} />
		))}
	</div>
);

const mapStateToProps = createStructuredSelector({
	collections: selectCollectors
}); 

export default connect(mapStateToProps)(CollectionsOverview);
