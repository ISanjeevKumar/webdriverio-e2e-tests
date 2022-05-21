class LoginPage {

    get username() {
        return $("input[id='user-name']")
    }

    get password() {
        return $("input[id='password']")
    }

    get btnSubmit() {
        return $("input[id='login-button']")

    }

    async login(username, password) {
        await this.username.setValue(username);
        await this.password.setValue(password);
        await this.btnSubmit.click();
    }

}

module.exports = new LoginPage();