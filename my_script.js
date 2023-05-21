$(document).ready(function(){
    $("#form").submit(function() {
        var form_data = $(this).serialize(); 
        $.ajax({
            type: "POST",
            url: "telegram.php",
            data: form_data,
            success: swal({
                title: "Ваш вопрос успешно отправлен.",
                icon: "success",
                timer: 2000
            })
        });
        // $('#button').prop('disabled', true);
        event.preventDefault();
        
        // Стирание информации из полей после отправки формы
        $('#name').val('');
        $('#email').val('');
        $('#text').val('');
    });
});
