class ElectronicItem {
    constructor (img, name, country, brend, diagonal, price) {
        this.img = img;
        this.name = name;
        this.country = country;
        this.brend = brend;
        this.diagonal = diagonal;
        this.price = price;
    }
    fullDescribtion() {
        return `Страна производитель ${this.country}, диагональ экрана ${this.diagonal}"`;
    }
}
class SmartPhone extends ElectronicItem {
    constructor(img, name, country, brend, diagonal, memory, price) {
        super(img, name, country, brend, diagonal, price);
        this.type = 'Смартфон';
        this.memory = memory;
    }
    fullDescribtion() {
        return `${super.fullDescribtion()}, ${this.memory}ГБ встроенной памяти`;
    }  
}
class Notebook extends ElectronicItem {
    constructor(img, name, country, brend, diagonal, screen, price) {
        super(img, name, country, brend, diagonal, price);
        this.type = 'Ноутбук';
        this.screen = screen;
    }
    fullDescribtion() {
        return `${super.fullDescribtion()}, LAN/Wi-Fi/Bluetooth/веб-камера`;
    }  
}
class Tablet extends ElectronicItem {
    constructor(img, name, country, brend, diagonal, battery, price) {
        super(img, name, country, brend, diagonal, price);
        this.type = 'Планшет';
        this.battery = battery;
    }
    fullDescribtion() {
        return `${super.fullDescribtion()}, батарея ${this.battery} часов/ Bluetooth 5.0 /основная двойная камера 12 Мп + 10 Мп, фронтальная - 7 Мп`;
    }  
}
 
const AppComponent = ng.core.Component({
    selector: 'my-app',
    template:  `<div class="bg-light">
    <div class="container d-flex flex-column shadow-sm bg-white p-0">
        <header class="container header d-flex flex-column align-items-center">
            <h1>Filters</h1>
            <div class="container filters_checked d-flex flex-wrap flex-row">
            </div>
        </header>
        <div class="container main d-flex">
            <aside class="aside d-flex flex-column">
            <aside-comp class="filter d-flex flex-column"></aside-comp>
                <div class="filter d-flex flex-column">
                </div>
                <div class="priceFilter d-flex flex-column">
                    <span>Цена, грн:</span> 
                    <form class="d-flex flex-row" name = "priceValue">
                        <input type="number" class="form-control" name="minPrice" value=""> 
                        <input type="number" class="form-control" name="maxPrice" value="">
                        <button type="button" class="btn btn-primary" name="priceBtn">ОК</button>
                    </form>
                </div>
            </aside>
            <main class="main_content d-flex flex-wrap align-items-start align-content-start">
                    <div *ngFor="let item of listOfSomeItems" class="card">
                        <img src="{{item.img}}" class="card-img-top" alt="здесь могла быть Ваша реклама">
                        <div class="card-body">
                            <h6><a class="card-title" href="#">{{item.name}}</a></h6>
                            <p class="card-text">{{item.fullDescribtion()}}</p>
                            <div class="d-flex justify-content-between">
                                <span class="font-weight-bold text-danger">{{item.price.toLocaleString()}} &#8372;</span>
                                <button type="button" class="btn btn-primary"></button>
                            </div>
                        </div>
                    </div>
            </main>
        </div>
    </div> 
</div>`
    })

  .Class({
    constructor: function() { 
        this.listOfSomeItems= [
            new SmartPhone('sf.jpg','Мобильный телефон Xiaomi Mi 10T','Китай', 'Xiaomi', '5.5', 128, 7000),
            new SmartPhone('sf.jpg', 'Мобильный телефон Samsung Galaxy S20','Китай', 'Samsung', '6', 128, 28000),
            new SmartPhone('sf.jpg', 'Мобильный телефон Samsung Galaxy A51', 'Корея', 'Samsung', '5.5', 64, 9000),
            new Notebook('note.jpg', 'Ноутбук Acer Aspire 5 A515-55G', 'Корея', 'Acer', '15.5', 'Full HD', 29000),
            new Notebook('note.jpg', 'Ноутбук Asus ROG Strix G15 G512LU-HN093', 'Китай', 'Acus', '16', 'Full HD', 20000),
            new Notebook('note.jpg', 'Ноутбук Samsung ROG Strix G15 G512LU-HN093', 'Россия', 'Samsung', '18', 'Full HD', 18000),
            new Tablet('tab.jpg', 'Планшет Samsung Galaxy Tab S6 Lite', 'Россия', 'Samsung', '12', 15, 7000),
            new Tablet('tab.jpg', 'Планшет Samsung Galaxy Tab S6 Lite', 'Корея', 'Samsung', '13', 18, 17000)
        ];
    }
});
 