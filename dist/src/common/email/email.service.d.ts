export declare class EmailService {
    private transporter;
    constructor();
    sendConfirmationEmail(email: string, code: string): Promise<void>;
    sendPasswordRecoveryEmail(email: string, recoveryLink: string): Promise<void>;
}
