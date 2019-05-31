function registerPost (params, callback) {
	$.ajax({
        type: params.type,
        url: params.url,
        data: params.data,
        dataType: params.dataType,
        success: function (res) {
          callback && callback(res)
        }
    })
}