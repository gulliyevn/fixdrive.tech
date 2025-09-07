import React from 'react';
import Modal from './ui/modal';

const TermsModal = ({ isOpen, onClose }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose} title="Terms of Service" size="lg">
            <div className="prose prose-gray max-w-none">
                <div className="space-y-6">
                    <section>
                        <h3 className="text-xl font-semibold text-foreground mb-3">1. Acceptance of Terms</h3>
                        <p className="text-muted-foreground leading-relaxed">
                            By accessing and using FixDrive services, you accept and agree to be bound by the terms and provision of this agreement. 
                            These Terms of Service govern your use of our personal driver subscription service.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-xl font-semibold text-foreground mb-3">2. Service Description</h3>
                        <p className="text-muted-foreground leading-relaxed">
                            FixDrive provides subscription-based personal driver services, connecting users with trusted drivers on fixed schedules. 
                            Our service includes driver matching, scheduling, payment processing, and customer support.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-xl font-semibold text-foreground mb-3">3. User Responsibilities</h3>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                            <li>Provide accurate personal and contact information</li>
                            <li>Respect drivers and maintain appropriate behavior</li>
                            <li>Follow safety guidelines and local traffic laws</li>
                            <li>Pay subscription fees and additional charges on time</li>
                            <li>Report any safety concerns immediately</li>
                        </ul>
                    </section>

                    <section>
                        <h3 className="text-xl font-semibold text-foreground mb-3">4. Subscription and Billing</h3>
                        <p className="text-muted-foreground leading-relaxed">
                            Subscription fees are billed monthly or annually as selected. All fees are non-refundable except as required by law. 
                            You may cancel your subscription at any time through your account settings.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-xl font-semibold text-foreground mb-3">5. Safety and Insurance</h3>
                        <p className="text-muted-foreground leading-relaxed">
                            All drivers undergo background checks and maintain appropriate insurance. FixDrive maintains liability insurance 
                            for rides conducted through our platform. Users are responsible for their personal belongings.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-xl font-semibold text-foreground mb-3">6. Limitation of Liability</h3>
                        <p className="text-muted-foreground leading-relaxed">
                            FixDrive's liability is limited to the amount paid for the service. We are not liable for indirect, incidental, 
                            or consequential damages arising from the use of our service.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-xl font-semibold text-foreground mb-3">7. Contact Information</h3>
                        <p className="text-muted-foreground leading-relaxed">
                            For questions about these terms, contact us at:
                            <br />
                            Email: legal@fixdrive.tech
                            <br />
                            Address: Axivion LLC, [Your Address]
                        </p>
                    </section>

                    <div className="pt-4 border-t border-border">
                        <p className="text-sm text-muted-foreground">
                            Last updated: {new Date().toLocaleDateString()}
                        </p>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default TermsModal;
