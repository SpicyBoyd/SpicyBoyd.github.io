// 1
function currentImage1(index) {
    $("#image_demo_1").carousel(index);
    $("#image_selector_1 .image_style")[index].className += " active";
}

$(document).ready(function() {
    $("#prev_1").click(function() {
        $("#image_demo_1").carousel("prev");
    });

    $("#next_1").click(function() {
        $("#image_demo_1").carousel("next");
    });

    $("#cycle_btn_1").click(function() {
        $("#image_demo_1").carousel("cycle");
    });

    $("#pause_btn_1").click(function() {
        $("#image_demo_1").carousel("pause");
    });

    $("#image_demo_1").on('slide.bs.carousel', function(event) {
        var index = event.to;
        var download = '<a href="../img/CoastLine/' + coastLine[index].src +
            '.jpg" download><button class="btn btn-info"><i class="fa fa-download"></i> 下載</button></a>';
        var enlarge = '<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#modal_1"><i class="fa fa-search-plus"></i> 放大</button><div class="modal" id="modal_1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal">&times;</button></div><div class="modal-body"><img src="../img/CoastLine/' +
            coastLine[index].src + '.jpg" class="col-md-12 rounded"></div></div></div></div>';

        $("#enlarge_btn_1").html(enlarge);
        $("#download_btn_1").html(download);
    });

    $("#image_demo_1").on('slid.bs.carousel', function(event) {
        for (var i = 0; i < coastLine.length; i++) {
            $("#image_selector_1 .image_style")[i].className = $("#image_selector_1 .image_style")[i].className.replace(" active", "");
        }

        var index = event.to;
        $("#image_selector_1 .image_style")[index].className += " active";
    });
});

// 2
function currentImage2(index) {
    $("#image_demo_2").carousel(index);
    $("#image_selector_2 .image_style")[index].className += " active";
}

$(document).ready(function() {
    $("#prev_2").click(function() {
        $("#image_demo_2").carousel("prev");
    });

    $("#next_2").click(function() {
        $("#image_demo_2").carousel("next");
    });

    $("#cycle_btn_2").click(function() {
        $("#image_demo_2").carousel("cycle");
    });

    $("#pause_btn_2").click(function() {
        $("#image_demo_2").carousel("pause");
    });

    $("#image_demo_2").on('slide.bs.carousel', function(event) {
        var index = event.to;
        var download = '<a href="../img/GreenIsland/' + greenIsland[index].src +
            '.jpg" download><button class="btn btn-info"><i class="fa fa-download"></i> 下載</button></a>';
        var enlarge = '<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#modal_2"><i class="fa fa-search-plus"></i> 放大</button><div class="modal" id="modal_2"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal">&times;</button></div><div class="modal-body"><img src="../img/GreenIsland/' +
            greenIsland[index].src + '.jpg" class="col-md-12 rounded"></div></div></div></div>';

        $("#enlarge_btn_2").html(enlarge);
        $("#download_btn_2").html(download);
    });

    $("#image_demo_2").on('slid.bs.carousel', function(event) {
        for (var i = 0; i < greenIsland.length; i++) {
            $("#image_selector_2 .image_style")[i].className = $(".image_style")[i].className.replace(" active", "");
        }

        var index = event.to;
        $("#image_selector_2 .image_style")[index].className += " active";
    });
});