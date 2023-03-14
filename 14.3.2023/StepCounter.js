var StepCounter = {
        koraci : 0,
        walk: function(){
            this.koraci++;
        },
            getTotalSteps: function() {
                return this.koraci;
            },
        };

module.exports = StepCounter;