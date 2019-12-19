export default class Elements {
    constructor() {
        this.elementClasses = {};
    };

    getElementClass(name) {
        switch (name) {
            case 'Earth':
                return new Earth;
                break;
        
            case 'Water':
                return new Water;
                break;
        
            case 'Air':
                return new Air;
                break;
        
            case 'Fire':
                return new Fire;
                break;
        
            case 'Mud':
                return new Mud;
                break;
            case 'Stone':
                return new Stone;
                break;
            case 'Lightning':
                return new Lightning;
                break;

            case 'Sand':
                return new Sand;
                break;

            case 'Fog':
                return new Fog;
                break;

            case 'Cloud':
                return new Cloud;
                break;

            case 'Steam':
                return new Steam;
                break;

            case 'Ice':
                return new Ice;
                break;

            case 'SunLight':
                return new SunLight;
                break;

            case 'Glass':
                return new Glass;
                break;

            case 'Moon':
                return new Moon;
                break;

            case 'DNA':
                return new DNA;
                break;
                
            case 'Clay':
                return new Clay;
                break;
        };
    };

    getNewElemId(elem1, elem2) {
        return elem1.connectMaterial[elem2.id]
    };
};

class Earth extends Elements {
    constructor() {
        super();
        this.id = 'Earth';
        this.title = 'Земля';
        this.connectMaterial = {
            Water: 'Mud',
            Fire: 'Stone',
        };
    };
};

class Water extends Elements {
    constructor() {
        super();
        this.id = 'Water';
        this.title = 'Вода';
        this.connectMaterial = {
            Earth: 'Mud',
            Air: 'Fog',
            Fog: 'Ice',
            Fire: 'Steam',
        };
    };
};

class Air extends Elements {
    constructor() {
        super();
        this.id = 'Air';
        this.title = 'Воздух';
        this.connectMaterial = {
            Fire: 'Lightning',
            Stone: 'Sand',
            Water: 'Fog',
            Fog: 'Cloud',
        };
    };
};

class Fire extends Elements {
    constructor() {
        super();
        this.id = 'Fire';
        this.title = 'Огонь';
        this.connectMaterial = {
            Fire: 'Stone',
            Air: 'Lightning',
            Water: 'Steam',
            Lightning: 'SunLight',
            Sand: 'Glass',
        };
    };
};

class Mud extends Elements {
    constructor() {
        super();
        this.id = 'Mud';
        this.title = 'Грязь';
        this.connectMaterial = {
            Lightning: 'DNA',
            Sand: 'Clay',
        };
    };
};

class Stone extends Elements {
    constructor() {
        super();
        this.id = 'Stone';
        this.title = 'Камень';
        this.connectMaterial = {
            Air: 'Sand',
            SunLight: 'Moon',
        };
    };
};

class Lightning extends Elements {
    constructor() {
        super();
        this.id = 'Lightning';
        this.title = 'Молния';
        this.connectMaterial = {
            Fire: 'SunLight',
            Mud: 'DNA',
        };
    };
};

class Sand extends Elements {
    constructor() {
        super();
        this.id = 'Sand';
        this.title = 'Песок';
        this.connectMaterial = {
            Fire: 'Glass',
            Mud: 'Clay',
        };
    };
};

class Fog extends Elements {
    constructor() {
        super();
        this.id = 'Fog';
        this.title = 'Туман';
        this.connectMaterial = {
            Air: 'Cloud',
            Water: 'Ice',
        };
    };
};

class Cloud extends Elements {
    constructor() {
        super();
        this.id = 'Cloud';
        this.title = 'Облако';
        this.connectMaterial = {
            
        };
    };
};

class Steam extends Elements {
    constructor() {
        super();
        this.id = 'Steam';
        this.title = 'Пар';
        this.connectMaterial = {
            
        };
    };
};

class SunLight extends Elements {
    constructor() {
        super();
        this.id = 'SunLight';
        this.title = 'Солнченый свет';
        this.connectMaterial = {
            Stone: 'Moon',
        };
    };
};

class Glass extends Elements {
    constructor() {
        super();
        this.id = 'Glass';
        this.title = 'Стекло';
        this.connectMaterial = {
            
        };
    };
};

class Moon extends Elements {
    constructor() {
        super();
        this.id = 'Moon';
        this.title = 'Луна';
        this.connectMaterial = {
            
        };
    };
};

class DNA extends Elements {
    constructor() {
        super();
        this.id = 'DNA';
        this.title = 'ДНК';
        this.connectMaterial = {
            
        };
    };
};

class Clay extends Elements {
    constructor() {
        super();
        this.id = 'Clay';
        this.title = 'Глина';
        this.connectMaterial = {
            
        };
    };
};