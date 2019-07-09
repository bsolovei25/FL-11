let email = prompt('enter your email address = ');
let newpass;
let tmp;
let six = 6;
let five = 5;
let password;
let ok = true;
if (!email || email === null) {
    alert('Canceled');
}else {
    if (email.length < six) {
        alert('I dont know any emails having name length less than 6 symbols');
    }else {
        if (email==='admin@gmail.com' || email==='user@gmail.com') {
            tmp = prompt('enter your password = ')
            if (!tmp) {
                alert('Canceled');

            }else {
                password = tmp;

                switch (email) {
                    case 'user@gmail.com':
                        if (password !== 'UserPass') {
                            alert('Wrong password');
                            ok = false;

                        }
                        break;
                    case 'admin@gmail.com':
                        if (password !== 'AdminPass') {
                            alert('Wrong password');
                            ok = false;
                        }
                        break;
                    default:
                        ok = false;
                }

                if (ok) {
                    if (!confirm('Do you want to change your password?')) {
                        alert('You have failed the change');
                    }else {
                        if (password === prompt('write old password = ')){
                            if (!password || password === null) { 
                                alert('Canceled');
                            }else {
                                newpass = prompt('enter new password = ');
                                if (!newpass || newpass === null) {
                                    alert('Canceled');
                                }else if (newpass.length < five) {
                                    alert('It’s too short password. Sorry.');
                                }else {
                                    newpass = prompt('Enter it again = ');
                                    if (newpass !== password) {
                                        alert('You wrote the wrong password.');
                                    }else {
                                        alert('You have successfully changed your password.');
                                    }
                                }
                            }
                        }else {
                            alert('You have failed the change');
                        }
                    }
                }
            }
        }else {
            alert('I don’t know you');
        }
    }
}