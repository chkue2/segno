$(function(){
    var cnt = 1;

    $(document).on('click', '.img_slider .img_prev', function(){
        cnt = cnt - 1;

        $('.se09_container').removeClass('on');
        $('#se09_0'+cnt).addClass('on');
    });

    $(document).on('click', '.img_slider .img_next', function(){
        cnt = cnt + 1;

        $('.se09_container').removeClass('on');
        $('#se09_0'+cnt).addClass('on');
    });


    $(document).on('click', '.contact_btn', function(){
        emailjs.init('user_1KMcY64rgbKrL2jkIfwiA');

        var name = $('#name').val();
        var comp = $('#comp').val();
        var tel = $('#tel').val();
        var email = $('#email').val();
        var content = $('#content').val();

        if(breakSpace(name) === ''){
            alert('이름을 입력해 주세요.');
            $('#name').focus();
            return;
        } else if(breakSpace(comp) === ''){
            alert('회사명을 입력해 주세요.');
            $('#comp').focus();
            return;
        } else if(breakSpace(tel) === ''){
            alert('전화번호를 입력해 주세요.');
            $('#tel').focus();
            return;
        } else if(breakSpace(email) === ''){
            alert('이메일을 입력해 주세요.');
            $('#email').focus();
            return;
        } if(breakSpace(content) === ''){
            alert('문의내용을 입력해 주세요.');
            $('#content').focus();
            return;
        } 

        var templateParams = {	
            //각 요소는 emailJS에서 설정한 템플릿과 동일한 명으로 작성!
            name: name,
            comp: comp,
            tel: tel,
            email: email,
            content: content
        };
                      
                      
        var lang = document.documentElement.lang;
        emailjs.send('service_hodkphm', 'template_l32sjul', templateParams)
        //emailjs.send('service ID', 'template ID', 보낼 내용이 담긴 객체)
                .then(function(response) {
                    if(lang === 'ko'){
                        alert('소중한 제안 감사합니다.\n제휴 내용에 따라 담당자에게 전달되며, 검토 후 제휴가 진행됩니다.');   
                    } else {
                        alert('Thank you for contacting Onnuri International.\nYour request for assistance has been registered.\nOur team will respond to your case as soon as possible.');   
                    }
                    history.go(0);
                }, function(error) {
                    if(lang === 'ko'){
                        alert('메일 전송에 실패하였습니다.');   
                    } else {
                        alert('Delivery Status Notification (Failure)');   
                    }
                });
    });

});

function breakSpace(str){
    if(str === '') return '';
    return str.replace(/ /gi, '');
}