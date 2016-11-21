import '../less/pageComponent.less';
import ComponentBaseFactory from './ComponentBase.js';

import ComponentPolyLineFactory from './ComponentPolyLine.js';
import ComponentPieFactory from './ComponentPie.js';
import ComponentBarFactory from './ComponentBar.js';
import ComponentHeartFactory from './ComponentHeart.js';
import ComponentLiFactory from './ComponentLi.js';

$('html').on('touchmove',function(){
    console.log
    $('audio')[0].play();
})
let ManageObj = {
    init (name) {
        this.oContainer = $('<div/>').addClass(name);
        this.oContainer.appendTo($('body')).hide(); 
        return this;       
    },
    addPage (name) {
        this.oPage = $('<div class="section"/>').addClass(name);
        this.oPage.appendTo(this.oContainer);
        return this;
    },
    addComponent(config = {type: 'Bar'}) {
        let Component = null;
        switch (config.type) {
            case "Poly": 
                    Component = ComponentPolyLineFactory(config);
                break;
            case "Pie": 
                    Component = ComponentPieFactory(config);
                break;
            case "Bar":
                    Component = ComponentBarFactory(config);
                break;
            case "Heart":
                    Component = ComponentHeartFactory(config);
                break;
            case "Li":
                    Component = ComponentLiFactory(config);
                break;
            case "base":
            default:
                    Component = ComponentBaseFactory(config);   
        }
        this.oPage.append(Component);
        return this;
    },
    load () {
        this.oContainer.show();

        this.oContainer.fullpage({
            sectionsColor: ['green', 'red', 'deeppink',''],
            onLeave (index, nextIndex, direction) {
                // 扎找到离开页面
                $('.section').eq(index - 1).trigger('onLeave');
            },
            afterLoad (achorLink, index) {
                $('.section').eq(index - 1).trigger('onLoad');
            }
        });

        $('.section').on('onLeave', (e) => {
            $(e.target).find('.ComponentBase').trigger('cpLeave');
        });
        $('.section').on('onLoad', (e) => {
            $(e.target).find('.ComponentBase').trigger('cpLoad');
        })

        $('.section').eq(0).trigger('onLoad');
    }
}

export default ManageObj;