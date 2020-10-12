$(document).ready(function () {

  // $.getJSON("/src/assets/items.json", function(res) {
  //     console.log(res.items.name)
  // })

// JSON DATA
var itemsList = {
    "items": [
      {
        "name": "Samsung Series 4",
        "image": "https://rukminim1.flixcart.com/image/670/600/allinonedesktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-inteliris-original-imaeh5h83fuzbksz.jpeg?q=90",
        "price": {
          "actual": 13999,
          "display": 22500
        },
        "discount": 37
      },
      {
        "name": "Samsung Super 6",
        "image": "https://rukminim1.flixcart.com/image/670/600/allinonedesktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-inteliris-original-imaeh5h83fuzbksz.jpeg?q=90",
        "price": {
          "actual": 35999,
          "display": 66900
        },
        "discount": 46
      },
      {
        "name": "Samsung The Frame",
        "image": "https://rukminim1.flixcart.com/image/670/600/allinonedesktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-inteliris-original-imaeh5h83fuzbksz.jpeg?q=90",
        "price": {
          "actual": 84999,
          "display": 133900
        },
        "discount": 36
      },
      {
        "name": "Thomson B9 Pro",
        "image": "https://rukminim1.flixcart.com/image/670/600/allinonedesktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-inteliris-original-imaeh5h83fuzbksz.jpeg?q=90",
        "price": {
          "actual": 9999,
          "display": 16999
        },
        "discount": 41
      },
      {
        "name": "LG Ultra HD",
        "image": "https://rukminim1.flixcart.com/image/670/600/allinonedesktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-inteliris-original-imaeh5h83fuzbksz.jpeg?q=90",
        "price": {
          "actual": 39990,
          "display": 79990
        },
        "discount": 50
      },
      {
        "name": "Vu Ready LED TV",
        "image": "https://rukminim1.flixcart.com/image/670/600/allinonedesktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-inteliris-original-imaeh5h83fuzbksz.jpeg?q=90",
        "price": {
          "actual": 7999,
          "display": 17e3
        },
        "discount": 52
      },
      {
        "name": "Koryo Android TV",
        "image": "https://rukminim1.flixcart.com/image/670/600/allinonedesktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-inteliris-original-imaeh5h83fuzbksz.jpeg?q=90",
        "price": {
          "actual": 55999,
          "display": 199990
        },
        "discount": 71
      },
      {
        "name": "Micromax LED Smart",
        "image": "https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-inteliris-original-imaeh5h83fuzbksz.jpeg?q=90",
        "price": {
          "actual": 9999,
          "display": 27990
        },
        "discount": 64
      }
    ]
  }


  var itemCountId = 0;
$.each(itemsList.items, function(key, value) {
    $(".tile-view-container").append(`
        <div class="item-details-container" data-id = "itemId-` + itemCountId + `">
            <div class="item-image-section">
                <div class="item-discount">` + value.discount + `% off</div>
                <img src="` + value.image + `">
            </div>
            <div class="item-details-section">
                <div class="item-name">` + value.name + `</div>
                <div class="item-details">
                    <div class="item-price">
                        <span class="item-display-price">$` + value.price.display + `</span>
                        <span class="item-actual-price">$` + value.price.actual + `</span>
                    </div>
                    <button class="add-to-cart-btn"> Add to Cart </button>
                </div>
            </div>
        </div>
    `)
    itemCountId++;
})

$(".add-to-cart-btn").on('click',function(){
    $(".header-toast-msg").empty();
    $(this).text("Added to cart");
    $(this).css('cursor','not-allowed');
    $(this).prop("disabled", true);
    var itemUniqueId = $(this).parents(".item-details-container").attr("data-id");
    var itemName = $(this).parents(".item-details-section").find(".item-name").text();
    var itemImg = $(this).parents(".item-details-container").find(".item-image-section img").attr("src");
    var itemDisplayPrice = $(this).parent().find(".item-display-price").text();
    var itemActualPrice = $(this).parent().find(".item-actual-price").text();
    $(".header-container").append(`<div class="header-toast-msg"> <span>` + itemName +` is added to cart </span></div>`);
    $(".added-items-list").append(`<div class="added-item" data-id ="` + itemUniqueId +` ">
                                        <div class="added-item-details">
                                            <div class="item-name-img">
                                                <div>
                                                    <img src="` + itemImg + `">
                                                </div>   
                                                <span class=added-item-name>` + itemName + `</span> 
                                                <div class="remove-item">x</div>
                                            </div>
                                            
                                        </div>
                                        <div class=item-add-sub> 
                                            <input type="button" value="-" class="sub" >
                                            <input type="text" size="10" value="1" class="totalCount">
                                            <input type="button" value="+" class="add" >
                                        </div>
                                        <div class="added-item-price">` + itemDisplayPrice + `</div>
                                        <div class="added-disc-price" style="display:none;">` + itemActualPrice + `</div>
                                    </div>`);
    setTimeout(function(){
        $('.header-toast-msg').hide();
    }, 3000);

    var itemCount = $(".added-item").length;
    $(".total-items-added").text('Items' + '(' + itemCount + ')');

    var itemPriceAdd = $(".added-item-price").text().split('$');
    var totalItemPrice = itemPriceAdd.reduce(function(a, b){
        return a*1 + b*1;
    });
    $(".total-price").text('$' + totalItemPrice);
    


});

$(".added-items-list").on('click',".remove-item",function(){
    var cartItemId = $(this).closest(".added-item").attr("data-id");
    $("[data-id= " + cartItemId + " ]").find(".add-to-cart-btn").text("Add to cart");
    $(this).parents(".added-item").remove();

    var itemPriceSub = $(this).closest(".added-item").find(".added-item-price").text().split('$')[1];
    $(".total-price").text('$' + (parseInt($(".total-price").text().split('$')[1])-(itemPriceSub)));

    var itemCountRemove = $(".added-item").length;
    $(".total-items-added").text('Items' + '(' + itemCountRemove + ')');
});

$(".added-items-list").on('click',".add",function(){
    var  count = parseInt($(this).closest(".added-item").find(".totalCount").val());
    $(this).closest(".added-item").find(".totalCount").val(count + 1);
    var itemPriceAdd = $(this).closest(".added-item").find(".added-item-price").text().split('$')[1];
    var singleItemPriceAdd = itemPriceAdd/count;
    var newitemPrice = singleItemPriceAdd*(count + 1);
    $(this).closest(".added-item").find(".added-item-price").text('$'+ newitemPrice);
    $(".total-price").text('$' + (parseInt($(".total-price").text().split('$')[1])+(singleItemPriceAdd)));
})
$(".added-items-list").on('click',".sub",function(){
    var  count = parseInt($(this).closest(".added-item").find(".totalCount").val());
    if (count > 1) {
        $(this).closest(".added-item").find(".totalCount").val(count - 1);
        var itemPriceSub = $(this).closest(".added-item").find(".added-item-price").text().split('$')[1];
        var singleItemPriceSub = itemPriceSub/count;
        var newitemPriceSub = singleItemPriceSub*(count - 1);
        $(this).closest(".added-item").find(".added-item-price").text('$'+ newitemPriceSub);
        $(".total-price").text('$' + (parseInt($(".total-price").text().split('$')[1])-(singleItemPriceSub)));
    }  
})


//   $.ajax({
//     type: "GET",
//     dataType: "json",
//     url: "../../../data/items.json",
//     success: function (data) {
//       console.log(data);
//     },
//   });
});
