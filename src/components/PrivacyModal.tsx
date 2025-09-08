import React from 'react';
import Modal from './ui/modal';

type PrivacyModalProps = { isOpen: boolean; onClose: () => void };

const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose} title="Privacy Policy" size="lg">
            <div className="prose prose-gray max-w-none">
                <div className="space-y-6">
                    <section>
                        <h3 className="text-xl font-semibold text-foreground mb-3">1. Information We Collect</h3>
                        <p className="text-muted-foreground leading-relaxed mb-3">
                            We collect information you provide directly to us, such as when you create an account, use our services, or contact us.
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                            <li>Personal information (name, email, phone number)</li>
                            <li>Payment information (processed securely through third-party providers)</li>
                            <li>Location data (for driver matching and route optimization)</li>
                            <li>Usage data (app interactions, ride history)</li>
                            <li>Device information (device type, operating system)</li>
                        </ul>
                    </section>
                    <section>
                        <h3 className="text-xl font-semibold text-foreground mb-3">2. How We Use Your Information</h3>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                            <li>Provide and maintain our driver matching service</li>
                            <li>Process payments and manage subscriptions</li>
                            <li>Communicate with you about your account and rides</li>
                            <li>Improve our services and develop new features</li>
                            <li>Ensure safety and security of our platform</li>
                            <li>Comply with legal obligations</li>
                        </ul>
                    </section>
                    <section>
                        <h3 className="text-xl font-semibold text-foreground mb-3">3. Information Sharing</h3>
                        <p className="text-muted-foreground leading-relaxed">
                            We do not sell your personal information. We may share your information with:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground mt-3">
                            <li>Drivers (limited information for ride coordination)</li>
                            <li>Service providers (payment processing, analytics)</li>
                            <li>Legal authorities (when required by law)</li>
                            <li>Business partners (with your consent)</li>
                        </ul>
                    </section>
                    <section>
                        <h3 className="text-xl font-semibold text-foreground mb-3">4. Data Security</h3>
                        <p className="text-muted-foreground leading-relaxed">
                            We implement appropriate technical and organizational measures to protect your personal information against 
                            unauthorized access, alteration, disclosure, or destruction. This includes encryption, secure servers, and regular security audits.
                        </p>
                    </section>
                    <section>
                        <h3 className="text-xl font-semibold text-foreground mb-3">5. Your Rights</h3>
                        <p className="text-muted-foreground leading-relaxed mb-3">You have the right to:</p>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                            <li>Access your personal information</li>
                            <li>Correct inaccurate information</li>
                            <li>Delete your account and data</li>
                            <li>Opt out of marketing communications</li>
                            <li>Data portability (export your data)</li>
                        </ul>
                    </section>
                    <section>
                        <h3 className="text-xl font-semibold text-foreground mb-3">6. Cookies and Tracking</h3>
                        <p className="text-muted-foreground leading-relaxed">
                            We use cookies and similar technologies to improve your experience, analyze usage patterns, and provide personalized content. 
                            You can control cookie settings through your browser preferences.
                        </p>
                    </section>
                    <section>
                        <h3 className="text-xl font-semibold text-foreground mb-3">7. Children's Privacy</h3>
                        <p className="text-muted-foreground leading-relaxed">
                            Our service is not intended for children under 13. We do not knowingly collect personal information from children under 13. 
                            If we become aware of such collection, we will delete the information immediately.
                        </p>
                    </section>
                    <section>
                        <h3 className="text-xl font-semibold text-foreground mb-3">8. Changes to This Policy</h3>
                        <p className="text-muted-foreground leading-relaxed">
                            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page 
                            and updating the "Last updated" date.
                        </p>
                    </section>
                    <section>
                        <h3 className="text-xl font-semibold text-foreground mb-3">9. Contact Us</h3>
                        <p className="text-muted-foreground leading-relaxed">
                            If you have questions about this Privacy Policy, contact us at:
                            <br />
                            Email: privacy@fixdrive.tech
                            <br />
                            Address: Axivion LLC, [Your Address]
                        </p>
                    </section>
                    <div className="pt-4 border-t border-border">
                        <p className="text-sm text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default PrivacyModal;


