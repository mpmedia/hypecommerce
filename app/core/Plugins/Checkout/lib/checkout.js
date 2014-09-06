/**
 * Hype Commerce
 *
 * @package		Hype
 * @module		Checkout
 * @version		1.0.0
 * @author		Hype Commerce Team <team@hypejs.com>
 * @copyright	Copyright (c) 2014, Hype Commerce, Inc. (http://www.hypejs.com/)
 * @license		http://www.hypejs.com/license
 */

module.exports = function(Checkout, Hype, _) {

    Checkout.setBilling = function(billingObject) {
    };

    Checkout.setShipping = function(shippingObject) {
    };

    Checkout.place = function() {
    };

    Checkout.calculateTotals = function() {
    	var Tax = Hype.require('Tax');
    };


    return Checkout;
};