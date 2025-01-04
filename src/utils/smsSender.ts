import twilio from 'twilio';

const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

export const sendSMS = async (phoneNumber: string, token: string) => {
  try {
    await client.messages.create({
      body: `Your WiFi access token is: ${token}`,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: phoneNumber
    });
  } catch (error) {
    console.error('Error sending SMS:', error);
  }
};
