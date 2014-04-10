define(['jquery', 'views/playerView'],
        function($, PlayerView) {

    $.fn.wecast = function() {
        
        this.each(function() {
            var $this = $(this);
            
            var options = {el: this,
                           audioSrc: $this.data("audio-src")};
            
            var playerView = new PlayerView(options);
            
            $this.append(playerView.render().el);
        });
        
        return this;
    };
});