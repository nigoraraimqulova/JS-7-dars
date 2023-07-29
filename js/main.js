let users = [
    {
        login: "MDK91",
        password: "12345"
    }
];
$(document).ready(function (){
    $(".btn-success").click(function (){
        let login = $("#login").val();
        let password = $("#password").val();
        let num = false
        if (login == '') {
            alert("login qatorini to'ldiring!");
        }else if (password == '') {
            alert("Parol qatorini to'ldiring!")
        }else {
            if (users.length !=0){
                users.forEach(function (item){
                    if (login == item.login){
                        num = true;
                    }
                });
                if (num) {
                    alert("Bunday user mavjud!");
                }else{
                    alert("Zo'r! Siz ro'yxatdan o'tingiz!");
                    users.push({login: login, password: password});
                }
            }

        if (users.length !=0){
            users.forEach(function (item){
                if (login == item.login){
                    if (password == item.password){
                        num = true;
                        alert("Zo'r! Siz tizinga kirdingiz!")
                    }
                    else{
                        alert("Parolingiz noto'g'ri!");
                    }
                }
            });
            if (!num){
                alert("Haliyam ro'yxatdan o'tmadingiz!");
            }
        }else{
            alert("Siz hali ro'yxatdan o'tmadingiz. Iltimos, ro'yxatdan o'ting!")
        }
    }
    $(".btn-link").click(function (){
        let login = $("#login").val();
        let password = $("#password").val();
        let num = false;

        if (login == '') {
            alert("login qatorini to'ldiring!");
        }else if (password == '') {
            alert("Parol qatorini to'ldiring!")
        }else {
            if (users.length !=0){
                users.forEach(function (item){
                    if (login == item.login){
                        num = true;
                    }
                });
                if (num) {
                    alert("Bunday user mavjud!");
                }else{
                    users.push({login: login, password: password});
                }
            }
            else{
                users.push({login: login, password: password});
            }
            console.log(users);
        }
    })
})