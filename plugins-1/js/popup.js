$(function(){
    chrome.storage.sync.get('total',function(budget){
        $('#total').text(budget.total)
    })
    $('#add').click(function(){
        chrome.storage.sync.get('total',function(budget){
            var totalAmout = 0;
            if(budget.total) {
                totalAmout = parseFloat(budget.total)
            }

            var amout = $('#amount').val()
            if (amout) {
                totalAmout += parseFloat(amout)
                chrome.storage.sync.set({'total':totalAmout})
            }

            $('#total').text(totalAmout)
            $('#amount').val('')
        })
    })
})