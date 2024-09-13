
// colors
/*const sectionBgCol = '#313131';
const tankCol = '#666666';
const liquidCol = '#2fe0d8';
const statusOkCol = 'rgb(9, 211, 9)';
const statusNokCol = 'rgb(255, 0, 55)';
// misc
const pumpSpeed = '.4s';*/


class Tank {

    setState(state) {
        this.state = state;
        switch(state) {
            case 'ok':
                this.tank.style.background = 'linear-gradient(to top, var(--liquid-color) 35%, var(--tank-color) 0)';
                this.pump.style.border = '1em solid var(--tank-color)';
                this.tube.style.background = 'linear-gradient(to right, var(--liquid-color) 50%, var(--tank-color) 0)';
                this.turbine.classList.remove('rotating');
                break;
            case 'pumping':
                this.tank.style.background = 'linear-gradient(to top, var(--liquid-color) 60%, var(--tank-color) 0)';
                this.pump.style.border = '1em solid var(--liquid-color)';
                this.tube.style.background = 'var(--liquid-color)';
                this.turbine.classList.add('rotating');
                break;
            case 'nok':
                this.tank.style.background = 'linear-gradient(to top, var(--liquid-color) 95%, var(--tank-color) 0)';
                this.pump.style.border = '1em solid var(--liquid-color)';
                this.tube.style.background = 'linear-gradient(to right, var(--liquid-color) 50%, var(--tank-color) 0)';
                this.turbine.classList.remove('rotating');
                // TODO  add warning icon on the pump here !!!!!!!!!!!
                break;
            default: // loading animation
                this.tank.style.background = 'var(--tank-color)';
                this.pump.style.border = '1em solid var(--tank-color)';
                this.tube.style.background = 'var(--tank-color)';
                this.turbine.classList.remove('rotating');
        }
    }

    // TODO  add offline variant  (dot red)

    constructor(id, state) {
        this.id = id;
        this.state = state;  // ok, pumping, nok
        // get html elements
        var elem = document.querySelector('#tank' + id);
        this.tank = elem.querySelector('.tank');
        this.pump = elem.querySelector('.pump');
        this.turbine = elem.querySelector('.turbine');
        this.tube = elem.querySelector('.tube');
        this.status = elem.querySelector('.status');
        // set the initial status
        this.setState(state);
    }
}

const tanks = [
    new Tank(0, 'Tank Title', 'ok'),
    new Tank(1, 'Tank Title', 'pumping'),
    new Tank(2, 'Tank Title', 'nok'),
    new Tank(3, 'Tank Title')
]

//tanks[0].setState('pumping');

function update(id, state) {
    // TODO: finish function
}


// TODO...
// Network code should go here.
// Call the update function with the id and status.