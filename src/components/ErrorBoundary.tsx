import React from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';

type ErrorBoundaryProps = { children: React.ReactNode };
type ErrorBoundaryState = { hasError: boolean; error: Error | null };

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error: Error): ErrorBoundaryState {
        return { hasError: true, error };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        console.error('ErrorBoundary caught an error:', error, errorInfo);
    }

    handleRetry = () => {
        this.setState({ hasError: false, error: null });
    };

    render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen flex items-center justify-center bg-background">
                    <div className="text-center p-8 max-w-md mx-auto">
                        <div className="mb-6">
                            <AlertTriangle className="w-16 h-16 text-destructive mx-auto mb-4" />
                            <h1 className="text-2xl font-bold text-foreground mb-2">Oops! Something went wrong</h1>
                            <p className="text-muted-foreground mb-6">We're sorry, but something unexpected happened. Please try refreshing the page.</p>
                        </div>
                        <div className="space-y-4">
                            <Button onClick={this.handleRetry} className="w-full">
                                <RefreshCw className="w-4 h-4 mr-2" />
                                Try Again
                            </Button>
                            <Button variant="outline" onClick={() => window.location.reload()} className="w-full">
                                Refresh Page
                            </Button>
                        </div>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;


