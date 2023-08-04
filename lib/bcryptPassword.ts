import bcrypt from 'bcryptjs';

export const encodedPassword = (password: string) => {
    let salt = bcrypt.genSaltSync(10);
    const newPassword = bcrypt.hashSync(password, salt);
    return newPassword;
}

export const comparePassword = (password: string, hash: string) => {
    console.log(password, ' - ', hash);
    
    return bcrypt.compareSync(password, hash);
}