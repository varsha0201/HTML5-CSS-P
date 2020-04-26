var tour = new Tour({
    storage: false
});
tour.addSteps(
    [
        {
            element:'#col-1',
            placement:'bottom',
            title:'Live class',
            content:'you can attend live classes. <br> <input type="text" id="name"/>',
            onNext: function(){
                name = $('#name').val();
                console.log('next button pressed');
            }
        },
        {
            element:'#col-2',
            placement:'bottom',
            title:'Flexiable class',
            content: function(){
                return name + ',you can attend live classes';}

        },
        {
            element:'#col-3',
            placement:'bottom',
            title:'24*7 class',
            content:'you can attend live classes'

        },
        {
            orphan:true,
            title: 'Thnak you',
            backdrop: true,
            placement:'top',
            content:'Thank you for visiting'
        }
    ]
);

$(document).ready(function(){
    $('#start-tour').on('click', function($event){
        tour.init();
        tour.start();
        $event.preventDefault();

    });
})
