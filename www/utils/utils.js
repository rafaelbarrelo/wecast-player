Utils = {
    screen: {
        width: function() {
            return window.innerWidth || $(window).width();
        },
        
        height: function() {
            return window.innerHeight || $(window).height();
        },
        
        isLandscape: function() {
            return Utils.screen.width() > Utils.screen.height();
        }
    },

    device: {
        isIOS: function() {
            return window.device ? device.platform.toLowerCase == "ios" : false;
        }
    },

    number: {
        pad: function(num, size) {
            var s = num+"";
            while (s.length < size) s = "0" + s;
            return s;
        }
    }
}