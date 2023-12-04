import { connect } from '@/dbConfig/dbConfig';
import User from '@/models/userModel';
import { NextRequest, NextResponse } from 'next/server';
import { generateOtp } from '@/helpers/sendSms';

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { mobile } = reqBody;
    let user = await User.findOne({ mobile });
    if (user) {
      if (new Date().getTime() < user.otpCooldown) {
        return NextResponse.json(
          {
            error: 'Please wait before requesting too many times',
            cooldownTime: user.otpCooldown,
          },
          { status: 400 }
        );
      }
    }
    const otp = generateOtp();
    const otpExpire = getCooldownTime(10);
    const otpCooldown = getCooldownTime(1.5);

    if (!user) {
      // Create a new user if not exists
      const newUser = new User({
        mobile,
        otp,
        otpExpire,
        otpCooldown,
      });
      // console.log('Creating new user');
      user = await newUser.save();
    } else {
      // Update existing user's otp
      // console.log('Updating existing user');
      user.otp = otp;
      user.otpExpire = otpExpire;
      user.otpCooldown = otpCooldown;

      await user.save();
    }
    const response = NextResponse.json({
      message: 'Otp sent',
      success: true,
    });
    // console.log(user);
    return response;
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

function getCooldownTime(minutes: number) {
  var currentDate = new Date();
  currentDate.setTime(currentDate.getTime() + minutes * 60 * 1000);
  const timestamp = currentDate.getTime();
  return timestamp;
}
