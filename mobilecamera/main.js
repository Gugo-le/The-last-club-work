window.onload = function() {
    // 카메라 버튼
    $("input[type=button]").click(function() {
        $("#photoFile").click();
    });

    // 사진 선택 후
    $("#photoFile").on('change', function() {

        // 파일명만 추출
        if (window.FileReader) { // modern browser
            var filename = $(this)[0].files[0].name;
        } else { // old IE
            var filename = $(this).val().split('/').pop().split('\\').pop(); // 파일명만 추출
        }

        // var fileSize = document.getElementById("photoFile").files[0].size;
        // console.log( "파일사이즈 : " + $("#photoFile")[0].files[0].size );
        console.log("파일사이즈 : " + $(this)[0].files[0].size);
        console.log("파일명 : " + filename);

        LoadImg($("#photoFile")[0]);
    });
}

// 선택이미지 미리보기
function LoadImg(value) {
    if (value.files && value.files[0]) {

        var reader = new FileReader();

        reader.onload = function(e) {
            $('#photoImg').attr('src', e.target.result);
            $('#photoImg').show();
        }

        reader.readAsDataURL(value.files[0]);
    }
}