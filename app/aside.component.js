var AsideComponent = ng.core.Component({
    selector: 'aside-comp',
    template:  `
        <fieldset *ngFor="let item of legendKey" class = "filter_property {{item}}" attr.property="{{item}}">
            <legend>{{legend[item]}}: </legend>
            <div *ngFor="let val of filter[item]" class="filter_item custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input"  id="customCheck{{index}} value={{val.name}}">
                <label class="custom-control-label" attr.for="customCheck{{index}}">{{val.name}}</label>
            </div>
        </fieldset>`
    })

  .Class({
    constructor: function() { 
        this.index = 1;
        this.filter = {
            type: [{name: 'Смартфон'},{name: 'Ноутбук'}],
            country: [{name: 'Китай'},{name: 'Корея'}],
            brend: [{name: 'Samsung'},{name: 'Sony'}],
            diagonal: [{name: 5},{name: 6.5}] 
        };
        
        this.legend = {
            type: 'Тип устройства',
            country: 'Страна производитель',
            brend: 'Бренд',
            diagonal: 'Диагональ экрана'
        }
        this.legendKey = Object.keys(this.legend);
    }
    
    
}); 

        