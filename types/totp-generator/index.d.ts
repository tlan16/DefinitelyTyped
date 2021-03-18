// Type definitions for totp-generator 0.0.8
// Project: https://github.com/bellstrand/totp-generator
// Definitions by: Frank Lan <https://github.com/tlan16>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module "totp-generator" {
    function OTP(secret: string): string;
    export = OTP;
}
