define(['views/mainView'],
    function(MainView) {
    
    describe('MainView', function() {
        
        beforeEach(function() {
            this.mainView = new MainView().render();
            
            $("#sandbox").html(this.mainView.$el);
            
            this.mainView.$el.hide();
            
            this.$wecastPlayer = this.mainView.select("#wecast-player");
        });
        
        afterEach(function() {
            this.mainView.remove();
        });
        
        it("Deve possuir o elemento 'wecast-player'", function() {
            
            expect(this.$wecastPlayer.length).toBe(1);
        });
        
        it("O element do player deve ter o atributo 'data-audio-src' definido", function() {
            
            expect(this.$wecastPlayer.data("audio-src")).toBeDefined();
        });
    });
});