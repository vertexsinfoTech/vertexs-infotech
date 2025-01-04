$(function () {
    $.ajax({
        type: 'get',
        url: skycap.base_url + '/backend/api/projects/privacy_policy',
        success: function (res) {
            if (res) {
                $("#pp_content").html(res.response.policy_desc);
            }
        },
        error: function (err) {
            console.log(err);
        }
    });
});


