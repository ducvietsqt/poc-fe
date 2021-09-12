import { NETWORK } from '@/env'

export const error = ($notification, error) => {
  if (error.code && error.code == 4001) {
    return $notification({
      type: "error",
      title: "Request rejected!",
      text: "You have rejected to sign the request. The transaction has been cancelled.",
    });
  }

  if (NETWORK === "mainnet") {
    return $notification({
      type: "error",
      title: "Request rejected!",
      text: "An error has occurred when you tried to submit the request. This maybe a server or contract issue. Please try again later.",
    });
  }

  return $notification({
    type: "error",
    title: error.title || 'Error occurred!',
    text: error.message || error,
  });
};

export const success = ($notification, success) => {
  return $notification({
    type: "success",
    title: success.title || 'Success',
    text: success.message || success,
  });
};

export default {
  error,
  success
}