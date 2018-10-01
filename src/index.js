class SmartCalculator {
    constructor(initialValue) {
        this.numberThis = initialValue + '';
        this.valueOf = () => eval(this.numberThis);
    }

    add(number) {
        this.numberThis = this.numberThis + ' + ' + number;
        return this;
    }

    subtract(number) {
        this.numberThis = this.numberThis + ' - ' + number;
        return this;
    }

    multiply(number) {this.numberThis =  this.numberThis + ' * ' + number;
        return this;
    }

    devide(number) {
        this.numberThis =  this.numberThis + ' / ' + number;
        return this
    }

    pow(number) {
        this.numberThis =this.numberThis + "**" + number;
        return this
    }
}

module.exports = SmartCalculator;
