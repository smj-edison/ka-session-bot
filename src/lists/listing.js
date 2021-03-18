var Listing = function() {
    this.listings = {};
}

Listing.prototype.setByObjectNoOverride = function(listings) {
    this.listings = {
        ...listings,
        ...this.listings
    };
}

Listing.prototype.getProgramValue = function() {
    return Object.entries(this.listings).reduce((str, listingPair) => str + "// " + listingPair.join(", ") + "\n", "");
}

module.exports = Listing;
