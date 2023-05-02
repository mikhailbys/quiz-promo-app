export enum SignUpFields {
    login = 'login',
    password = 'password',
    passwordRepeat = 'passwordRepeat'
}

export const SignUpFieldLabels = {
    [SignUpFields.login]: 'Имя пользователя',
    [SignUpFields.password]: 'Пароль',
    [SignUpFields.passwordRepeat]: 'Повторите пароль'
}