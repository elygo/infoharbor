import { Component, ErrorInfo, ReactNode } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by error boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col justify-center items-center w-full h-96 ">
          <p className="text-lg m-4">
            Xatolikka yo'l qo'yildi. Iltimos, keyinroq urib ko'ring!
          </p>
          <p className="text-lg  m-4">
            Something went wrong. Please, try again later!
          </p>
          <p className="text-lg  m-4">
            Что-то пошло не так. Пожалуйста, попробуйте позже!
          </p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
