define(['views/playerView'],
    function(PlayerView) {
    
    describe('PlayerView', function() {
        
        beforeEach(function() {
            this.playerView = new PlayerView({audioSrc: "../www/temp/nerdcast408.mp3",
                                              autoPlay: false}).render();
            
            $("#sandbox").html(this.playerView.$el);
            
            this.playerView.$el.hide();
            
            this.$wecastThumbs = this.playerView.select("#wecast-thumbs");
            this.$wecastMedia = this.playerView.select("#wecast-media");
            this.$wecastAudio = this.playerView.select("#wecast-audio");
        });
        
        afterEach(function() {
            this.playerView.remove();
        });
        
        it("Deve possuir o elemento 'wecast-thumbs'", function() {
            
            expect(this.$wecastThumbs.length).toBe(1);
        });
        
        it("Deve possuir o elemento 'wecast-media'", function() {
            
            expect(this.$wecastMedia.length).toBe(1);
        });
        
        it("Deve possuir o elemento 'wecast-audio'", function() {
            
            expect(this.$wecastAudio.length).toBe(1);
        });
    });
});