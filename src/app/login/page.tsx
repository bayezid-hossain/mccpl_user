'use client';
import Link from 'next/link';
import React, { ChangeEvent, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import Image from 'next/image';
export default function LoginPage() {
  const router = useRouter();
  const [cooldownSeconds, setCooldownSeconds] = React.useState(0);
  const [countdown, setCountdown] = React.useState(90); // Initial countdown value in seconds

  const [cooldownActive, setCooldownActive] = React.useState(false);

  const [user, setUser] = React.useState({
    mobile: '',
    otp: '',
  });
  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const handleMobileNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const regex = /^[0-9+]*$/;

    if (regex.test(inputValue)) {
      setUser({ ...user, mobile: e.target.value });
    }
  };
  const handleOtpChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const regex = /^[0-9]*$/;

    if (regex.test(inputValue)) {
      // Handle valid input
      setUser({ ...user, otp: e.target.value });
    }
  };

  const onLogin = async () => {
    try {
      if (
        (user.mobile.startsWith('+') && user.mobile.length != 14) ||
        (!user.mobile.startsWith('+') && user.mobile.length != 11)
      ) {
        toast.error('Invalid Mobile Number');
        return;
      }
      if (user.otp.length != 6) {
        toast.error('Invalid OTP Number');
        return;
      }
      setLoading(true);
      const response = await axios.post('/api/users/login', user);
      console.log('Login success', response.data);
      toast.success('Login success');
      router.push('/dashboard');
    } catch (error: any) {
      console.log(error);
      console.log('Login failed', error.message);
      console.log(error);
      toast.error(error.response.data.error);
    } finally {
      setLoading(false);
    }
  };

  const getOtp = async () => {
    if (cooldownActive) {
      toast.error('Cooldown active. Please wait before trying again.');
      return;
    }
    try {
      if (
        (user.mobile.startsWith('+88') && user.mobile.length != 14) ||
        (!user.mobile.startsWith('+') && user.mobile.length != 11)
      ) {
        toast.error('Invalid Mobile Number');
        return;
      }
      setLoading(true);
      const response = await axios.post('/api/users/otp/send', user);
      setCooldownActive(true);
      startCooldown();
      console.log('Otp Sent', response.data);
      toast.success('Otp Sent'); // Start cooldown when requesting OTP
    } catch (error: any) {
      console.log('Otp failed', error);
      toast.error(error.response.data.error);

      setCountdown(
        Math.round(
          ((error.response.data.cooldownTime as number as number) -
            new Date().getTime()) /
            1000
        )
      );
      startCooldown();
      setCooldownActive(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user.mobile.length > 10 && user.otp.length > 5) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);
  const startCooldown = () => {
    if (countdown == 0) setCountdown(90); // Reset countdown to the initial value

    const cooldownInterval = setInterval(() => {
      setCountdown((prevCountdown) => {
        const newCountdown = prevCountdown - 1;
        if (newCountdown <= 0) {
          clearInterval(cooldownInterval);
          setCooldownActive(false);
        }
        return newCountdown;
      });
    }, 1000);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-[url('/assets/login-bg.png')] bg-blue-950 bg-blend-normal text-black">
      <div className="h-full w-full flex flex-col items-center justify-center min-h-screen bg-[url('/assets/bg-grid.svg')] bg-cover sm:bg-contain">
        <div className="bg-white flex flex-col items-center justify-center p-12 max-w-[70vw]">
          <div className="w-full flex flex-col items-center justify-center mb-2">
            <Image
              src={'/assets/logo.png'}
              height={1000}
              width={1000}
              alt=""
              className="h-[60px] w-[60px] mr-4"
            />
            <h1 className="text-center text-lg font-semibold ">
              Mymensingh City Corporation
            </h1>
          </div>
          <Image
            src={'/assets/lock.png'}
            alt=""
            height={1000}
            width={1000}
            className="w-full h-auto"
          />
          <h4 className="text-center font-bold text-2xl m-4">
            Premises License Registration
          </h4>
          <div className="flex flex-col w-full p-4">
            <h1 className=" w-full text-center p-2 font-bold">
              {loading ? 'Processing' : 'Login'}
            </h1>
            <hr />

            <label htmlFor="Mobile Number" className="blue-border-label">
              <input
                type="text"
                className="peer text-input"
                id="mobile"
                value={user.mobile}
                placeholder="Enter Mobile number"
                pattern="[0-9+]*"
                onChange={handleMobileNumberChange}
                required
              />

              <span className="top-moving-span">Mobile Number</span>
            </label>

            <button
              onClick={getOtp}
              className={`p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 ${
                cooldownActive ? 'cursor-not-allowed opacity-50' : ''
              }`}
              disabled={cooldownActive}
            >
              Get OTP{' '}
              {cooldownActive &&
                `(${
                  countdown >= 60 ? `${Math.floor(countdown / 60)} minute ` : ''
                }${countdown % 60 > 0 ? `${countdown % 60} seconds` : ''})`}
            </button>
            <label htmlFor="OTP" className="blue-border-label">
              <input
                className="peer text-input"
                id="otp"
                type="otp"
                value={user.otp}
                onChange={handleOtpChange}
                placeholder="otp"
                required
              />

              <span className="top-moving-span">OTP</span>
            </label>

            <button
              onClick={onLogin}
              className={`p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 disabled:`}
              //   disabled={buttonDisabled}
            >
              Login here
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
