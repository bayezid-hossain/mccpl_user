import { connect } from '@/dbConfig/dbConfig';
import User from '@/models/userModel';
import { NextRequest, NextResponse } from 'next/server';
import { generateOtp } from '@/helpers/sendSms';

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { mobile } = reqBody;
    const otp = generateOtp();

    // Check if user exists
    let user = await User.findOne({ mobile });

    if (!user) {
      // Create a new user if not exists
      const newUser = new User({
        mobile,
        otp,
      });
      console.log('Creating new user');
      user = await newUser.save();
    } else {
      // Update existing user's otp
      console.log('Updating existing user');
      user.otp = otp;
      await user.save();
    }

    const response = NextResponse.json({
      message: 'Otp sent',
      success: true,
    });
    console.log(user);
    return response;
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
