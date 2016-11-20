import '../less/style.less';
import ComponentBaseFactory from './ComponentBase.js';
let ComponentHeartFactory = (config) => {
   let Component = ComponentBaseFactory(config);
    var heart = $('<div class="heart3d"/>');
    for(let i = 1; i <= 36; i++){
        heart.append('<div class="rib'+ i +'"></div>')
    }
    Component.append(heart);
    return Component;
}

export default ComponentHeartFactory;