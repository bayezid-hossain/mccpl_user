import { connect } from '@/dbConfig/dbConfig';
import User from '@/models/userModel';
import { NextRequest, NextResponse } from 'next/server';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { mobile, otp } = reqBody;
    //check if user exists
    const user = await User.findOne({ mobile });
    if (!user) {
      return NextResponse.json(
        { error: 'User does not exist' },
        { status: 400 }
      );
    }

    //check if password is correct
    if (user.otp != otp) {
      return NextResponse.json(
        { error: 'Invalid otp or mobile number' },
        { status: 400 }
      );
    }
    //create token data
    const tokenData = {
      id: user._id,
      mobile: user.mobile,
    };
    //create token
    const token = await jwt.sign(tokenData, process.env.JWT_SECRET!, {
      expiresIn: '1d',
    });

    const response = NextResponse.json({
      message: 'Login successful',
      success: true,
    });
    response.cookies.set('token', token, {
      httpOnly: true,
      expires: process.env.COOKIE_EXPIRE,
    });

    return response;
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
