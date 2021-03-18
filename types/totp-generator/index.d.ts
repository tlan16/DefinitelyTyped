declare module "totp-generator" {
    function OTP(secret: string): string;
    export = OTP;
}
