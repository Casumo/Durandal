﻿define(function(require) {
    var ctor = function(element, settings) {
        this.context = settings;
    };

    ctor.prototype.getHeaderText = function(item) {
        if (this.context.headerProperty) {
            return item[this.context.headerProperty];
        }

        return item.toString();
    };

    ctor.prototype.afterRenderItem = function(elements, item) {

    };

    return ctor;
});