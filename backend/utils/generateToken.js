import jwt from 'jsonwebtoken';

const generateToken = (res, userId) => {
    const token = jwt.sign({userId}, "murlidhar@murlidhar", {
        expiresIn: '50d',
    });

    res.cookie('jwt', token, {
        httpOnly: true,
        secure: true,
        sameSite: 'strict',
        maxAge: 50 * 24 * 60 * 60 * 1000,
    });
};

export default generateToken;