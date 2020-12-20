var AppModule = ng.core.NgModule({
    imports: [ng.platformBrowser.BrowserModule, ng.forms.FormsModule],
    declarations: [AppComponent, AsideComponent],
    bootstrap: [AppComponent]
  })
  .Class({
    constructor: function() { }
});